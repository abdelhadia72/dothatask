from flask import Flask, jsonify
from models.db import show
from models.workers import Worker
import pickle  

app = Flask(__name__)

@app.route('/workers')
def get_workers():
    workers_data = show(Worker)
    serialized_data = [worker.to_dict() for worker in workers_data]
    return jsonify(serialized_data)

if __name__ == '__main__':
    app.run(port=5000, host="0.0.0.0", debug=True)