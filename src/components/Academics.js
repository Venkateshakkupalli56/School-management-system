import React from "react";
import {
  FaBookOpen,
  FaGraduationCap,
  FaSchool,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

import "../styles/Academics.css";

const Academics = () => {
  return (
    <section className="academics">
      {/* Heading */}
      <div className="heading">
        <span>Academics</span>
        <h2>Building Bright Futures Through Quality Education</h2>
        <p>
          We nurture creativity, confidence, leadership, and academic
          excellence from Primary School to Higher Secondary.
        </p>
      </div>

      {/* Academic Cards */}
      <div className="academic-grid">
        <div className="academic-card">
          <div className="icon">
            <FaSchool />
          </div>

          <h3>Primary School</h3>

          <small>Grades 1 - 5</small>

          <p>
            Strong foundation with activity-based learning and creativity.
          </p>

          <button>
            Learn More <FaArrowRight />
          </button>
        </div>

        <div className="academic-card">
          <div className="icon">
            <FaBookOpen />
          </div>

          <h3>Middle School</h3>

          <small>Grades 6 - 8</small>

          <p>
            Develop analytical thinking, communication, and teamwork.
          </p>

          <button>
            Learn More <FaArrowRight />
          </button>
        </div>

        <div className="academic-card">
          <div className="icon">
            <FaGraduationCap />
          </div>

          <h3>Secondary School</h3>

          <small>Grades 9 - 10</small>

          <p>
            Comprehensive curriculum focused on academic excellence and board
            preparation.
          </p>

          <button>
            Learn More <FaArrowRight />
          </button>
        </div>

        <div className="academic-card">
          <div className="icon">
            <FaRocket />
          </div>

          <h3>Higher Secondary</h3>

          <small>Grades 11 - 12</small>

          <p>
            Career-oriented streams preparing students for higher education.
          </p>

          <button>
            Learn More <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Subjects Section */}

      <div className="subjects-section">
        <div className="subjects-heading">
          <span>Subjects</span>

          <h2>Subjects We Offer</h2>

          <p>
            Our curriculum offers a balanced mix of academic and practical
            subjects to prepare students for future success.
          </p>
        </div>

        <div className="subjects-grid">
          <div className="subject-card">
            <span>📐</span>
            <h4>Mathematics</h4>
          </div>

          <div className="subject-card">
            <span>⚛️</span>
            <h4>Physics</h4>
          </div>

          <div className="subject-card">
            <span>🧬</span>
            <h4>Biology</h4>
          </div>

          <div className="subject-card">
            <span>📖</span>
            <h4>English</h4>
          </div>

          <div className="subject-card">
            <span>🧪</span>
            <h4>Chemistry</h4>
          </div>

          <div className="subject-card">
            <span>📊</span>
            <h4>Economics</h4>
          </div>

          <div className="subject-card">
            <span>💻</span>
            <h4>Computer Science</h4>
          </div>

          <div className="subject-card">
            <span>🌍</span>
            <h4>History</h4>
          </div>

          <div className="subject-card">
            <span>💼</span>
            <h4>Commerce</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;