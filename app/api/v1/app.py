from flask import Flask, jsonify
from models.db import show
from models.review import Review

app = Flask(__name__)

@app.route('/workers')
def get_workers():
    data = show(Review)
    sdata = [el.to_dict() for el in data]
    return jsonify({'workers': "200"})

if __name__ == '__main__':
    app.run(port=5000, host="0.0.0.0", debug=True)
