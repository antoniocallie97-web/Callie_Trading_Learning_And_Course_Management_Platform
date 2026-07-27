from flask_restful import Resource
from flask import request
from extensions import db
from models.user import User


class UserListResource(Resource):
    def get(self):
        users = User.query.all()
        return [user.to_dict() for user in users], 200

    def post(self):
        data = request.get_json()

        # Check if email already exists
        existing_user = User.query.filter_by(email=data["email"]).first()
        if existing_user:
            return {"message": "Email already exists."}, 400

        user = User(
            name=data["name"],
            email=data["email"]
        )

        db.session.add(user)
        db.session.commit()

        return user.to_dict(), 201


class UserResource(Resource):
    def get(self, id):
        user = User.query.get(id)

        if not user:
            return {"message": "User not found."}, 404

        return user.to_dict(), 200

    def put(self, id):
        user = User.query.get(id)

        if not user:
            return {"message": "User not found."}, 404

        data = request.get_json()

        user.name = data.get("name", user.name)
        user.email = data.get("email", user.email)

        db.session.commit()

        return user.to_dict(), 200

    def delete(self, id):
        user = User.query.get(id)

        if not user:
            return {"message": "User not found."}, 404

        db.session.delete(user)
        db.session.commit()

        return {"message": "User deleted successfully."}, 200