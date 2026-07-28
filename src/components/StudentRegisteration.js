import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/StudentRegisteration.css';
const StudentRegisteration = () => {

  const [student, setStudent] = useState({
    student_id: "",
    name: "",
    phone_no: "",
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

  const StudentRegister = async (e) => {

    e.preventDefault();
    if (!/^[0-9]{10}$/.test(student.phone_no)) {
      alert("Phone number must contain exactly 10 digits");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email)) {
      alert("Enter a valid email address");
      return;
    }
    if (student.password.length < 8) {
      alert("Password must contain at least 8 characters");
      return;
    }
      const Response = await fetch(
        "http://127.0.0.1:8000/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(student)
        }
      );

      const studentdata = await Response.json();

      console.log(studentdata);
     if (!Response.ok) {
  alert(studentdata.detail || "Registration failed");
  return;
}
if (studentdata.message) {
  alert(studentdata.message);
} else {
  alert("Registered successfully");
    window.location.reload();
}
  };

  return (
    <div>

      <div className="student-registration">

        <form onSubmit={StudentRegister}>

          <h1>Student Registration</h1>

          {/* Student ID */}
          <input
            type="text"
            name="student_id"
            placeholder="Enter your ID"
            value={student.student_id}
            onChange={handlechange}
            required
          />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={student.name}
            onChange={handlechange}
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={student.email}
            onChange={handlechange}
            required
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone_no"
            placeholder="Enter your Phone"
            value={student.phone_no}
            onChange={handlechange}
            maxLength="10"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={student.password}
            onChange={handlechange}
            required
          />

          {/* Class */}
          <input
            type="text"
            name="class_name"
            placeholder="Enter your Class"
            value={student.class_name}
            onChange={handlechange}
            required
          />

          {/* Date of Birth */}
          <input
            type="date"
            name="dob"
            value={student.dob}
            onChange={handlechange}
            required
          />

          {/* Gender */}
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

          {/* Address */}
          <input
            type="text"
            name="address"
            placeholder="Enter your Address"
            value={student.address}
            onChange={handlechange}
            required
          />

          {/* Register */}
          <button type="submit">
            Register
          </button>

          {/* Login */}
          <NavLink to="/studentlogin">
            Login
          </NavLink>

        </form>

      </div>

    </div>
  );
};

export default StudentRegisteration;