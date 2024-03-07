from flask import Flask, jsonify, request, make_response
from api.v1.views import app_v1
import jwt



app = Flask(__name__)
app.config['JWT+SECRET_KEY'] = 'a1268304e9b44019b8483cd3381962d0'
app.register_blueprint(app_v1)


if __name__ == '__main__':
    app.run(port=5000, host="0.0.0.0", debug=True)
