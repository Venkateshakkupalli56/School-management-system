import React, { useState } from 'react';
import '../../../styles/teacherdashboard/studenthomework/AddHomework.css';

const AddHomework = ({ close }) => {

  const [homework, setHomework] = useState({
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

    const token = localStorage.getItem('token');

    const stdhomework = await fetch(
      'http://127.0.0.1:8000/add_homework',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(homework)
      }
    );

    const data = await stdhomework.json();

    console.log(data);

    if (stdhomework.ok) {
      alert('Homework added successfully');
      // close();
      setHomework({
        date:'',
        class_name:'',
        subject:'',
        homework:''
      })
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
              name="class_name"
              placeholder="Enter Class Name"
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
              name="subject"
              placeholder="Enter Subject Name"
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
              name="homework"
              placeholder="Enter Homework"
              value={homework.homework}
              onChange={handlechange}
              required
            />

          </div>

          <div className="homework-buttons">

            <button
              type="submit"
              className="add-homework-btn"
            >
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