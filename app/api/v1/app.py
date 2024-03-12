from flask import Flask, jsonify
from api.v1.views import app_v1
from flask_cors import CORS

app = Flask(__name__)
app.register_blueprint(app_v1)
CORS(app)


if __name__ == '__main__':
    app.run(port=5000, host="0.0.0.0", debug=True)
