from flask import Flask, jsonify
from models.review import Review
from models.db import DBManager

app = Flask(__name__)


@app.route('/app')
def get_workers():
    db_ss = DBManager()
    data = db_ss.show(Review)
    sdata = [el.to_dict() for el in data]
    return jsonify(sdata)


if __name__ == '__main__':
    app.run(port=5000, host="0.0.0.0", debug=True)
