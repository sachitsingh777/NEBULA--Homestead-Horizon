from app import create_app
import json

app = create_app()  # Create a test Flask app instance

client = app.test_client()

def test_register_host():
    data = {
        "name": "Test Host",
        "email": "test@example.com",
        "password": "test_password",
        "image": "test_image"
    }
    
    response = client.post("/register", json=data)
    assert response.status_code == 201
    assert "Host registered successfully!" in response.get_data(as_text=True)

def test_login_host():
    data = {
        "email": "test@example.com",
        "password": "test_password"
    }
    
    response = client.post("/login", json=data)
    assert response.status_code == 200
    data = json.loads(response.get_data(as_text=True))
    assert "token" in data
    assert "name" in data
    assert "host_id" in data

def test_get_all_hosts():
    response = client.get("/api/hosts")
    assert response.status_code == 200
    hosts = json.loads(response.get_data(as_text=True))
    assert isinstance(hosts, list)

def test_get_host_by_id():
    # You should have a host_id from a previous test or database insertion
    host_id = "valid_host_id"
    response = client.get(f"/api/hosts/{host_id}")
    assert response.status_code == 200
    host = json.loads(response.get_data(as_text=True))
    assert isinstance(host, dict)

def test_update_host():
    # You should have a host_id from a previous test or database insertion
    host_id = "valid_host_id"
    data = {
        "name": "Updated Host",
        "email": "updated@example.com",
        "password": "updated_password",
        "image": "updated_image"
    }
    
    response = client.put(f"/api/hosts/{host_id}", json=data)
    assert response.status_code == 200
    assert "Host updated successfully!" in response.get_data(as_text=True)

def test_delete_host():
    # You should have a host_id from a previous test or database insertion
    host_id = "valid_host_id"
    response = client.delete(f"/api/hosts/{host_id}")
    assert response.status_code == 200
    assert "Host deleted successfully!" in response.get_data(as_text=True)

def test_create_property():
    data = {
        "host_id": "host_id",
        "property_type": "House",
        "location": "Test Location",
        "description": "Test Property",
        "max_guests": 4,
        "amenities": ["WiFi", "Parking"],
        "image": "test_image",
        "price": 200
    }
    
    response = client.post("/create", json=data)
    assert response.status_code == 201
    assert "Property created successfully!" in response.get_data(as_text=True)

def test_get_all_properties():
    response = client.get("/allproperties")
    assert response.status_code == 200
    properties = json.loads(response.get_data(as_text=True))
    assert isinstance(properties, list)

def test_get_property_by_id():
    # You should have a property_id from a previous test or database insertion
    property_id = "valid_property_id"
    response = client.get(f"/properties/{property_id}")
    assert response.status_code == 200
    property_data = json.loads(response.get_data(as_text=True))
    assert isinstance(property_data, dict)

def test_update_property():
    # You should have a property_id from a previous test or database insertion
    property_id = "valid_property_id"
    data = {
        "host_id": "new_host_id",
        "property_type": "Apartment",
        "location": "Updated Location",
        "description": "Updated Property",
        "max_guests": 6,
        "amenities": ["WiFi", "Pool"],
        "image": "updated_image",
        "price": 300
    }
    
    response = client.put(f"/properties/{property_id}", json=data)
    assert response.status_code == 200
    assert "Property updated successfully!" in response.get_data(as_text=True)

def test_delete_property():
    # You should have a property_id from a previous test or database insertion
    property_id = "valid_property_id"
    response = client.delete(f"/properties/{property_id}")
    assert response.status_code == 200
    assert "Property deleted successfully!" in response.get_data(as_text=True)

def test_get_properties_by_host():
    # You should have a host_id from a previous test or database insertion
    host_id = "valid_host_id"
    response = client.get(f"/hostproperties/{host_id}")
    assert response.status_code == 200
    properties = json.loads(response.get_data(as_text=True))
    assert isinstance(properties, list)


def test_create_booking():
    data = {
        "property_id": "valid_property_id",
        "host_id": "valid_host_id",
        "check_in": "2023-08-15",
        "check_out": "2023-08-20",
        "total_price": 500
    }
    
    response = client.post("/bookings", json=data)
    assert response.status_code == 201
    assert "Booking created successfully!" in response.get_data(as_text=True)

def test_get_bookings_by_host():
    # You should have a host_id from a previous test or database insertion
    host_id = "valid_host_id"
    response = client.get(f"/bookings/{host_id}")
    assert response.status_code == 200
    bookings = json.loads(response.get_data(as_text=True))
    assert isinstance(bookings, list)

def test_get_all_bookings():
    response = client.get("/bookings")
    assert response.status_code == 200
    bookings = json.loads(response.get_data(as_text=True))
    assert isinstance(bookings, list)

def test_get_booking_by_id():
    # You should have a booking_id from a previous test or database insertion
    booking_id = "valid_booking_id"
    response = client.get(f"/bookings/{booking_id}")
    assert response.status_code == 200
    booking_data = json.loads(response.get_data(as_text=True))
    assert isinstance(booking_data, dict)

def test_update_booking():
    # You should have a booking_id from a previous test or database insertion
    booking_id = "valid_booking_id"
    data = {
        "property_id": "new_property_id",
        "host_id": "new_host_id",
        "check_in": "2023-08-22",
        "check_out": "2023-08-25",
        "total_price": 600
    }
    
    response = client.put(f"/bookings/{booking_id}", json=data)
    assert response.status_code == 200
    assert "Booking updated successfully!" in response.get_data(as_text=True)

def test_delete_booking():
    # You should have a booking_id from a previous test or database insertion
    booking_id = "valid_booking_id"
    response = client.delete(f"/bookings/{booking_id}")
    assert response.status_code == 200
    assert "Booking deleted successfully!" in response.get_data(as_text=True)
