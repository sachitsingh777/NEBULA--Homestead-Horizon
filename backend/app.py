from flask import Flask,request,jsonify
from flask_cors import CORS
from routes.User_routes import users_Detail
import os
PORT = os.getenv("PORT")
app = Flask(__name__)
CORS(app, origins='*')
app = Flask(__name__)

app.register_blueprint(users_Detail, url_prefix="/users")
@app.route('/')
def hello_world():
    return jsonify('Hello, World!')

if __name__ == '__main__':
    app.run(debug=True)