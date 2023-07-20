# models/user.py
class User:
    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password
        
       
    
    def is_valid(self):
        return bool(self.username and self.email and self.password)




# class User:
#     def __init__(self,name,hostStatus,location,propertyType,about,hostingSince):
#         self.name = username
#         self.hostStatus = email
#         self.location = password
#         self.role = role