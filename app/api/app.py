# from flask import Flask, jsonify
from flask import Flask
from models import User, SBStorage

app = Flask(__name__)

@app.route('/user')
def home():
    storage = SBStorage()
    users = storage.all(User).values()
    return ("Hoory")

if __name__ == '__main__':
    app.run(port=5000, host="0.0.0.0", debug=True)