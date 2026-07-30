from flask import request
from flask_restful import Resource
from flask_jwt_extended import (
    jwt_required,
    get_jwt_identity
)

from extensions import db
from models.user import User
from models.profile import Profile


class ProfileResource(Resource):

    @jwt_required()
    def get(self):
        """
        Get the logged-in user's profile.
        """

        user_id = int(get_jwt_identity())

        user = User.query.get_or_404(user_id)

        if not user.profile:
            return {
                "message": "Profile not found."
            }, 404

        return {
            "username": user.username,
            "email": user.email,
            "bio": user.profile.bio,
            "country": user.profile.country,
            "experience_level": user.profile.experience_level,
            "avatar": user.profile.avatar
        }, 200

    @jwt_required()
    def post(self):
        """
        Create profile (only once).
        """

        user_id = int(get_jwt_identity())

        user = User.query.get_or_404(user_id)

        if user.profile:
            return {
                "message": "Profile already exists."
            }, 409

        data = request.get_json()

        profile = Profile(
            bio=data.get("bio", ""),
            country=data.get("country", ""),
            experience_level=data.get(
                "experience_level",
                "Beginner"
            ),
            avatar=data.get("avatar", ""),
            user_id=user.id
        )

        db.session.add(profile)
        db.session.commit()

        return {
            "message": "Profile created successfully.",
            "profile": {
                "username": user.username,
                "email": user.email,
                "bio": profile.bio,
                "country": profile.country,
                "experience_level": profile.experience_level,
                "avatar": profile.avatar
            }
        }, 201

    @jwt_required()
    def put(self):
        """
        Update logged-in user's profile.
        """

        user_id = int(get_jwt_identity())

        user = User.query.get_or_404(user_id)

        if not user.profile:
            return {
                "message": "Profile not found."
            }, 404

        data = request.get_json()

        # Update User table
        user.username = data.get(
            "username",
            user.username
        )

        user.email = data.get(
            "email",
            user.email
        )

        # Update Profile table
        profile = user.profile

        profile.bio = data.get(
            "bio",
            profile.bio
        )

        profile.country = data.get(
            "country",
            profile.country
        )

        profile.experience_level = data.get(
            "experience_level",
            profile.experience_level
        )

        profile.avatar = data.get(
            "avatar",
            profile.avatar
        )

        db.session.commit()

        return {
            "message": "Profile updated successfully.",
            "user": {
                "username": user.username,
                "email": user.email,
                "bio": profile.bio,
                "country": profile.country,
                "experience_level": profile.experience_level,
                "avatar": profile.avatar
            }
        }, 200

    @jwt_required()
    def delete(self):
        """
        Delete logged-in user's profile.
        """

        user_id = int(get_jwt_identity())

        user = User.query.get_or_404(user_id)

        if not user.profile:
            return {
                "message": "Profile not found."
            }, 404

        db.session.delete(user.profile)
        db.session.commit()

        return {
            "message": "Profile deleted successfully."
        }, 200