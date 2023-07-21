from flask import Blueprint, request, jsonify
from models.Host_model import Host 
from bson import ObjectId
import bcrypt
import jwt
import datetime
from config.app_config import get_hosts_collection

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
    hashed_password = host_data.get("password")

    if hashed_password and bcrypt.checkpw(password.encode(), hashed_password):
        # Create a JWT token for authentication
        payload = {
            "host_id": str(host_data["_id"]),
            # Token expiration time (e.g., 1 day)
            "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1)
        }
        # Replace this with a strong secret key for production use
        secret_key = "your_secret_key"
        token = jwt.encode(payload, secret_key, algorithm="HS256")

        return jsonify({"message": "Login successful", "token": token, "name": host_data["name"]}), 200

    else:
        return jsonify({"message": "Invalid email or password"}), 401


@hosts_Detail.route("/api/hosts", methods=["GET"])
def get_all_hosts():
    # Retrieve all hosts from the MongoDB collection
    all_hosts = hosts_collection.find()

    # Convert the MongoDB documents to a list of dictionaries
    hosts_list = []
    for host_data in all_hosts:
        hosts_list.append({
            "id": str(host_data["_id"]),         # Convert the ObjectId to a string
            "name": host_data["name"],
            "hostStatus": host_data["hostStatus"],
            "location": host_data["location"],
            "propertyType": host_data["propertyType"],
            "about": host_data["about"],
            "hostingSince": host_data["hostingSince"]
        })

    return jsonify(hosts_list), 200


@hosts_Detail.route("/api/hosts/<string:host_id>", methods=["GET"])
def get_host_by_id(host_id):
    # Retrieve the host document from the database based on the host_id
    host_data = hosts_collection.find_one({"_id": ObjectId(host_id)})

    if host_data:
        host = {
            "id": str(host_data["_id"]),
            "name": host_data["name"],
            "hostStatus": host_data["hostStatus"],
            "location": host_data["location"],
            "propertyType": host_data["propertyType"],
            "about": host_data["about"],
            "hostingSince": host_data["hostingSince"]
        }
        return jsonify(host), 200
    else:
        return jsonify({"message": "Host not found"}), 404


@hosts_Detail.route("/api/hosts/<string:host_id>", methods=["PUT"])
def update_host(host_id):
    data = request.get_json()
    name = data.get("name")
    hostStatus = data.get("hostStatus")
    location = data.get("location")
    propertyType = data.get("propertyType")
    about = data.get("about")
    hostingSince = data.get("hostingSince")

    updated_host = Host(name, hostStatus, location, propertyType, about, hostingSince)

    if updated_host.is_valid():
        # Update the host document in the database based on the host_id
        result = hosts_collection.update_one({"_id": ObjectId(host_id)}, {"$set": updated_host.to_dict()})

        if result.modified_count > 0:
            return jsonify({"message": "Host updated successfully!"}), 200
        else:
            return jsonify({"message": "Host not found"}), 404
    else:
        return jsonify({"message": "Fill all the details"}), 401


@hosts_Detail.route("/api/hosts/<string:host_id>", methods=["DELETE"])
def delete_host(host_id):
    # Delete the host document from the database based on the host_id
    result = hosts_collection.delete_one({"_id": ObjectId(host_id)})

    if result.deleted_count > 0:
        return jsonify({"message": "Host deleted successfully!"}), 200
    else:
        return jsonify({"message": "Host not found"}), 404
