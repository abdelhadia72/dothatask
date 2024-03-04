#!/usr/bin/python3
""" objects that handle all default RestFul API actions for Users """

from flask import jsonify, request
from api.v1.views import app_v1
from models.users import User
from models.db import DBManager

dd = DBManager()


@app_v1.route('/users', methods=['POST'], strict_slashes=False)
def create_user():
    """ create user into database"""
    data = request.get_json()
    if not data:
        return jsonify({"error": "Not a JSON"}), 400
    if "password" not in data:
        return jsonify({"error": "Missing password"}), 400
    if "email" not in data:
        return jsonify({"error": "Missing email"}), 400
    if "first_name" not in data:
        return jsonify({"error": "Missing first_name"}), 400
    if "last_name" not in data:
        return jsonify({"error": "Missing last_name"}), 400
    if "gender" not in data:
        return jsonify({"error": "Missing gender"}), 400
    if "birth_date" not in data:
        return jsonify({"error": "Missing birth_date"}), 400
    if "phone" not in data:
        return jsonify({"error": "Missing phone"}), 400
    if "type" not in data:
        return jsonify({"error": "Missing type"}), 400
    user = User(**data)
    dd.add(User, user)
    return jsonify(user.to_dict()), 201


@app_v1.route('/users', methods=['GET'], strict_slashes=False)
def get_users():
    """ get all users """
    data = dd.show(User)
    sdata = [el.to_dict() for el in data]
    return jsonify(sdata)


@app_v1.route('/users/<user_id>', methods=['GET'], strict_slashes=False)
def get_user(user_id):
    """ get user by id """
    user = dd.get(User, user_id) 
    if not user:
        return jsonify({"error": "User not found"}), 404
    return jsonify(user.to_dict())


@app_v1.route('/users/<user_id>', methods=['DELETE'], strict_slashes=False)
def delete_user(user_id):
    """ delete user by id """
    user = dd.get(User, user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    dd.delete(User, user_id)
    return jsonify({}), 204


@app_v1.route('/users/<user_id>', methods=['PUT'], strict_slashes=False)
def update_user(user_id):
    """ update user by id """
    user = dd.get(User, user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    data = request.get_json()
    if not data:
        return jsonify({"error": "Not a JSON"}), 400
    for key, value in data.items():
        setattr(user, key, value)
    dd.update(User, user_id, data)
    return jsonify(user.to_dict()), 200
