class Property:
    def __init__(self, host_id, property_type, location, description, max_guests, amenities, image, price):
        # Constructor to initialize Property object
        self.host_id = host_id                   # ID of the hosting host
        self.property_type = property_type       # Type of the property (e.g., apartment, house)
        self.location = location                 # Location of the property
        self.description = description           # Description of the property
        self.max_guests = max_guests             # Maximum number of guests allowed
        self.amenities = amenities               # List of amenities available
        self.image = image                       # Image associated with the property
        self.price = price                       # Price of the property

    def to_dict(self):
        # Convert Property object to a dictionary
        return {
            "host_id": self.host_id,             # Include host ID in dictionary
            "property_type": self.property_type, # Include property type in dictionary
            "location": self.location,           # Include location in dictionary
            "description": self.description,     # Include description in dictionary
            "max_guests": self.max_guests,       # Include max guests in dictionary
            "amenities": self.amenities,         # Include amenities in dictionary
            "image": self.image,                 # Include image in dictionary
            "price": self.price                  # Include price in dictionary
        }
