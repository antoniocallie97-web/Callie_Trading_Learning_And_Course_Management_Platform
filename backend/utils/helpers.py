from math import ceil


def pagination_response(pagination, items):
    """
    Standard pagination response.

    Args:
        pagination: SQLAlchemy pagination object
        items: Serialized list of objects

    Returns:
        dict
    """
    return {
        "data": items,
        "pagination": {
            "page": pagination.page,
            "per_page": pagination.per_page,
            "total": pagination.total,
            "total_pages": pagination.pages,
            "has_next": pagination.has_next,
            "has_prev": pagination.has_prev,
        }
    }


def success_response(message, data=None, status=200):
    """
    Standard success response.
    """

    response = {
        "success": True,
        "message": message,
    }

    if data is not None:
        response["data"] = data

    return response, status


def error_response(message, status=400):
    """
    Standard error response.
    """

    return {
        "success": False,
        "message": message
    }, status


def serialize_collection(objects):
    """
    Convert a list of SQLAlchemy models
    into dictionaries.
    """

    return [obj.to_dict() for obj in objects]