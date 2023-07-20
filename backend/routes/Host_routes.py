from flask import Blueprint, request, jsonify
from models.Host_model import Host  # Assuming you have created the Host model
import bcrypt
import jwt
import datetime
from config.app_config import get_hosts_collection  # Update this to get the Hosts collection

hosts_collection = get_hosts_collection()
hosts_Detail = Blueprint("hosts", __name__)

# Create a new host
@hosts_Detail.route("/register", methods=["POST"])
def register_host():
    data = request.get_json()
    name = data.get("name")
    hostStatus = data.get("hostStatus")
    location = data.get("location")
    propertyType = data.get("propertyType")
    about = data.get("about")
    hostingSince = data.get("hostingSince")

    # Create a new Host instance
    new_host = Host(name, hostStatus, location, propertyType, about, hostingSince)

    if new_host.is_valid():
        # Insert the new host into the database
        result = hosts_collection.insert_one(new_host.to_dict())

        if result.inserted_id:
            return jsonify({"message": "Host registered successfully!"}), 201
        else:
            return jsonify({"message": "Failed to register host."}), 500
    else:
        return jsonify({"message": "Fill all the details"}), 401


# Host login (assuming login functionality for hosts)
@hosts_Detail.route("/login", methods=["POST"])
def login_host():
    data = request.get_json()
    email = data.get("email")  # Update this to the correct field for host's email (if applicable)
    password = data.get("password")  # Update this to the correct field for host's password (if applicable)

    # Retrieve the host document from the database based on the email
    host_data = hosts_collection.find_one({"email": email})  # Update this to the correct query based on your MongoDB schema

    if host_data is None:
        return jsonify({"message": "Invalid email or password"}), 401

    # Retrieve the hashed password from the host document
    hashed_password = host_data["password"].encode("utf-8")

    # Verify the password using bcrypt
    if bcrypt.checkpw(password.encode("utf-8"), hashed_password):
        # Create a JWT token for authentication
        payload = {
            "host_id": str(host_data["_id"]),
            # Token expiration time (e.g., 1 day)
            "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1)
        }
        # Replace this with a strong secret key for production use
        secret_key = "homestead"
        token = jwt.encode(payload, secret_key, algorithm="HS256")

        return jsonify({"message": "Login successful", "token": token, "name": host_data["name"]}), 200

    else:
        return jsonify({"message": "Invalid email or password"}), 401
