from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from config import Config
from extensions import db, migrate, jwt

# Import Resources
from resources.auth import RegisterResource, LoginResource


def create_app():
    app = Flask(__name__)

    # Load configuration
    app.config.from_object(Config)

    # Initialize Extensions
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    CORS(app)

    # Initialize Flask-RESTful API
    api = Api(app)

    # Home Route
    @app.route("/")
    def home():
        return {
            "message": "Welcome to Callie Trading Learning API",
            "status": "running"
        }, 200

    # Authentication Routes
    api.add_resource(RegisterResource, "/api/register")
    api.add_resource(LoginResource, "/api/login")

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)