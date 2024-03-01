#!/usr/bin/python3
""" objects that handle all default RestFul API actions for Users """

from flask import jsonify, request
from api.v1.views import app_v1
from models.users import User
from models.db import DBManager

dd = DBManager()

@app_v1.route('/login', methods=['POST'], strict_slashes=False)
def create_user():
    """ create user """
    data = request.get_json()
    if not data:
        return jsonify({"error": "Not a JSON"}), 400
    if 'email' not in data or 'password' not in data:
        return jsonify({"error": "Missing email or password"}), 400
    user = User(**data)
    user.save()
    return jsonify(user.to_dict()), 201

    # data = request.get_json()
    # if not data:
    #     return jsonify({"error": "Not a JSON"}), 400
    # if 'email' not in data or 'password' not in data:
    #     return jsonify({"error": "Missing email or password"}), 400
    # else:
    #     return jsonify({"email": data['email'], "password": data['password']}), 200
    # user = User(**data)
    # user.save()
    # return jsonify(user.to_dict()), 201


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

