import React from "react";
import "../../styles/studentdashboardstyles/Subject.css";

import telugu from "../../assests/telugu.png";
import hindi from "../../assests/hindi.png";
import english from "../../assests/english.png";
import maths from "../../assests/maths.png";
import science from "../../assests/science.png";
import computer1 from "../../assests/computer1.png";

const Subject = () => {
  const subjects = [
    {
      name: "Telugu",
      code: "TEL101",
      image: telugu,
      description:
        "Learn Telugu language and literature with grammar and reading skills.",
    },
    {
      name: "Hindi",
      code: "HIN102",
      image: hindi,
      description:
        "Improve Hindi grammar, reading, writing and communication skills.",
    },
    {
      name: "English",
      code: "ENG103",
      image: english,
      description:
        "Develop English grammar, vocabulary, reading and writing skills.",
    },
    {
      name: "Mathematics",
      code: "MAT104",
      image: maths,
      description:
        "Understand mathematical concepts and improve problem-solving skills.",
    },
    {
      name: "Science",
      code: "SCI105",
      image: science,
      description:
        "Explore biology, chemistry, physics and the world around us.",
    },
    {
      name: "Computer Science",
      code: "CS106",
      image: computer1,
      description:
        "Learn computer fundamentals, programming and modern technologies.",
    },
  ];

  return (
    <div className="subjects-container">
      <div className="subjects-header">
        <h2>My Subjects</h2>
        <p>Explore your subjects and learning materials</p>
      </div>
      <div className="subjects-grid">
        {subjects.map((subject) => (
          <div className="subject-card" key={subject.code}>
            <div className="subject-image">
              <img src={subject.image} alt={subject.name} />
            </div>
            <div className="subject-content">
              <div className="subject-heading">
                <h3>{subject.name}</h3>
                <span>{subject.code}</span>
              </div>
              <p>{subject.description}</p>
              <button className="view-book-btn">View Book</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subject;
