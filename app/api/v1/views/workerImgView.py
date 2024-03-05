#!/usr/bin/python3
""" objects that handle all default RestFul API actions for WorkerImg """

from flask import jsonify, request
from api.v1.views import app_v1, SessionLocal, db_manager
from models.worker_image import WorkerImg

session = SessionLocal()


@app_v1.route('/worker_img', methods=['POST'], strict_slashes=False)
def create_worker_img():
    """ create worker_img into database"""
    data = request.get_json()
    if not data:
        return jsonify({"error": "Not a JSON"}), 400
    if "image_url" not in data:
        return jsonify({"error": "Missing image_url"}), 400
    if "worker_id" not in data:
        return jsonify({"error": "Missing worker_id"}), 400

    db_manager.add(WorkerImg, WorkerImg(**data))
    get_worker_img = session.query(WorkerImg).filter_by(image_url=data['image_url']).first()
    if get_worker_img is None:
        return jsonify({"error": "WorkerImg not found"}), 404
    return jsonify(get_worker_img.to_dict()), 201


@app_v1.route('/worker_img', methods=['GET'], strict_slashes=False)
def get_worker_imgs():
    """ get all worker_imgs """
    data = db_manager.show(WorkerImg)
    sdata = [el.to_dict() for el in data]
    return jsonify(sdata)


@app_v1.route('/worker_img/<worker_img_id>', methods=['GET'], strict_slashes=False)
def get_worker_img(worker_img_id):
    """ get worker_img by id """
    worker_img = db_manager.get(WorkerImg, worker_img_id)
    if not worker_img:
        return jsonify({"error": "WorkerImg not found"}), 404
    return jsonify(worker_img.to_dict())


@app_v1.route('/worker_img/<worker_img_id>', methods=['DELETE'], strict_slashes=False)
def delete_worker_img(worker_img_id):
    """ delete worker_img by id """
    worker_img = db_manager.get(WorkerImg, worker_img_id)
    if not worker_img:
        return jsonify({"error": "WorkerImg not found"}), 404
    db_manager.delete(worker_img)
    return jsonify({}), 200


@app_v1.route('/worker_img/<worker_img_id>', methods=['PUT'], strict_slashes=False)
def update_worker_img(worker_img_id):
    """ update worker_img by id """
    worker_img = db_manager.get(WorkerImg, worker_img_id)
    if not worker_img:
        return jsonify({"error": "WorkerImg not found"}), 404
    data = request.get_json()
    if not data:
        return jsonify({"error": "Not a JSON"}), 400
    for key, value in data.items():
        setattr(worker_img, key, value)
    db_manager.commit()
    return jsonify(worker_img.to_dict()), 200
