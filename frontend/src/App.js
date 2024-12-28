import React from "react";
import  { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./components/Login/Login";
import UserDb from "./components/User/UserDb";
import AdminDb from "./components/Admin/AdminDb";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserDb />} />
        <Route path="/admin" element={<AdminDb />} />
      </Routes>
    </Router>
  );
}

export default App;
