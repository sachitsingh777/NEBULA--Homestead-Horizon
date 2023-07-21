class Property:
    def __init__(self, property_type, location, description, max_guests, amenities):
        self.property_type = property_type
        self.location = location
        self.description = description
        self.max_guests = max_guests
        self.amenities = amenities

    def to_dict(self):
        return {
            "property_type": self.property_type,
            "location": self.location,
            "description": self.description,
            "max_guests": self.max_guests,
            "amenities": self.amenities
        }
