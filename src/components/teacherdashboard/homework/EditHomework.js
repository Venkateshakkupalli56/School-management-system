import React, { useState } from 'react';
import '../../../styles/teacherdashboard/studenthomework/EditHomework.css';
const EditHomework = ({ id, homework, close,refresh }) => {

  const [edithomework, setEdithomework] = useState({
    date: homework.date,
    class_name: homework.class_name,
    subject: homework.subject,
    homework: homework.homework
  });

  const updatechange = (e) => {

    setEdithomework({
      ...edithomework,
      [e.target.name]: e.target.value
    });

  };

  const Edit = async (e) => {

    e.preventDefault();

    console.log("Homework ID:", id);
    console.log("Data:", edithomework);

    const token = localStorage.getItem('token');

    const edithome = await fetch(
      `http://127.0.0.1:8000/update_homework?id=${id}`,
      {
        method: 'PUT',

        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },

        body: JSON.stringify(edithomework)
      }
    );

    const data = await edithome.json();

    console.log(data);

    if (edithome.ok) {

      alert('Homework updated successfully');
      refresh()
      close();

    } else {

      alert('Homework cannot be updated');

      console.log(data);

    }
  };

  return (
    <div className="homework-overlay">

      <div className="homework">

        <form onSubmit={Edit}>

          <h2>Edit Homework</h2>

          <div className="home-work">

            <label htmlFor="date">
              Date
            </label>

            <input
              type="date"
              id="date"
              name="date"
              value={edithomework.date}
              onChange={updatechange}
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
              value={edithomework.class_name}
              onChange={updatechange}
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
              value={edithomework.subject}
              onChange={updatechange}
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
              value={edithomework.homework}
              onChange={updatechange}
              required
            />

          </div>


          <div className="homework-buttons">

            <button
              type="submit"
              className="update-homework-btn"
            >
              Update Homework
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

export default EditHomework;