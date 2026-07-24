from flask import request
from flask_restful import Resource
from flask_jwt_extended import (
    jwt_required,
    get_jwt
)

from extensions import db
from models.course import Course


class CourseListResource(Resource):
    """
    GET  /api/courses
    POST /api/courses (Admin only)
    """

    def get(self):
        page = request.args.get("page", 1, type=int)
        per_page = request.args.get("per_page", 10, type=int)

        level = request.args.get("level")

        query = Course.query

        if level:
            query = query.filter(
                Course.level.ilike(f"%{level}%")
            )

        query = query.order_by(Course.created_at.desc())

        pagination = query.paginate(
            page=page,
            per_page=per_page,
            error_out=False
        )

        return {
            "courses": [
                course.to_dict()
                for course in pagination.items
            ],
            "page": pagination.page,
            "per_page": pagination.per_page,
            "total": pagination.total,
            "total_pages": pagination.pages
        }, 200

    @jwt_required()
    def post(self):

        claims = get_jwt()

        if claims.get("role") != "admin":
            return {
                "message": "Admin access required."
            }, 403

        data = request.get_json()

        required_fields = [
            "title",
            "description",
            "level",
            "price",
            "duration"
        ]

        for field in required_fields:
            if field not in data:
                return {
                    "message": f"{field} is required."
                }, 400

        course = Course(
            title=data["title"],
            description=data["description"],
            level=data["level"],
            price=data["price"],
            duration=data["duration"]
        )

        db.session.add(course)
        db.session.commit()

        return {
            "message": "Course created successfully.",
            "course": course.to_dict()
        }, 201


class CourseResource(Resource):
    """
    GET
    PUT
    DELETE
    """

    def get(self, course_id):

        course = Course.query.get_or_404(course_id)

        return course.to_dict(), 200

    @jwt_required()
    def put(self, course_id):

        claims = get_jwt()

        if claims.get("role") != "admin":
            return {
                "message": "Admin access required."
            }, 403

        course = Course.query.get_or_404(course_id)

        data = request.get_json()

        course.title = data.get(
            "title",
            course.title
        )

        course.description = data.get(
            "description",
            course.description
        )

        course.level = data.get(
            "level",
            course.level
        )

        course.price = data.get(
            "price",
            course.price
        )

        course.duration = data.get(
            "duration",
            course.duration
        )

        db.session.commit()

        return {
            "message": "Course updated successfully.",
            "course": course.to_dict()
        }, 200

    @jwt_required()
    def delete(self, course_id):

        claims = get_jwt()

        if claims.get("role") != "admin":
            return {
                "message": "Admin access required."
            }, 403

        course = Course.query.get_or_404(course_id)

        db.session.delete(course)
        db.session.commit()

        return {
            "message": "Course deleted successfully."
        }, 200