class Host:
    def __init__(self, name, hostStatus, location, propertyType, about, hostingSince):
        self.name = name
        self.hostStatus = hostStatus
        self.location = location
        self.propertyType = propertyType
        self.about = about
        self.hostingSince = hostingSince

    def to_dict(self):
       
        return {
            "name": self.name,
            "hostStatus": self.hostStatus,
            "location": self.location,
            "propertyType": self.propertyType,
            "about": self.about,
            "hostingSince": self.hostingSince
        }