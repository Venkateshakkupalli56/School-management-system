import React, { useState } from 'react';

const EditHomework = ({ homework_id, close }) => {
  const [edithomework, setEdithomework] = useState({
    teacher_id: '',
    date: '',
    class_name: '',
    subject: '',
    homework: ''
  });

  const updatechange = (e) => {
    setEdithomework({
      ...edithomework,
      [e.target.name]: e.target.value
    });
  };

  const Edit = async (e) => {
    e.preventDefault();

    // console.log("Homework ID:", id);
    console.log("Data:", edithomework);

    const edithome = await fetch(
      `http://127.0.0.1:8000/homework/update/${homework_id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(edithomework)
      }
    );

    const data = await edithome.json();

    console.log(data);

    if (edithome.ok) {
      alert('Homework updated successfully');
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

          {/* Teacher ID */}
          <div className="home-work">
            <label htmlFor="teacher_id">
              Teacher ID
            </label>

            <input
              type="text"
              id="teacher_id"
              name="teacher_id"
              placeholder="Enter Teacher ID"
              value={edithomework.teacher_id}
              onChange={updatechange}
              required
            />
          </div>

          {/* Date */}
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

          {/* Class Name */}
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

          {/* Subject */}
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

          {/* Homework */}
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

          {/* Buttons */}
          <div className="homework-buttons">

            <button
              type="submit"
              style={{
                color: 'white',
                backgroundColor: '#007BFF'
              }}
            >
              Update Homework
            </button>

            <button
              type="button"
              onClick={close}
              style={{
                color: 'white',
                backgroundColor: '#DC3545'
              }}
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