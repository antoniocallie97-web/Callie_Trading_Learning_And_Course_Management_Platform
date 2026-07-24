from .auth import RegisterResource, LoginResource
from .user import UserListResource, UserResource
from .profile import ProfileResource
from .guide import GuideListResource, GuideResource
from .course import CourseListResource, CourseResource
from .enrollment import EnrollmentListResource, EnrollmentResource
from .comment import CommentListResource, CommentResource
from .analytics import (
    PopularCoursesResource,
    ActiveUsersResource,
    CourseProgressResource,
)

__all__ = [
    "RegisterResource",
    "LoginResource",
    "UserListResource",
    "UserResource",
    "ProfileResource",
    "GuideListResource",
    "GuideResource",
    "CourseListResource",
    "CourseResource",
    "EnrollmentListResource",
    "EnrollmentResource",
    "CommentListResource",
    "CommentResource",
    "PopularCoursesResource",
    "ActiveUsersResource",
    "CourseProgressResource",
]