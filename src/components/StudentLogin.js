import React, { useState } from "react";
import '../styles/StudentLogin.css';
const StudentLogin = () => {
  const [student, setStudent] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(student);

    alert("Student Login Successful");

    setStudent({
      email: "",
      password: "",
    });
  };

  return (
    <div className="student-login">

      <div className="login-card">

        <h1>Student Login</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={student.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={student.password}
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

export default StudentLogin;