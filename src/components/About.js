import React from "react";
import '../styles/About.css';

import school_image from "../assests/school_image.png";

import { TiTick } from "react-icons/ti";
import { TbTargetArrow } from "react-icons/tb";
import { GiStairsGoal } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about">

      {/* Hero Section */}

      <section className="about-hero">

        <div className="about-content">

          <h1>Empowering Students for a Better Tomorrow</h1>

          <p>
            Our school provides quality education with modern classrooms,
            experienced teachers and a safe learning environment. We focus on
            academic excellence, leadership, discipline and creativity.
          </p>

          <ul>

            <li>
              <TiTick className="tick" />
              Quality Education
            </li>

            <li>
              <TiTick className="tick" />
              Experienced Teachers
            </li>

            <li>
              <TiTick className="tick" />
              Smart Classrooms
            </li>

            <li>
              <TiTick className="tick" />
              Sports & Activities
            </li>

            <li>
              <TiTick className="tick" />
              Parent-Teacher Communication
            </li>

          </ul>

        </div>

        <div className="about-image">
          <img src={school_image} alt="School" />
        </div>

      </section>

      {/* Mission Cards */}

      <section className="mission-section">

        <div className="mission-card">

          <TbTargetArrow className="icon"/>

          <h2>Our Mission</h2>

          <p>
            To provide quality education and inspire students to become
            responsible citizens.
          </p>

        </div>

        <div className="mission-card">

          <GiStairsGoal className="icon"/>

          <h2>Our Vision</h2>

          <p>
            To create confident learners who can succeed in a changing world.
          </p>

        </div>

        <div className="mission-card">

          <FaGraduationCap className="icon"/>

          <h2>Student Development</h2>

          <p>
            We develop students academically, socially and emotionally.
          </p>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats">

        <h2>Why Choose Us</h2>

        <div className="stats-container">

          <div className="stat-box">
            <h3>20+</h3>
            <p>Years</p>
          </div>

          <div className="stat-box">
            <h3>500+</h3>
            <p>Students</p>
          </div>

          <div className="stat-box">
            <h3>100+</h3>
            <p>Teachers</p>
          </div>

          <div className="stat-box">
            <h3>50+</h3>
            <p>Awards</p>
          </div>

          <div className="stat-box">
            <h3>500+</h3>
            <p>Admissions</p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default About;