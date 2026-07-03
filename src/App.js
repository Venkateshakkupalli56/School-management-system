import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './components/Landingpage'
import Academics from './components/Academics'
import Sports from './components/Sports'
import Facilities from './components/Facilities'
import StudentLogin from './components/StudentLogin'
import ContactUs from './components/ContactUs'
const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Home/> */}
      
      <Routes>
        <Route path='/' element={<Landingpage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/academics' element={<Academics/>}></Route>
        <Route path='/sports' element={<Sports/>}></Route>
        <Route path='/facilities' element={<Facilities/>}></Route>
        <Route path='/studentlogin' element={<StudentLogin/>}></Route>
        < Route path='/contact' element={<ContactUs/>}/>
      </Routes>
      <Footer/>
      {/* <About/> */}
    </div>
  )
}

export default App
