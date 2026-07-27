import { Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

import Guides from "./pages/Guide";
import GuideDetails from "./pages/GuidesDetails";

import AdminDashboard from "./pages/AdminDashboard";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100">
        <Routes>

          {/* ================= PUBLIC ROUTES ================= */}

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/courses" element={<Courses />} />

          <Route path="/courses/:id" element={<CourseDetails />} />

          <Route path="/guides" element={<Guides />} />

          <Route path="/guides/:id" element={<GuideDetails />} />

          {/* ================= PROTECTED USER ROUTES ================= */}

          <Route element={<ProtectedRoute />}>

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

          </Route>

          {/* ================= ADMIN ROUTES ================= */}

          <Route element={<AdminProtectedRoute />}>

            <Route
              path="/admin"
              element={<AdminDashboard />}
            />

          </Route>

          {/* ================= 404 ================= */}

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;