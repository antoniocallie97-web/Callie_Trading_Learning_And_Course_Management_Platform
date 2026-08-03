# 📈 Callie Trading Learning Management Platform

A modern full-stack web application for learning **Forex, Cryptocurrency, and Stock Trading** through structured courses, learning guides, and personalized progress tracking.

The platform is built using **React**, **Flask**, **JWT Authentication**, and **SQLAlchemy**, providing a secure and responsive learning environment for aspiring traders.

---

# ✨ Features

* 🔐 User Registration
* 🔑 Secure Login using JWT Authentication
* 👤 Personalized User Dashboard
* 📚 Trading Courses
* 📖 Learning Guides
* 📈 Learning Progress Tracking
* 🎓 Certificate Tracking
* 🌐 RESTful API
* 📱 Responsive Design
* 🔒 Protected Routes
* ⚡ Fast React + Vite Frontend

---

# 🛠 Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* React Router DOM
* JavaScript (ES6+)

## Backend

* Flask
* Flask RESTful
* Flask SQLAlchemy
* Flask JWT Extended
* Flask Migrate
* Flask CORS

## Database

* SQLite (Development)
* PostgreSQL (Recommended for Production)

---

# 📂 Project Structure

```text
Callie_Trading_Learning_Management_Platform/

├── backend/
│   ├── app.py
│   ├── config.py
│   ├── extensions.py
│   ├── requirements.txt
│   ├── migrations/
│   ├── models/
│   │   └── user.py
│   ├── resources/
│   │   ├── auth.py
│   │   └── __init__.py
│   └── instance/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Courses.jsx
│   │   │   └── Profile.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── .gitignore
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Callie_Trading_Learning_Management_Platform.git

cd Callie_Trading_Learning_Management_Platform
```

---

# ⚙ Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Create a virtual environment.

### Linux / macOS

```bash
python -m venv venv

source venv/bin/activate
```

### Windows

```bash
python -m venv venv

venv\Scripts\activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Run database migrations.

```bash
flask db upgrade
```

Start the Flask server.

```bash
python app.py
```

The backend runs on:

```text
http://127.0.0.1:5000
```

---

# 💻 Frontend Setup

Navigate to the frontend folder.

```bash
cd frontend
```

Install packages.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

---

# 🔐 Authentication

The application uses **JSON Web Tokens (JWT)** for authentication.

Authentication flow:

1. Register a new account.
2. Login using email and password.
3. Receive a JWT access token.
4. Store the token on the frontend.
5. Access protected resources using the token.

---

# 📡 API Endpoints

## Authentication

### Register

```http
POST /api/register
```

Request

```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "password123"
}
```

---

### Login

```http
POST /api/login
```

Request

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

# 📌 Current Features

* User Registration
* User Login
* JWT Authentication
* Dashboard
* Protected Routes
* Responsive Landing Page
* Trading-Themed Interface
* REST API

---

# 🔮 Planned Features

* Trading Courses
* Video Lessons
* Course Enrollment
* Learning Progress
* User Profiles
* Certificates
* Quizzes
* Admin Dashboard
* Instructor Dashboard
* Email Verification
* Password Reset
* Notifications
* Live Market Data
* TradingView Charts
* Discussion Forums
* Mobile Optimization

---

# 📷 Screens

* Home Page
* Register Page
* Login Page
* Dashboard
* Courses
* Profile

---

# 🌍 Deployment

## Frontend

Deploy using:

* Vercel
* Netlify

## Backend

Deploy using:

* Railway
* Render
* PythonAnywhere
* Fly.io
* Google Cloud Run

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push the branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Antony Mutai**

Full Stack Developer

**Callie Trading Learning Management Platform** was developed to provide a modern learning platform for aspiring Forex, Cryptocurrency, and Stock traders using React, Flask, JWT Authentication, and SQLAlchemy.
