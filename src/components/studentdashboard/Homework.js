import React, { useEffect, useState } from "react";
import '../../styles/studentdashboardstyles/Homework.css';
const StudentHomework = () => {
  const [homework, setHomework] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:8000/get_homework_student", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch homework");
        }
        return response.json();
      })
      .then((data) => {
        setHomework(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <div className="student-homework">
  <h2>Student Homework</h2>

  {error && <p className="homework-error">{error}</p>}

  <div className="homework-container">
    <table className="homework-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Class</th>
          <th>Subject</th>
          <th>Homework</th>
        </tr>
      </thead>

      <tbody>
        {homework.map((item) => (
          <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.class_name}</td>
            <td>{item.subject}</td>
            <td>{item.homework}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    </div>
  );
};

export default StudentHomework;