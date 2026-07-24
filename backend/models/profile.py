from datetime import datetime

from sqlalchemy_serializer import SerializerMixin

from extensions import db


class Profile(db.Model, SerializerMixin):
    __tablename__ = "profiles"

    # Prevent infinite recursion
    serialize_rules = (
        "-user.profile",
    )

    # -----------------------
    # Columns
    # -----------------------

    id = db.Column(db.Integer, primary_key=True)

    bio = db.Column(db.Text)

    country = db.Column(db.String(100), nullable=False)

    experience_level = db.Column(
        db.String(50),
        default="Beginner"
    )

    avatar = db.Column(db.String(255))

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

    # Foreign Key (One-to-One)
    user_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        unique=True,
        nullable=False
    )

    # -----------------------
    # Relationship
    # -----------------------

    user = db.relationship(
        "User",
        back_populates="profile"
    )

    # -----------------------
    # Representation
    # -----------------------

    def __repr__(self):
        return f"<Profile {self.id}>"