import React, { useState } from 'react';
import '../../../styles/teacherdashboard/studenthomework/StudentHomework.css';

const AddHomework = ({ close }) => {
  const [homework, setHomework] = useState({
    teacher_id: '',
    date: '',
    class_name: '',
    subject: '',
    homework: ''
  });

  const handlechange = (e) => {
    setHomework({
      ...homework,
      [e.target.name]: e.target.value
    });
  };

  const Homework = async (e) => {
    e.preventDefault();

    const stdhomework = await fetch(
      'http://127.0.0.1:8000/homework/add_homework',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(homework)
      }
    );

    const data = await stdhomework.json();

    console.log(data);

    if (stdhomework.ok) {
      alert('Homework added successfully');
      close();
    } else {
      alert('Homework cannot be added');
    }
  };

  return (
    <div className="homework-overlay">
      <div className="homework">

        <form onSubmit={Homework}>

          <h2>Add Homework</h2>

          <div className="home-work">
            <label htmlFor="teacher_id">
              Teacher ID
            </label>

            <input
              type="number"
              id="teacher_id"
              placeholder="Enter Teacher ID"
              name="teacher_id"
              value={homework.teacher_id}
              onChange={handlechange}
              required
            />
          </div>

          <div className="home-work">
            <label htmlFor="date">
              Date
            </label>

            <input
              type="date"
              id="date"
              name="date"
              value={homework.date}
              onChange={handlechange}
              required
            />
          </div>

          <div className="home-work">
            <label htmlFor="class_name">
              Class Name
            </label>

            <input
              type="text"
              id="class_name"
              placeholder="Enter Class Name"
              name="class_name"
              value={homework.class_name}
              onChange={handlechange}
              required
            />
          </div>

          <div className="home-work">
            <label htmlFor="subject">
              Subject
            </label>

            <input
              type="text"
              id="subject"
              placeholder="Enter Subject Name"
              name="subject"
              value={homework.subject}
              onChange={handlechange}
              required
            />
          </div>

          <div className="home-work">
            <label htmlFor="homework">
              Homework
            </label>

            <textarea
              id="homework"
              placeholder="Enter Homework"
              name="homework"
              value={homework.homework}
              onChange={handlechange}
              required
            />
          </div>

          <div className="homework-buttons">
            <button type="submit" className="add-homework-btn">
              Add Homework
            </button>

            <button
              type="button"
              className="cancel-homework-btn"
              onClick={close}
            >
              Cancel
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default AddHomework;