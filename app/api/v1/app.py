from flask import Flask, jsonify
from api.v1.views import app_v1


app = Flask(__name__)
app.register_blueprint(app_v1)


# @app.route('/app', strict_slashes=False)
# def get_workers():
#     db_ss = DBManager()
#     data = db_ss.show(Review)
#     sdata = [el.to_dict() for el in data]
#     return jsonify(sdata)


if __name__ == '__main__':
    app.run(port=5000, host="0.0.0.0", debug=False)
