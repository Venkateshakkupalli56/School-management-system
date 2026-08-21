import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landingpage from "./components/Landingpage";
import Home from "./components/Home";
import About from "./components/About";
import Academics from "./components/Academics";
import Sports from "./components/Sports";
import Facilities from "./components/Facilities";
import StudentLogin from "./components/StudentLogin";
import TeacherLogin from "./components/TeacherLogin";
import ContactUs from "./components/ContactUs";
import StudentRegisteration from "./components/StudentRegisteration";
import TeacherRegisteration from "./components/TeacherRegisteration";
// import Registration from "./components/Registration";

import StudentDashboard from "./components/studentdashboard/StudentDashboard";
import Marks from "./components/studentdashboard/Marks";
import Subject from "./components/studentdashboard/Subject";
import Homework from "./components/studentdashboard/Homework";
import Attendance from "./components/studentdashboard/Attendance";

import TeacherDashboard from "./components/teacherdashboard/TeacherDashboard";
import StudentMarks from "./components/teacherdashboard/studentmarks/StudentMarks";
import AddMarks from "./components/teacherdashboard/studentmarks/AddMarks";
import EditMarks from "./components/teacherdashboard/studentmarks/EditMarks";
import DeleteMarks from "./components/teacherdashboard/studentmarks/DeleteMarks";
import StudentAttendance from "./components/teacherdashboard/studentattendance/StudentAttendance";
import AddAttendance from "./components/teacherdashboard/studentattendance/AddAttendance";
import StudentHomework from "./components/teacherdashboard/homework/StudentHomework";
import AddHomework from "./components/teacherdashboard/homework/AddHomework";
import EditHomework from "./components/teacherdashboard/homework/EditHomework";
import StudentProfile from "./components/studentdashboard/StudentProfile";
import TeacherProfile from "./components/teacherdashboard/TeacherProfile";
import TeacherSubject from "./components/teacherdashboard/TeacherSubject";
import StudentResult from "./components/studentdashboard/StudentResult";
import AdminLogin from "./components/AdminLogin";

import AdminDashboard from "./components/admindashboard/AdminDashboard";

const App = () => {
  return (
    <Routes>

      {/* Website Pages */}
      <Route path="*" element={<><Navbar /><Routes>
              <Route path="/" element={<Landingpage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/studentlogin" element={<StudentLogin />} />
              <Route path="/teacherlogin" element={<TeacherLogin />} />
              <Route path="/adminlogin" element={<AdminLogin/>}/>
              <Route path="/studentregistration" element={<StudentRegisteration/>} />
              <Route path="/teacherregister" element={<TeacherRegisteration/>} />
              <Route path="/contact" element={<ContactUs />} />
              {/* <Route path="/registration" element={<Registration />} /> */}
            </Routes>

            <Footer />
          </>
        }
      />

      {/* Dashboard Pages */}
      <Route path="/studentdashboard" element={<StudentDashboard />}>
        <Route path="marks" element={<Marks />} />
        <Route path="subjects" element={<Subject/>}></Route>
        <Route path="homework" element={<Homework/>}></Route>
        <Route path="attendance" element={<Attendance/>}></Route>
        <Route path="profile" element={<StudentProfile/>}></Route>
        <Route path="results" element={<StudentResult/>}></Route>
      </Route>
      <Route path="/teacherdashboard" element={<TeacherDashboard />}>
     <Route path="studentmarks" element={<StudentMarks />}>
    <Route path="addmarks" element={<AddMarks />} />
    <Route path="editmarks" element={<EditMarks/>}/>
    <Route path="deletemarks" element={<DeleteMarks/>}/>
    </Route>
    <Route path="studentattendance" element={<StudentAttendance/>}>
    <Route path="addattendance" element={<AddAttendance/>}/>
      </Route>
    <Route path="homework" element={<StudentHomework/>}>
    <Route path="addhomework" element={<AddHomework/>}/>
    <Route path="edithomework" element={<EditHomework/>}/>
    </Route>
    <Route path="profile" element={<TeacherProfile/>}></Route>
    <Route path="subjects" element={<TeacherSubject/>}></Route>
      </Route>
      <Route>
        <Route path="/admindashboard" element={<AdminDashboard/>}></Route>
      </Route>
    </Routes>
  );
};

export default App;