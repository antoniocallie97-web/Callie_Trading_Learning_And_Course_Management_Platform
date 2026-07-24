from app import create_app
from extensions import db

# Import models (these imports will work after the models are created)
# from models.user import User
# from models.profile import Profile
# from models.guide import Guide
# from models.course import Course
# from models.enrollment import Enrollment
# from models.comment import Comment


app = create_app()


with app.app_context():
    print("🌱 Starting database seeding...")

    # Clear existing data (we'll add this later)
    # Comment.query.delete()
    # Enrollment.query.delete()
    # Guide.query.delete()
    # Course.query.delete()
    # Profile.query.delete()
    # User.query.delete()

    # Create seed data here
    # Example:
    # admin = User(...)
    # db.session.add(admin)

    db.session.commit()

    print("✅ Database seeded successfully!")