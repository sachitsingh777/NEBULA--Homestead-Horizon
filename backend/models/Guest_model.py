class Guest:
    def __init__(self, name, email, phone):
        # Constructor to initialize Guest object
        self.name = name       # Name of the guest
        self.email = email     # Email of the guest
        self.phone = phone     # Phone number of the guest

    def to_dict(self):
        # Convert Guest object to a dictionary
        return {
            "name": self.name,     # Include name in dictionary
            "email": self.email,   # Include email in dictionary
            "phone": self.phone    # Include phone number in dictionary
        }
