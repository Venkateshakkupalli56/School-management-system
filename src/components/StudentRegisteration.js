import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/StudentRegisteration.css";

const StudentRegisteration = () => {

  const [student, setStudent] = useState({
    student_id: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    class_name: "",
    dob: "",
    gender: "",
    address: ""
  });

  const handlechange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const studentregister = (e) => {
    e.preventDefault();

    // Phone Validation
    if (!/^[0-9]{10}$/.test(student.phone)) {
      alert("Phone number must contain exactly 10 digits");
      return;
    }

    // Email Validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email)) {
      alert("Enter a valid email address");
      return;
    }

    // Password Validation
    if (student.password.length < 8) {
      alert("Password must contain at least 8 characters");
      return;
    }

fetch("http://127.0.0.1:8000/StudentRegister", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(student)
})
 .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Student Updated Successfully");
    })
    .catch((error) => {
      console.log(error);
      alert("Update Failed");
    });
  }

  return (
    <div className="student-registration">

      <form onSubmit={studentregister}>

        <h1>Student Registration</h1>

        <input
          type="text"
          name="student_id"
          placeholder="Enter your ID"
          value={student.student_id}
          onChange={handlechange}
          required
        />

        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={student.name}
          onChange={handlechange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={student.email}
          onChange={handlechange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter your Phone Number"
          value={student.phone}
          onChange={handlechange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={student.password}
          onChange={handlechange}
          required
        />

        <input
          type="text"
          name="class_name"
          placeholder="Enter your Class"
          value={student.class_name}
          onChange={handlechange}
          required
        />

        <input
          type="date"
          name="dob"
          value={student.dob}
          onChange={handlechange}
          required
        />

        <select
          name="gender"
          value={student.gender}
          onChange={handlechange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="text"
          name="address"
          placeholder="Enter your Address"
          value={student.address}
          onChange={handlechange}
          required
        />

        <button type="submit">
          Register
        </button>

        <NavLink to="/studentlogin">
          Login
        </NavLink>

      </form>

    </div>
  );
};

export default StudentRegisteration;