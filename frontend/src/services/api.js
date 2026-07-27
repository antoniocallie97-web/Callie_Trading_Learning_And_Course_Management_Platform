const API_BASE_URL = "http://127.0.0.1:5000/api";

// Helper to get JWT token
const getToken = () => localStorage.getItem("token");

// Generic request function
async function request(endpoint, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const token = getToken();

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

/* ==========================
   AUTH
========================== */

export const register = (userData) =>
  request("/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });

export const login = (credentials) =>
  request("/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

/* ==========================
   USER
========================== */

export const getProfile = () =>
  request("/profile");

export const updateProfile = (profileData) =>
  request("/profile", {
    method: "PUT",
    body: JSON.stringify(profileData),
  });

/* ==========================
   COURSES
========================== */

export const getCourses = () =>
  request("/courses");

export const getCourse = (id) =>
  request(`/courses/${id}`);

/* ==========================
   GUIDES
========================== */

export const getGuides = () =>
  request("/guides");

export const getGuide = (id) =>
  request(`/guides/${id}`);

/* ==========================
   DASHBOARD
========================== */

export const getDashboard = () =>
  request("/dashboard");

/* ==========================
   ADMIN
========================== */

export const getUsers = () =>
  request("/users");

export const getStatistics = () =>
  request("/admin/statistics");