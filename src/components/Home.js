import React from 'react'
import '../styles/Home.css';
import Childs from '../assests/childs.png';
import classroom from '../assests/classroom.jpg';
import computer from '../assests/computer.png';
import ground from '../assests/ground.jpg';
import science from '../assests/science.jpg';
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineSportsKabaddi } from "react-icons/md";
const Home = () => {
  return (
    <div className=''>
        <div className='child'>
            <img src={Childs} alt='.'/>
            <button className='btn'>Explore More</button>
        </div>
        <section className='sec'>
            <div className='education'>
                <span><PiStudentFill /></span>
                <h4>Quality Education</h4>
                <p>We provide a student-centered learning environment with experienced teachers, modern teaching methods, smart classrooms, and a curriculum designed to develop knowledge, creativity, and critical thinking.</p>
            </div>
            <div className='teachers'>
                <span><GiTeacher /></span>
                <h4>Teachers</h4>
                <p>Our qualified and dedicated teachers guide every student with personalized attention, ensuring academic excellence, discipline, and overall personality development.</p>
            </div>
            <div className='teachers'>
                <span><FaComputer /></span>
                <h4>Facilities</h4>
                <p>Our campus offers smart classrooms, well-equipped science and computer laboratories, a digital library, clean classrooms, transportation, and a safe learning environment.</p>
            </div>
            <div className='sports'>
                <span><MdOutlineSportsKabaddi /></span>
                <h4>Sports and Activities</h4>
                <p>We encourage students to participate in cricket, football, volleyball, badminton, athletics, yoga, and cultural activities to promote physical fitness, teamwork, and leadership skills.</p>
            </div>
        </section>
        <footer className='foot'>
            <h1>Our Top Facilities</h1>
            <div className='foot1'>
            <div className='classroom'>
                <img src={classroom} alt='.'/>
                <p>Smart Classroom</p>
            </div>
            <div className='ground1'>
                <img src={computer} alt='.'/>
                <p>Computer</p>
            </div>
            <div className='ground1'>
                <img src={science} alt='.'/>
                <p>Science</p>
            </div>
            <div className='ground'>
                <img src={ground} alt='.'/>
                <p>Play Ground</p>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Home
