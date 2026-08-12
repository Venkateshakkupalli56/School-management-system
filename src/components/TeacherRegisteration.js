import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/TeacherRegisteration.css';
const TeacherRegistration = () => {
  const[teacher,setTeacher]=useState({
    teacher_id:"",
    name:"",
    phone:"",
    email:"",
    password:"",
    subject:"",
    qualification:"",
    gender:"",
    address:""
  })
  const handlechange=(e)=>{
    setTeacher({
      ...teacher,
      [e.target.name]:e.target.value
    })
  };
  const Register=async(e)=>{
    e.preventDefault();
    //  if(teacher.Password!==teacher.Confirm_password){
    //   alert('password does not match')
    //   return
    // }
      if (!/^[0-9]{10}$/.test(teacher.phone)) {
    alert("Phone number must contain exactly 10 digits");
    return;
  }

  // Check email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(teacher.email)) {
    alert("Enter a valid email address");
    return;
  }

  // Check password length
  if (teacher.password.length < 8) {
    alert("Password must contain at least 8 characters");
    return;
  }
    const response=await fetch(
      "http://127.0.0.1:8000/teacher",{
        method:'POST',
        headers:{
               "Content-Type": "application/json"
        },
        body:JSON.stringify(teacher)
      }
    )
    const teacherdata=await response.json();
    if (response.ok) {
      console.log(teacherdata);
      alert("Teacher Registered Successfully");
      window.location.reload();
    } else {
      console.log(teacherdata);

      if (teacherdata.detail) {
        alert(teacherdata.detail);
      } else {
        alert("Registration Failed");
      }
    } 
  }
  return (
    <div>
      <div className='teacher-registration'>
        <form onSubmit={Register}>
          <h1>Teacher Registeration</h1>
          <input type='text'
          name='teacher_id'
          placeholder='Enter your ID'
          value={teacher.teacher_id}
          onChange={handlechange}
          required/>
         <input type='text'
         name='name'
         placeholder='Enter your name'
         value={teacher.name} 
         onChange={handlechange}
         required/>
         <input type='text'
         name='email'
         placeholder='Enter your Email'
         value={teacher.email}
         onChange={handlechange}
         required/>
        <input
         type="tel"
         name="phone"
         placeholder="Enter your Phone"
         value={teacher.phone}
         onChange={handlechange}
         required/>
        <input type='text'
         name='password'
         placeholder='Enter your Password'
         value={teacher.password}
         onChange={handlechange}
         required/>
       <input type='text'
         name='subject'
         placeholder='Enter your Subject'
         value={teacher.subject}
         onChange={handlechange}
         required/>
      <input type='text'
         name='qualification'
         placeholder='Enter your Qualification'
         value={teacher.qualification}
         onChange={handlechange}
         required/>
          <select
            name="gender"
            value={teacher.gender}
            onChange={handlechange}
            required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
     <input type='text'
         name='address'
         placeholder='Enter your Address'
         value={teacher.address}
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
