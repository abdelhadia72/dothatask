from flask import jsonify, Blueprint
from app.models.db import show
from app.models.review import Review

app = Blueprint('routes', __name__)  # Create a Blueprint for routes

@app.route('/workers')
def get_workers():
    workers_data = show(Review)
    serialized_data = [worker.to_dict() for worker in workers_data]
    return jsonify(serialized_data)
