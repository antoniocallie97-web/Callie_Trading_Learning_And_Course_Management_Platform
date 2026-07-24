from datetime import datetime

from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy_serializer import SerializerMixin

from extensions import db


class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    # Prevent infinite recursion when serializing
    serialize_rules = (
        "-password_hash",
        "-profile.user",
        "-guides.author",
        "-comments.user",
        "-enrollments.user",
    )

    # Columns
    id = db.Column(db.Integer, primary_key=True)

    username = db.Column(db.String(80), unique=True, nullable=False)

    email = db.Column(db.String(120), unique=True, nullable=False)

    password_hash = db.Column(db.String(255), nullable=False)

    role = db.Column(
        db.String(20),
        nullable=False,
        default="user"
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

    # -----------------------
    # Relationships
    # -----------------------

    # One-to-One
    profile = db.relationship(
        "Profile",
        back_populates="user",
        uselist=False,
        cascade="all, delete-orphan"
    )

    # One-to-Many
    guides = db.relationship(
        "Guide",
        back_populates="author",
        cascade="all, delete-orphan",
        lazy=True
    )

    comments = db.relationship(
        "Comment",
        back_populates="user",
        cascade="all, delete-orphan",
        lazy=True
    )

    # Many-to-Many (through Enrollment)
    enrollments = db.relationship(
        "Enrollment",
        back_populates="user",
        cascade="all, delete-orphan",
        lazy=True
    )

    # -----------------------
    # Password Methods
    # -----------------------

    def set_password(self, password):
        """Hash and store a password."""
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        """Verify a password."""
        return check_password_hash(self.password_hash, password)

    # -----------------------
    # Representation
    # -----------------------

    def __repr__(self):
        return f"<User {self.username}>"