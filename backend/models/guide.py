from datetime import datetime

from sqlalchemy_serializer import SerializerMixin

from extensions import db


class Guide(db.Model, SerializerMixin):
    __tablename__ = "guides"

    # Prevent infinite recursion
    serialize_rules = (
        "-author.guides",
        "-comments.guide",
    )

    # -----------------------
    # Columns
    # -----------------------

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(200), nullable=False)

    content = db.Column(db.Text, nullable=False)

    category = db.Column(
        db.String(100),
        nullable=False
    )

    difficulty = db.Column(
        db.String(50),
        nullable=False,
        default="Beginner"
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )

    # -----------------------
    # Foreign Key
    # -----------------------

    author_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False
    )

    # -----------------------
    # Relationships
    # -----------------------

    author = db.relationship(
        "User",
        back_populates="guides"
    )

    comments = db.relationship(
        "Comment",
        back_populates="guide",
        cascade="all, delete-orphan",
        lazy=True
    )

    # -----------------------
    # Representation
    # -----------------------

    def __repr__(self):
        return f"<Guide {self.title}>"