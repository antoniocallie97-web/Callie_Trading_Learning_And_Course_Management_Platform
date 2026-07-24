from sqlalchemy import func

from extensions import db
from models.user import User
from models.course import Course
from models.guide import Guide
from models.comment import Comment
from models.enrollment import Enrollment


def get_popular_courses():
    """
    Return courses ordered by number of enrollments.
    """

    return (
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


def get_active_authors():
    """
    Return authors ranked by guides written.
    """

    return (
        db.session.query(
            User.id,
            User.username,
            func.count(Guide.id).label("guides")
        )
        .join(Guide, Guide.author_id == User.id)
        .group_by(User.id)
        .order_by(func.count(Guide.id).desc())
        .all()
    )


def get_course_completion():
    """
    Return average completion percentage
    for each course.
    """

    return (
        db.session.query(
            Course.id,
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


def search_guides(category=None,
                  difficulty=None,
                  author=None):
    """
    Search guides using optional filters.
    """

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

    return query.order_by(
        Guide.created_at.desc()
    ).all()


def most_commented_guides():
    """
    Return guides with the highest number of comments.
    """

    return (
        db.session.query(
            Guide.id,
            Guide.title,
            func.count(Comment.id).label("comments")
        )
        .join(Comment)
        .group_by(Guide.id)
        .order_by(func.count(Comment.id).desc())
        .all()
    )


def enrollment_statistics():
    """
    Overall enrollment statistics.
    """

    total_courses = Course.query.count()
    total_users = User.query.count()
    total_enrollments = Enrollment.query.count()

    return {
        "total_courses": total_courses,
        "total_users": total_users,
        "total_enrollments": total_enrollments
    }