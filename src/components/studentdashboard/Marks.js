import React, { useState } from "react";
import '../../styles/studentdashboardstyles/Marks.css';
const Marks = () => {

  const [student_id, setStudent_id] = useState("");
  const [marks, setMarks] = useState([]);

  const search = async () => {

    const response = await fetch(
      `http://127.0.0.1:8000/student/${student_id}`
    );

    const data = await response.json();

    // console.log(data);

    setMarks(data);
  };

  return (
    <div>

      <div className="enter-student">

        <input
          type="text"
          placeholder="Enter your student ID"
          name="student_id"
          value={student_id}
          onChange={(e) => setStudent_id(e.target.value)}
        />

        <button onClick={search}>
          Search
        </button>

      </div>

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
              <td>{item.total_marks}</td>
              <td>{item.grade}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Marks;