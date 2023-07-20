import os
from dotenv import load_dotenv
load_dotenv()  # Load the environment variables from the .env file
from pymongo import MongoClient

def get_mongo_client():
    MONGO_URL = os.getenv("MONGO_URL")
    client = MongoClient(MONGO_URL)
    return client

def get_users_collection():
    client = get_mongo_client()
    db = client["Homestead"]
    users_collection = db["users"]
    return users_collection