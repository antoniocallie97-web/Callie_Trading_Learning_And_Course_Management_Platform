from datetime import datetime

from sqlalchemy_serializer import SerializerMixin

from extensions import db


class Comment(db.Model, SerializerMixin):
    __tablename__ = "comments"

    # Prevent infinite recursion
    serialize_rules = (
        "-user.comments",
        "-guide.comments",
    )

    # -----------------------
    # Columns
    # -----------------------

    id = db.Column(db.Integer, primary_key=True)

    body = db.Column(db.Text, nullable=False)

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
    # Foreign Keys
    # -----------------------

    user_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False
    )

    guide_id = db.Column(
        db.Integer,
        db.ForeignKey("guides.id"),
        nullable=False
    )

    # -----------------------
    # Relationships
    # -----------------------

    user = db.relationship(
        "User",
        back_populates="comments"
    )

    guide = db.relationship(
        "Guide",
        back_populates="comments"
    )

    # -----------------------
    # Representation
    # -----------------------

    def __repr__(self):
        return f"<Comment {self.id}>"