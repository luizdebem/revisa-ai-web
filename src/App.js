import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import MyQuizzes from "./pages/MyQuizzes";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<RequireAuth><Navigate to="/my-quizzes" /></RequireAuth>} />
        <Route path="/" element={<RequireAuth><Navigate to="/my-quizzes" /></RequireAuth>} />
        <Route path="/my-quizzes" element={<RequireAuth><MyQuizzes /></RequireAuth>} />
        <Route path="/create-quiz" element={<RequireAuth><CreateQuiz /></RequireAuth>} />
        <Route path="/my-profile" element={<RequireAuth><MyProfile /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App