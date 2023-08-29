class Booking:
    def __init__(self, property_id, host_id, check_in, check_out, total_price):
        # Constructor to initialize Booking object
        self.property_id = property_id   # The ID of the booked property
        self.host_id = host_id           # The ID of the hosting user
        self.check_in = check_in         # The check-in date
        self.check_out = check_out       # The check-out date
        self.total_price = total_price   # The total price of the booking

    def to_dict(self):
        # Convert Booking object to a dictionary
        return {
            "property_id": self.property_id,   # Include property ID in dictionary
            "host_id": self.host_id,           # Include host ID in dictionary
            "check_in": self.check_in,         # Include check-in date in dictionary
            "check_out": self.check_out,       # Include check-out date in dictionary
            "total_price": self.total_price    # Include total price in dictionary
        }
