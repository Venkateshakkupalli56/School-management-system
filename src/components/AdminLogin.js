import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/StudentLogin.css";

const AdminLogin = () => {

  const [student, setStudent] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };
  const Login = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://127.0.0.1:8000/admin_login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
      }
    );

    const data = await response.json();

    console.log(data);
    if (!response.ok) {
      alert( "Invalid email or password");
      return;
    }
    localStorage.setItem("token", data.access_token);
    alert("Login successful");
    navigate("/admindashboard");
  };

  return (
    <div className="teacher-login">

      <form onSubmit={Login}>

        <h1>Admin Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={student.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={student.password}
          onChange={handleChange}
          required
        />
        <button type="submit">
          Login
        </button>
        {/* <NavLink to="/studentregistration">
          Create Account
        </NavLink> */}

      </form>

    </div>
  );
};

export default AdminLogin;