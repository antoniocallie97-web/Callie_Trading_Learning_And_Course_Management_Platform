from flask import request
from flask_restful import Resource
from flask_jwt_extended import (
    jwt_required,
    get_jwt,
    get_jwt_identity
)

from extensions import db
from models.guide import Guide


class GuideListResource(Resource):

    def get(self):
        """
        Get all guides with pagination and filters.
        """

        page = request.args.get("page", 1, type=int)
        per_page = request.args.get("per_page", 10, type=int)

        category = request.args.get("category")
        difficulty = request.args.get("difficulty")

        query = Guide.query

        if category:
            query = query.filter(
                Guide.category.ilike(f"%{category}%")
            )

        if difficulty:
            query = query.filter(
                Guide.difficulty.ilike(f"%{difficulty}%")
            )

        query = query.order_by(
            Guide.created_at.desc()
        )

        pagination = query.paginate(
            page=page,
            per_page=per_page,
            error_out=False
        )

        return {
            "items": [
                guide.to_dict()
                for guide in pagination.items
            ],
            "page": pagination.page,
            "per_page": pagination.per_page,
            "total": pagination.total,
            "total_pages": pagination.pages
        }, 200

    @jwt_required()
    def post(self):
        """
        Create a guide.
        Admin only.
        """

        claims = get_jwt()

        if claims.get("role") != "admin":
            return {
                "message": "Admin access required."
            }, 403

        data = request.get_json()

        user_id = int(get_jwt_identity())

        guide = Guide(
            title=data["title"],
            content=data["content"],
            category=data["category"],
            difficulty=data.get(
                "difficulty",
                "Beginner"
            ),
            author_id=user_id
        )

        db.session.add(guide)
        db.session.commit()

        return {
            "message": "Guide created successfully.",
            "guide": guide.to_dict()
        }, 201


class GuideResource(Resource):

    def get(self, guide_id):
        """
        Get one guide.
        """

        guide = Guide.query.get_or_404(guide_id)

        return guide.to_dict(), 200

    @jwt_required()
    def put(self, guide_id):
        """
        Update guide.
        Admin only.
        """

        claims = get_jwt()

        if claims.get("role") != "admin":
            return {
                "message": "Admin access required."
            }, 403

        guide = Guide.query.get_or_404(guide_id)

        data = request.get_json()

        guide.title = data.get(
            "title",
            guide.title
        )

        guide.content = data.get(
            "content",
            guide.content
        )

        guide.category = data.get(
            "category",
            guide.category
        )

        guide.difficulty = data.get(
            "difficulty",
            guide.difficulty
        )

        db.session.commit()

        return {
            "message": "Guide updated successfully.",
            "guide": guide.to_dict()
        }, 200

    @jwt_required()
    def delete(self, guide_id):
        """
        Delete guide.
        Admin only.
        """

        claims = get_jwt()

        if claims.get("role") != "admin":
            return {
                "message": "Admin access required."
            }, 403

        guide = Guide.query.get_or_404(guide_id)

        db.session.delete(guide)
        db.session.commit()

        return {
            "message": "Guide deleted successfully."
        }, 200