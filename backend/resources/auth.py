from flask import request
from flask_restful import Resource
from flask_jwt_extended import create_access_token

from extensions import db
from models.user import User


class RegisterResource(Resource):
    def post(self):
        data = request.get_json()

        # Validate required fields
        required_fields = ["username", "email", "password"]

        for field in required_fields:
            if field not in data or not data[field]:
                return {
                    "message": f"{field} is required."
                }, 400

        # Check username
        existing_username = User.query.filter_by(
            username=data["username"]
        ).first()

        if existing_username:
            return {
                "message": "Username already exists."
            }, 409

        # Check email
        existing_email = User.query.filter_by(
            email=data["email"]
        ).first()

        if existing_email:
            return {
                "message": "Email already exists."
            }, 409

        # Create user
        user = User(
            username=data["username"],
            email=data["email"],
            role=data.get("role", "user")
        )

        user.password = data["password"]

        db.session.add(user)
        db.session.commit()

        return {
            "message": "User registered successfully.",
            "user": user.to_dict(
                rules=("-password_hash",)
            )
        }, 201


class LoginResource(Resource):
    def post(self):
        data = request.get_json()

        email = data.get("email")
        password = data.get("password")

        if not email or not password:
            return {
                "message": "Email and password are required."
            }, 400

        user = User.query.filter_by(
            email=email
        ).first()

        if not user:
            return {
                "message": "Invalid email or password."
            }, 401

        if not user.authenticate(password):
            return {
                "message": "Invalid email or password."
            }, 401

        access_token = create_access_token(
            identity=user.id,
            additional_claims={
                "role": user.role
            }
        )

        return {
            "message": "Login successful.",
            "access_token": access_token,
            "user": user.to_dict(
                rules=("-password_hash",)
            )
        }, 200