#!/usr/bin/python3
""" objects that handle all default RestFul API actions for Cities """

from flask import jsonify, request
from api.v1.views import app_v1, SessionLocal, db_manager
from models.cities import City

session = SessionLocal()


@app_v1.route('/cities', methods=['POST'], strict_slashes=False)
def create_city():
    """ create city into database"""
    data = request.get_json()
    if not data:
        return jsonify({"error": "Not a JSON"}), 400
    if "name" not in data:
        return jsonify({"error": "Missing name"}), 400

    db_manager.add(City, City(**data))
    get_city = session.query(City).filter_by(name=data['name']).first()
    if get_city is None:
        return jsonify({"error": "City not found"}), 404
    return jsonify(get_city.to_dict()), 201


@app_v1.route('/cities', methods=['GET'], strict_slashes=False)
def get_cities():
    """ get all cities """
    data = db_manager.show(City)
    sdata = [el.to_dict() for el in data]
    return jsonify(sdata)


@app_v1.route('/cities/<city_id>', methods=['GET'], strict_slashes=False)
def get_city(city_id):
    """ get city by id """
    city = db_manager.get(City, city_id)
    if not city:
        return jsonify({"error": "City not found"}), 404
    return jsonify(city.to_dict())


@app_v1.route('/cities/<city_id>', methods=['DELETE'], strict_slashes=False)
def delete_city(city_id):
    """ delete city by id """
    city = db_manager.get(City, city_id)
    if not city:
        return jsonify({"error": "City not found"}), 404
    db_manager.delete(city)
    return jsonify({}), 200


@app_v1.route('/cities/<city_id>', methods=['PUT'], strict_slashes=False)
def update_city(city_id):
    """ update city by id """
    data = request.get_json()
    if not data:
        return jsonify({"error": "Not a JSON"}), 400
    city = db_manager.get(City, city_id)
    if not city:
        return jsonify({"error": "City not found"}), 404
    for key, value in data.items():
        setattr(city, key, value)
    db_manager.save()
    return jsonify(city.to_dict()), 200

