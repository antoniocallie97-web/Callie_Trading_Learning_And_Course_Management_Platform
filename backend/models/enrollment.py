from datetime import datetime

from sqlalchemy_serializer import SerializerMixin

from extensions import db


class Enrollment(db.Model, SerializerMixin):
    __tablename__ = "enrollments"

    # Prevent infinite recursion
    serialize_rules = (
        "-user.enrollments",
        "-course.enrollments",
    )

    # -----------------------
    # Columns
    # -----------------------

    id = db.Column(db.Integer, primary_key=True)

    progress = db.Column(
        db.Float,
        nullable=False,
        default=0.0
    )

    status = db.Column(
        db.String(30),
        nullable=False,
        default="In Progress"
    )

    completion_percentage = db.Column(
        db.Float,
        nullable=False,
        default=0.0
    )

    enrolled_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

    completed_at = db.Column(
        db.DateTime,
        nullable=True
    )

    # -----------------------
    # Foreign Keys
    # -----------------------

    user_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False
    )

    course_id = db.Column(
        db.Integer,
        db.ForeignKey("courses.id"),
        nullable=False
    )

    # -----------------------
    # Relationships
    # -----------------------

    user = db.relationship(
        "User",
        back_populates="enrollments"
    )

    course = db.relationship(
        "Course",
        back_populates="enrollments"
    )

    # -----------------------
    # Prevent duplicate enrollments
    # -----------------------

    __table_args__ = (
        db.UniqueConstraint(
            "user_id",
            "course_id",
            name="unique_user_course"
        ),
    )

    # -----------------------
    # Representation
    # -----------------------

    def __repr__(self):
        return (
            f"<Enrollment User:{self.user_id} "
            f"Course:{self.course_id}>"
        )