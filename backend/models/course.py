from datetime import datetime

from sqlalchemy_serializer import SerializerMixin

from extensions import db


class Course(db.Model, SerializerMixin):
    __tablename__ = "courses"

    # Prevent infinite recursion
    serialize_rules = (
        "-enrollments.course",
    )

    # -----------------------
    # Columns
    # -----------------------

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(150), nullable=False)

    description = db.Column(db.Text, nullable=False)

    level = db.Column(
        db.String(50),
        nullable=False,
        default="Beginner"
    )

    price = db.Column(
        db.Float,
        nullable=False,
        default=0.0
    )

    duration = db.Column(
        db.String(50),
        nullable=False
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

    # -----------------------
    # Relationships
    # -----------------------

    enrollments = db.relationship(
        "Enrollment",
        back_populates="course",
        cascade="all, delete-orphan",
        lazy=True
    )

    # -----------------------
    # Representation
    # -----------------------

    def __repr__(self):
        return f"<Course {self.title}>"