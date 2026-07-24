from flask import request
from flask_restful import Resource
from flask_jwt_extended import (
    jwt_required,
    get_jwt,
    get_jwt_identity
)

from extensions import db
from models.enrollment import Enrollment
from models.course import Course


class EnrollmentListResource(Resource):
    """
    GET  /api/enrollments
    POST /api/enrollments
    """

    @jwt_required()
    def get(self):
        """
        Return all enrollments for the logged-in user.
        Admins see every enrollment.
        """

        claims = get_jwt()
        user_id = int(get_jwt_identity())

        page = request.args.get("page", 1, type=int)
        per_page = request.args.get("per_page", 10, type=int)

        query = Enrollment.query

        if claims.get("role") != "admin":
            query = query.filter_by(user_id=user_id)

        pagination = query.order_by(
            Enrollment.enrolled_at.desc()
        ).paginate(
            page=page,
            per_page=per_page,
            error_out=False
        )

        return {
            "enrollments": [
                enrollment.to_dict()
                for enrollment in pagination.items
            ],
            "page": pagination.page,
            "per_page": pagination.per_page,
            "total": pagination.total,
            "total_pages": pagination.pages
        }, 200

    @jwt_required()
    def post(self):
        """
        Enroll the logged-in user in a course.
        """

        data = request.get_json()

        course_id = data.get("course_id")

        if not course_id:
            return {
                "message": "course_id is required."
            }, 400

        user_id = int(get_jwt_identity())

        course = Course.query.get(course_id)

        if not course:
            return {
                "message": "Course not found."
            }, 404

        existing = Enrollment.query.filter_by(
            user_id=user_id,
            course_id=course_id
        ).first()

        if existing:
            return {
                "message": "Already enrolled in this course."
            }, 409

        enrollment = Enrollment(
            user_id=user_id,
            course_id=course_id,
            progress=0,
            completion_percentage=0,
            status="In Progress"
        )

        db.session.add(enrollment)
        db.session.commit()

        return {
            "message": "Enrollment successful.",
            "enrollment": enrollment.to_dict()
        }, 201


class EnrollmentResource(Resource):
    """
    PUT
    DELETE
    """

    @jwt_required()
    def put(self, enrollment_id):
        """
        Admin updates progress/status.
        """

        claims = get_jwt()

        if claims.get("role") != "admin":
            return {
                "message": "Admin access required."
            }, 403

        enrollment = Enrollment.query.get_or_404(
            enrollment_id
        )

        data = request.get_json()

        enrollment.progress = data.get(
            "progress",
            enrollment.progress
        )

        enrollment.completion_percentage = data.get(
            "completion_percentage",
            enrollment.completion_percentage
        )

        enrollment.status = data.get(
            "status",
            enrollment.status
        )

        db.session.commit()

        return {
            "message": "Enrollment updated successfully.",
            "enrollment": enrollment.to_dict()
        }, 200

    @jwt_required()
    def delete(self, enrollment_id):
        """
        Admin deletes enrollment.
        """

        claims = get_jwt()

        if claims.get("role") != "admin":
            return {
                "message": "Admin access required."
            }, 403

        enrollment = Enrollment.query.get_or_404(
            enrollment_id
        )

        db.session.delete(enrollment)
        db.session.commit()

        return {
            "message": "Enrollment deleted successfully."
        }, 200