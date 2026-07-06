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
import ContactUs from "./components/ContactUs";
import Registration from "./components/Registration";

import StudentDashboard from "./components/studentdashboard/StudentDashboard";
import Marks from "./components/studentdashboard/Marks";
import Subject from "./components/studentdashboard/Subject";

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
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>

            <Footer />
          </>
        }
      />

      {/* Dashboard Pages */}
      <Route path="/studentdashboard" element={<StudentDashboard />}>
        <Route path="marks" element={<Marks />} />
        <Route path="subjects" element={<Subject/>}></Route>
      </Route>

    </Routes>
  );
};

export default App;