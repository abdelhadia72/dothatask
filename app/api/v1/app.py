from flask import Flask, jsonify
from api.v1.views import app_v1


app = Flask(__name__)
app.register_blueprint(app_v1)


if __name__ == '__main__':
    app.run(port=5000, host="0.0.0.0", debug=True)
