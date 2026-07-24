from functools import wraps

from flask_jwt_extended import get_jwt


def admin_required(fn):
    """
    Restrict access to admin users only.

    Must be used AFTER @jwt_required().
    """

    @wraps(fn)
    def wrapper(*args, **kwargs):

        claims = get_jwt()

        if claims.get("role") != "admin":
            return {
                "message": "Admin access required."
            }, 403

        return fn(*args, **kwargs)

    return wrapper


def roles_required(*roles):
    """
    Restrict access to one or more roles.

    Example:
        @jwt_required()
        @roles_required("admin", "instructor")
    """

    def decorator(fn):

        @wraps(fn)
        def wrapper(*args, **kwargs):

            claims = get_jwt()

            user_role = claims.get("role")

            if user_role not in roles:
                return {
                    "message": "You are not authorized to perform this action."
                }, 403

            return fn(*args, **kwargs)

        return wrapper

    return decorator