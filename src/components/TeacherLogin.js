import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../styles/TeacherLogin.css";

const TeacherLogin = () => {
  const [teacher, setTeacher] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value
    });
  };

  const Login = async (e) => {
  e.preventDefault();

  const response = await fetch(
    "http://127.0.0.1:8000/teacher_login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(teacher)
    }
  );

  const data = await response.json();

  // Wrong email or password
  if (!response.ok) {
    alert("Invalid email or password");
    return;
  }

  // Correct login
  localStorage.setItem("token", data.access_token);

  alert("Login successful");

  navigate("/teacherdashboard");
};

  return (
    <div className="teacher-login">
      <form onSubmit={Login}>
        <h1>Teacher Login</h1>

        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={teacher.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={teacher.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

        <NavLink to="/teacherregister">
          Create Account
        </NavLink>
      </form>
    </div>
  );
};

export default TeacherLogin;