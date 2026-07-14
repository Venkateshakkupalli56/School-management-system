import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TeacherLogin.css";

const TeacherLogin = () => {

  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setTeacher({
      ...teacher,
      [name]: value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(teacher);

    alert("Teacher Login Successful");

    navigate("/teacherdashboard");

    setTeacher({
      email: "",
      password: "",
    });

  };

  return (
    <div className="teacher-login">

      <div className="teacher-login-card">

        <h1>Teacher Login</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={teacher.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={teacher.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default TeacherLogin;