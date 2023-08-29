class Host:
    def __init__(self, name, email, password, image):
        # Constructor to initialize Host object
        self.name = name           # Name of the host
        self.email = email         # Email of the host
        self.password = password   # Password of the host
        self.image = image         # Image associated with the host

    def to_dict(self):
        # Convert Host object to a dictionary
        return {
            "name": self.name,         # Include name in dictionary
            "email": self.email,       # Include email in dictionary
            "password": self.password, # Include password in dictionary
            "image": self.image        # Include image in dictionary
        }

    def is_valid(self):
        # Check if all required fields are filled
        if not self.name or not self.email or not self.password or not self.image:
            return False
        return True
