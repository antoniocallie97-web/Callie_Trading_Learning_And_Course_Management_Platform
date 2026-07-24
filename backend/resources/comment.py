from flask import request
from flask_restful import Resource
from flask_jwt_extended import (
    jwt_required,
    get_jwt,
    get_jwt_identity
)

from extensions import db
from models.comment import Comment
from models.guide import Guide


class CommentListResource(Resource):
    """
    GET  /api/comments
    POST /api/comments
    """

    def get(self):

        page = request.args.get("page", 1, type=int)
        per_page = request.args.get("per_page", 10, type=int)

        guide_id = request.args.get("guide_id", type=int)

        query = Comment.query

        if guide_id:
            query = query.filter(
                Comment.guide_id == guide_id
            )

        pagination = query.order_by(
            Comment.created_at.desc()
        ).paginate(
            page=page,
            per_page=per_page,
            error_out=False
        )

        return {
            "comments": [
                comment.to_dict()
                for comment in pagination.items
            ],
            "page": pagination.page,
            "per_page": pagination.per_page,
            "total": pagination.total,
            "total_pages": pagination.pages
        }, 200

    @jwt_required()
    def post(self):

        data = request.get_json()

        if not data.get("body"):
            return {
                "message": "Comment body is required."
            }, 400

        if not data.get("guide_id"):
            return {
                "message": "guide_id is required."
            }, 400

        guide = Guide.query.get(data["guide_id"])

        if not guide:
            return {
                "message": "Guide not found."
            }, 404

        comment = Comment(
            body=data["body"],
            guide_id=data["guide_id"],
            user_id=int(get_jwt_identity())
        )

        db.session.add(comment)
        db.session.commit()

        return {
            "message": "Comment added successfully.",
            "comment": comment.to_dict()
        }, 201


class CommentResource(Resource):
    """
    GET
    PUT
    DELETE
    """

    def get(self, comment_id):

        comment = Comment.query.get_or_404(comment_id)

        return comment.to_dict(), 200

    @jwt_required()
    def put(self, comment_id):

        comment = Comment.query.get_or_404(comment_id)

        current_user = int(get_jwt_identity())
        claims = get_jwt()

        if (
            claims.get("role") != "admin"
            and comment.user_id != current_user
        ):
            return {
                "message": "Unauthorized."
            }, 403

        data = request.get_json()

        comment.body = data.get(
            "body",
            comment.body
        )

        db.session.commit()

        return {
            "message": "Comment updated successfully.",
            "comment": comment.to_dict()
        }, 200

    @jwt_required()
    def delete(self, comment_id):

        comment = Comment.query.get_or_404(comment_id)

        current_user = int(get_jwt_identity())
        claims = get_jwt()

        if (
            claims.get("role") != "admin"
            and comment.user_id != current_user
        ):
            return {
                "message": "Unauthorized."
            }, 403

        db.session.delete(comment)
        db.session.commit()

        return {
            "message": "Comment deleted successfully."
        }, 200