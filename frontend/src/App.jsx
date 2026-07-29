import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Logo from "./components/Logo";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Guides from "./pages/Guides";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <>

      {/* Main Website Title - Top of Everything */}
      <div
        className="
          w-full
          text-center
          py-8
          bg-white
        "
      >

        <h1
          className="
            text-4xl
            md:text-6xl
            font-extrabold
            uppercase
            tracking-wide
            text-blue-900
            drop-shadow-lg
          "
        >
          CALLIE TRADING AND LEARNING PLATFORM
        </h1>

      </div>


      {/* CALLIE Logo */}
      <div className="py-6">
        <Logo />
      </div>


      {/* Navigation Lowered */}
      <div className="mt-12">
        <Navbar />
      </div>


      {/* Pages */}
      <Routes>

        <Route 
          path="/" 
          element={<Home />} 
        />

        <Route 
          path="/courses" 
          element={<Courses />} 
        />

        <Route 
          path="/guides" 
          element={<Guides />} 
        />

        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />

        <Route 
          path="/profile" 
          element={<Profile />} 
        />

        <Route 
          path="/login" 
          element={<Login />} 
        />

        <Route 
          path="/register" 
          element={<Register />} 
        />

      </Routes>

    </>
  );
}

export default App;