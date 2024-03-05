#!/usr/bin/python3
""" objects that handle all default RestFul API actions for Workers """

from flask import jsonify, request
from api.v1.views import app_v1, SessionLocal, db_manager
from models.workers import Worker

session = SessionLocal()


@app_v1.route('/worker', methods=['POST'], strict_slashes=False)
def create_worker():
    """ create a new worker """
    data = request.get_json()
    if not data:
        return jsonify({"error": "Not a JSON"}), 400
    if 'title' not in data:
        return jsonify({"error": "Missing title"}), 400
    if 'status' not in data:
        return jsonify({"error": "Missing status"}), 400
    if 'category_id' not in data:
        return jsonify({"error": "Missing category"}), 400
    if 'user_id' not in data:
        return jsonify({"error": "Missing user"}), 400
    db_manager.add(Worker, Worker(**data))
    get_worker = session.query(Worker).filter_by(title=data['title']).first()
    if get_worker is None:
        return jsonify({"error": "Worker not found"}), 404
    return jsonify(get_worker.to_dict()), 201
    

@app_v1.route('/worker', methods=['GET'], strict_slashes=False)
def get_worker():
    """ get all worker """
    data = db_manager.show(Worker)
    sdata = [el.to_dict() for el in data]
    return jsonify(sdata)


@app_v1.route('/worker/<worker_id>', methods=['GET'], strict_slashes=False)
def get_worker_by_id(worker_id):
    """ get worker by id """
    worker = db_manager.get(Worker, worker_id)
    if not worker:
        return jsonify({"error": "Worker not found"}), 404
    return jsonify(worker.to_dict())


@app_v1.route('/worker/<worker_id>', methods=['DELETE'], strict_slashes=False)
def delete_worker(worker_id):
    """ delete worker by id """
    worker = db_manager.get(Worker, worker_id)
    if not worker:
        return jsonify({"error": "Worker not found"}), 404
    db_manager.delete(worker)
    return jsonify({}), 200


@app_v1.route('/worker/<worker_id>', methods=['PUT'], strict_slashes=False)
def update_worker(worker_id):
    """ update worker by id """
    worker = db_manager.get(Worker, worker_id)
    if not worker:
        return jsonify({"error": "Worker not found"}), 404
    data = request.get_json()
    if not data:
        return jsonify({"error": "Not a JSON"}), 400
    for key, value in data.items():
        setattr(worker, key, value)
    db_manager.commit()
    return jsonify(worker.to_dict()), 200
