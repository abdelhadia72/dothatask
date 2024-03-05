#!/usr/bin/python3
""" objects that handle all default RestFul API actions for Clients """
from flask import jsonify, request
from api.v1.views import app_v1, SessionLocal, db_manager
from models.clients import Client


session = SessionLocal()


# @app_v1.route('/clients', methods=['POST'], strict_slashes=False)
# def create_client():
#     """ create client into database"""
#     data = request.get_json()
#     if not data:
#         return jsonify({"error": "Not a JSON"}), 400
#     if "description" not in data:
#         return jsonify({"error": "Missing description"}), 400
#     if "status" not in data:
#         return jsonify({"error": "Missing status"}), 400
#     return jsonify(db_manager.add(Client, Client(**data))), 201


@app_v1.route('/clients', methods=['GET'], strict_slashes=False)
def get_clients():
    """ get all clients """
    data = db_manager.show(Client)
    sdata = [el.to_dict() for el in data]
    return jsonify(sdata)


@app_v1.route('/clients/<client_id>', methods=['GET'], strict_slashes=False)
def get_client(client_id):
    """ get client by id """
    client = db_manager.get(Client, client_id)
    if not client:
        return jsonify({"error": "Client not found"}), 404
    return jsonify(client.to_dict())


@app_v1.route('/clients/<client_id>', methods=['DELETE'], strict_slashes=False)
def delete_client(client_id):
    """ delete client by id """
    client = db_manager.get(Client, client_id)
    if not client:
        return jsonify({"error": "Client not found"}), 404
    db_manager.delete(client)
    return jsonify({}), 200


@app_v1.route('/clients/<client_id>', methods=['PUT'], strict_slashes=False)
def update_client(client_id):
    """ update client by id """
    client = db_manager.get(Client, client_id)
    if not client:
        return jsonify({"error": "Client not found"}), 404
    data = request.get_json()
    if not data:
        return jsonify({"error": "Not a JSON"}), 400
    for key, value in data.items():
        if key not in ["id", "email", "created_at", "updated_at"]:
            setattr(client, key, value)
    db_manager.save()
    return jsonify(client.to_dict()), 200
