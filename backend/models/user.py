from werkzeug.security import generate_password_hash, check_password_hash

# Password Property
@property
def password(self):
    raise AttributeError("Password is not a readable attribute.")

@password.setter
def password(self, password):
    self.password_hash = generate_password_hash(password)

def authenticate(self, password):
    return check_password_hash(self.password_hash, password)