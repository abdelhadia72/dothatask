#!/usr/bin/python3
""" objects that handle all default RestFul API actions for Categories """
from flask import jsonify, request
from api.v1.views import app_v1, SessionLocal, db_manager
from models.categories import Category

session = SessionLocal()


@app_v1.route('/categories', methods=['POST'], strict_slashes=False)
def create_category():
    """ create category into database"""
    data = request.get_json()
    if not data:
        return jsonify({"error": "Not a JSON"}), 400
    if "name" not in data:
        return jsonify({"error": "Missing name"}), 400
    db_manager.add(Category, Category(**data))
    get_category = session.query(Category).filter_by(name=data['name']).first()
    if get_category is None:
        return jsonify({"error": "Category not found"}), 404
    return jsonify(get_category.to_dict()), 201


@app_v1.route('/categories', methods=['GET'], strict_slashes=False)
def get_categories():
    """ get all categories """
    data = db_manager.show(Category)
    sdata = [el.to_dict() for el in data]
    return jsonify(sdata)


@app_v1.route('/categories/<category_id>', methods=['GET'], strict_slashes=False)
def get_category(category_id):
    """ get category by id """
    category = db_manager.get(Category, category_id)
    if not category:
        return jsonify({"error": "Category not found"}), 404
    return jsonify(category.to_dict())


@app_v1.route('/categories/<category_id>', methods=['DELETE'], strict_slashes=False)
def delete_category(category_id):
    """ delete category by id """
    category = db_manager.get(Category, category_id)
    if not category:
        return jsonify({"error": "Category not found"}), 404
    db_manager.delete(category)
    return jsonify({}), 200


@app_v1.route('/categories/<category_id>', methods=['PUT'], strict_slashes=False)
def update_category(category_id):
    """ update category by id """
    category = db_manager.get(Category, category_id)
    if not category:
        return jsonify({"error": "Category not found"}), 404
    data = request.get_json()
    if not data:
        return jsonify({"error": "Not a JSON"}), 400
    for key, value in data.items():
        setattr(category, key, value)
    db_manager.commit()
    return jsonify(category.to_dict()), 200
