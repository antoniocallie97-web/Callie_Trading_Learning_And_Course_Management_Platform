from datetime import datetime

from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy_serializer import SerializerMixin

from extensions import db


class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    serialize_rules = (
        "-password_hash",
        "-profile.user",
        "-guides.author",
        "-comments.user",
        "-enrollments.user",
    )

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(20), nullable=False, default="user")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationships
    profile = db.relationship(
        "Profile",
        back_populates="user",
        uselist=False,
        cascade="all, delete-orphan",
    )

    guides = db.relationship(
        "Guide",
        back_populates="author",
        cascade="all, delete-orphan",
    )

    comments = db.relationship(
        "Comment",
        back_populates="user",
        cascade="all, delete-orphan",
    )

    enrollments = db.relationship(
        "Enrollment",
        back_populates="user",
        cascade="all, delete-orphan",
    )

    @property
    def password(self):
        raise AttributeError("Password is not a readable attribute.")

    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)

    def authenticate(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f"<User {self.username}>"