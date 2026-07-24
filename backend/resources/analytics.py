from flask import request
from flask_restful import Resource
from sqlalchemy import func

from extensions import db
from models.course import Course
from models.enrollment import Enrollment
from models.guide import Guide
from models.user import User
from models.comment import Comment


class PopularCoursesResource(Resource):
    """
    GET /api/analytics/popular-courses

    Returns courses ordered by number of enrollments.
    """

    def get(self):

        results = (
            db.session.query(
                Course.id,
                Course.title,
                func.count(Enrollment.id).label("students")
            )
            .join(Enrollment)
            .group_by(Course.id)
            .order_by(func.count(Enrollment.id).desc())
            .all()
        )

        return [
            {
                "course_id": course_id,
                "title": title,
                "students": students
            }
            for course_id, title, students in results
        ], 200


class ActiveUsersResource(Resource):
    """
    GET /api/analytics/active-authors

    Users ranked by guides written.
    """

    def get(self):

        results = (
            db.session.query(
                User.username,
                func.count(Guide.id).label("guides")
            )
            .join(Guide, Guide.author_id == User.id)
            .group_by(User.id)
            .order_by(func.count(Guide.id).desc())
            .all()
        )

        return [
            {
                "author": username,
                "guides_written": guides
            }
            for username, guides in results
        ], 200


class CourseProgressResource(Resource):
    """
    GET /api/analytics/course-progress

    Average completion percentage
    for every course.
    """

    def get(self):

        results = (
            db.session.query(
                Course.title,
                func.avg(
                    Enrollment.completion_percentage
                ).label("average_completion")
            )
            .join(Enrollment)
            .group_by(Course.id)
            .order_by(
                func.avg(
                    Enrollment.completion_percentage
                ).desc()
            )
            .all()
        )

        return [
            {
                "course": title,
                "average_completion": round(avg, 2)
            }
            for title, avg in results
        ], 200


class GuideSearchResource(Resource):
    """
    GET /api/analytics/search-guides

    Example:

    /api/analytics/search-guides?category=Forex

    /api/analytics/search-guides?author=John

    /api/analytics/search-guides?difficulty=Advanced
    """

    def get(self):

        category = request.args.get("category")
        difficulty = request.args.get("difficulty")
        author = request.args.get("author")

        query = Guide.query.join(User)

        if category:
            query = query.filter(
                Guide.category.ilike(f"%{category}%")
            )

        if difficulty:
            query = query.filter(
                Guide.difficulty.ilike(f"%{difficulty}%")
            )

        if author:
            query = query.filter(
                User.username.ilike(f"%{author}%")
            )

        guides = query.order_by(
            Guide.created_at.desc()
        ).all()

        return [
            guide.to_dict()
            for guide in guides
        ], 200