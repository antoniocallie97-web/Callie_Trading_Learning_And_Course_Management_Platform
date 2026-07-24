from flask_restful import Resource
from flask_jwt_extended import (
    jwt_required,
    get_jwt,
    get_jwt_identity
)

from extensions import db
from models.user import User


class UserListResource(Resource):
    """
    Admin only.
    Returns all registered users.
    """

    @jwt_required()
    def get(self):
        claims = get_jwt()

        if claims.get("role") != "admin":
            return {
                "message": "Admin access required."
            }, 403

        users = User.query.all()

        return {
            "count": len(users),
            "users": [
                user.to_dict(rules=("-password_hash",))
                for user in users
            ]
        }, 200


class UserResource(Resource):
    """
    Operations on a single user.
    """

    @jwt_required()
    def get(self, user_id):

        current_user = int(get_jwt_identity())
        claims = get_jwt()

        user = User.query.get_or_404(user_id)

        # Admins can view anyone.
        # Users can only view themselves.
        if claims.get("role") != "admin" and current_user != user.id:
            return {
                "message": "Unauthorized."
            }, 403

        return user.to_dict(
            rules=("-password_hash",)
        ), 200

    @jwt_required()
    def delete(self, user_id):

        claims = get_jwt()

        if claims.get("role") != "admin":
            return {
                "message": "Admin access required."
            }, 403

        user = User.query.get_or_404(user_id)

        db.session.delete(user)
        db.session.commit()

        return {
            "message": "User deleted successfully."
        }, 200