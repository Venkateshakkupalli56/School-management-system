import React, { useEffect, useState } from "react";
import "../../styles/studentdashboardstyles/Marks.css";
const Marks = () => {
  const [marks, setMarks] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://127.0.0.1:8000/get_student_marks", {
      method: "GET",
      headers: {
        'Authorization':`Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMarks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h2>Student Marks</h2>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Exam</th>
            <th>Marks Obtained</th>
            <th>Total Marks</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((item) => (
            <tr key={item.id}>
              <td>{item.student_id}</td>
              <td>{item.name}</td>
              <td>{item.subject}</td>
              <td>{item.exam}</td>
              <td>{item.marks_obtained}</td>
              <td>{item.total}</td>
              <td>{item.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Marks;
