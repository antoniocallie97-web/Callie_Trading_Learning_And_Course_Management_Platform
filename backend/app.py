from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from config import Config
from extensions import db, migrate, jwt
from models import *

from resources.auth import RegisterResource, LoginResource
from resources.profile import ProfileResource


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    # Enable CORS
    CORS(
        app,
        resources={r"/*": {"origins": "*"}}
    )

    api = Api(app)

    @app.route("/")
    def home():
        return {
            "message": "Welcome to Callie Trading Learning API",
            "status": "running"
        }

    # Authentication
    api.add_resource(RegisterResource, "/api/register")
    api.add_resource(LoginResource, "/api/login")

    # Profile
    api.add_resource(ProfileResource, "/api/profile")

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)