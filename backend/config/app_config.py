import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Import MongoClient class from pymongo library
from pymongo import MongoClient

# Function to obtain the MongoDB client connection
def get_mongo_client():
    # Get the MongoDB URL from environment variables
    MONGO_URL = os.getenv("MONGO_URL")
    
    # Create a MongoClient instance using the obtained URL
    client = MongoClient(MONGO_URL)
    
    # Return the MongoClient instance
    return client

# Function to retrieve the "users" collection from the database
def get_users_collection():
    # Get the MongoDB client
    client = get_mongo_client()
    
    # Access the "Homestead" database
    db = client["Homestead"]
    
    # Retrieve the "users" collection within the "Homestead" database
    users_collection = db["users"]
    
    # Return the "users" collection
    return users_collection

# Function to retrieve the "guests" collection from the database
def get_guests_collection():
    # Get the MongoDB client
    client = get_mongo_client()
    
    # Access the "Homestead" database
    db = client["Homestead"]
    
    # Retrieve the "guests" collection within the "Homestead" database
    guests_collection = db["guests"]
    
    # Return the "guests" collection
    return guests_collection

# Function to retrieve the "property" collection from the database
def get_property_collection():
    # Get the MongoDB client
    client = get_mongo_client()
    
    # Access the "Homestead" database
    db = client["Homestead"]
    
    # Retrieve the "property" collection within the "Homestead" database
    property_collection = db["property"]
    
    # Return the "property" collection
    return property_collection

# Function to retrieve the "bookings" collection from the database
def get_bookings_collection():
    # Get the MongoDB client
    client = get_mongo_client()
    
    # Access the "Homestead" database
    db = client["Homestead"]
    
    # Retrieve the "bookings" collection within the "Homestead" database
    bookings_collection = db["bookings"]
    
    # Return the "bookings" collection
    return bookings_collection

# Function to retrieve the "hosts" collection from the database
def get_hosts_collection():
    # Get the MongoDB client
    client = get_mongo_client()
    
    # Access the "Homestead" database
    db = client["Homestead"]
    
    # Retrieve the "hosts" collection within the "Homestead" database
    hosts_collection = db["hosts"]
    
    # Return the "hosts" collection
    return hosts_collection
