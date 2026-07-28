import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/TeacherRegisteration.css';
const TeacherRegistration = () => {
  const[teacher,setTeacher]=useState({
    TeacherID:"",
    Name:"",
    Phone:"",
    Email:"",
    Password:"",
    Confirm_password:"",
    Subject:"",
    Qualification:"",
    Gender:"",
    Address:""
  })
  const handlechange=(e)=>{
    setTeacher({
      ...teacher,
      [e.target.name]:e.target.value
    })
  };
  const Register=async(e)=>{
    e.preventDefault();
     if(teacher.Password!==teacher.Confirm_password){
      alert('password does not match')
      return
    }
      if (!/^[0-9]{10}$/.test(teacher.Phone)) {
    alert("Phone number must contain exactly 10 digits");
    return;
  }

  // Check email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(teacher.Email)) {
    alert("Enter a valid email address");
    return;
  }

  // Check password length
  if (teacher.Password.length < 8) {
    alert("Password must contain at least 8 characters");
    return;
  }
    const response=await fetch(
      "http://127.0.0.1:8000/teacher_registration",{
        method:'POST',
        headers:{
               "Content-Type": "application/json"
        },
        body:JSON.stringify(teacher)
      }
    )
    const teacherdata=await response.json();
      if (!response.ok) {
    if (teacherdata.detail) {
      alert("Registration failed. Please check your details.");
    }
    return;
  }
    if(teacherdata.message){
      alert(teacherdata.message)
      return
    }
    alert('register successfully')
    window.location.reload();
  }
  return (
    <div>
      <div className='teacher-registration'>
        <form onSubmit={Register}>
          <h1>Teacher Registeration</h1>
          <input type='text'
          name='TeacherID'
          placeholder='Enter your ID'
          value={teacher.TeacherID}
          onChange={handlechange}
          required/>
         <input type='text'
         name='Name'
         placeholder='Enter your name'
         value={teacher.Name} 
         onChange={handlechange}
         required/>
         <input type='text'
         name='Email'
         placeholder='Enter your Email'
         value={teacher.Email}
         onChange={handlechange}
         required/>
        <input
         type="tel"
         name="Phone"
         placeholder="Enter your Phone"
         value={teacher.Phone}
         onChange={handlechange}
         required/>
        <input type='text'
         name='Password'
         placeholder='Enter your Password'
         value={teacher.Password}
         onChange={handlechange}
         required/>
        <input type='text'
         name='Confirm_password'
         placeholder='Enter your Confirm password'
         value={teacher.Confirm_password}
         onChange={handlechange}
         required/>
       <input type='text'
         name='Subject'
         placeholder='Enter your Subject'
         value={teacher.Subject}
         onChange={handlechange}
         required/>
      <input type='text'
         name='Qualification'
         placeholder='Enter your Qualification'
         value={teacher.Qualification}
         onChange={handlechange}
         required/>
          <select
            name="Gender"
            value={teacher.Gender}
            onChange={handlechange}
            required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
     <input type='text'
         name='Address'
         placeholder='Enter your Address'
         value={teacher.Address}
         onChange={handlechange}
         required/>
      <button type='submit'>Register</button>
      <NavLink to='/teacherlogin'>Login</NavLink>
        </form>
      </div>
    </div>
  )
}

export default TeacherRegistration
