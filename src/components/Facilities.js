import React from "react";
import "../styles/Facilities.css";

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      title: "Smart Classrooms",
      description:
        "Digital classrooms with projectors, interactive boards, and modern teaching methods.",
      icon: "📚",
    },
    {
      id: 2,
      title: "Computer Lab",
      description:
        "Well-equipped computer laboratory with high-speed internet and latest systems.",
      icon: "💻",
    },
    {
      id: 3,
      title: "Science Laboratory",
      description:
        "Physics, Chemistry, and Biology labs with modern equipment for practical learning.",
      icon: "🧪",
    },
    {
      id: 4,
      title: "Library",
      description:
        "A rich collection of books, journals, newspapers, and digital learning resources.",
      icon: "📖",
    },
    {
      id: 5,
      title: "Sports Ground",
      description:
        "Large playground for cricket, football, volleyball, basketball, and athletics.",
      icon: "⚽",
    },
    {
      id: 6,
      title: "Transportation",
      description:
        "Safe and secure bus facility covering different routes with GPS tracking.",
      icon: "🚌",
    },
    {
      id: 7,
      title: "Medical Room",
      description:
        "First-aid and emergency medical support with regular health check-ups.",
      icon: "🏥",
    },
    {
      id: 8,
      title: "Cafeteria",
      description:
        "Clean and hygienic cafeteria serving healthy and nutritious food.",
      icon: "🍽️",
    },
  ];

  return (
    <section className="facilities">
      <h1>Our Facilities</h1>
      <p>Providing students with a modern and comfortable learning environment.</p>

      <div className="facility-container">
        {facilities.map((item) => (
          <div className="facility-card" key={item.id}>
            <div className="facility-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;