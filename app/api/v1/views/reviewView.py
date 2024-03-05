#!/usr/bin/python3
""" objects that handle all default RestFul API actions for Reviews """
from flask import jsonify, request
from api.v1.views import app_v1, SessionLocal, db_manager
from models.review import Review


session = SessionLocal()


@app_v1.route('/reviews', methods=['POST'], strict_slashes=False)
def create_review():
    """ create review into database"""
    data = request.get_json()
    if not data:
        return jsonify({"error": "Not a JSON"}), 400
    if "rating" not in data:
        return jsonify({"error": "Missing rating"}), 400
    if "description" not in data:
        return jsonify({"error": "Missing description"}), 400
    if "client_id" not in data:
        return jsonify({"error": "Missing client_id"}), 400
    if "product_id" not in data:
        return jsonify({"error": "Missing product_id"}), 400
    return jsonify(db_manager.add(Review, Review(**data))), 201


@app_v1.route('/reviews', methods=['GET'], strict_slashes=False)
def get_reviews():
    """ get all reviews """
    data = db_manager.show(Review)
    sdata = [el.to_dict() for el in data]
    return jsonify(sdata)


@app_v1.route('/reviews/<review_id>', methods=['GET'], strict_slashes=False)
def get_review(review_id):
    """ get review by id """
    review = db_manager.get(Review, review_id)
    if not review:
        return jsonify({"error": "Review not found"}), 404
    return jsonify(review.to_dict())


@app_v1.route('/reviews/<review_id>', methods=['DELETE'], strict_slashes=False)
def delete_review(review_id):
    """ delete review by id """
    review = db_manager.get(Review, review_id)
    if not review:
        return jsonify({"error": "Review not found"}), 404
    db_manager.delete(review)
    return jsonify({}), 200


@app_v1.route('/reviews/<review_id>', methods=['PUT'], strict_slashes=False)
def update_review(review_id):
    """ update review by id """
    review = db_manager.get(Review, review_id)
    if not review:
        return jsonify({"error": "Review not found"}), 404
    data = request.get_json()
    if not data:
        return jsonify({"error": "Not a JSON"}), 400
    for key, value in data.items():
        if key not in ['rating', 'description', 'client_id', 'product_id']:
            return jsonify({"error": "Invalid key"}), 400
        setattr(review, key, value)
    db_manager.save()
    return jsonify(review.to_dict()), 200
