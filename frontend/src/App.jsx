import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Guides from "./pages/Guides";
import GuideDetails from "./pages/GuideDetails";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      {/* Website Title */}
      <div className="w-full text-center py-8 bg-white">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide text-blue-900 drop-shadow-lg">
          CALLIE TRADING AND LEARNING PLATFORM
        </h1>
      </div>

      {/* Logo */}
      <div className="py-6">
        <Logo />
      </div>

      {/* Navigation */}
      <div className="mt-12">
        <Navbar />
      </div>

      {/* Application Routes */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        <Route path="/guides" element={<Guides />} />

        {/* Guide Details Page */}
        <Route path="/guide-details" element={<GuideDetails />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/courses" element={<Courses />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;