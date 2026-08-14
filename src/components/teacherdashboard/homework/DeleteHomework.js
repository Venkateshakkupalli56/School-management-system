import React from 'react';
import '../../../styles/teacherdashboard/studenthomework/DeleteHomework.css';
const DeleteHomework = ({ id, close, refresh }) => {

  const Delete = () => {

    console.log("Homework ID:", id);

    const token = localStorage.getItem('token');

    fetch(
      `http://127.0.0.1:8000/delete_homework?id=${id}`,
      {
        method: 'DELETE',

        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )

      .then((response) => response.json())

      .then((data) => {

        console.log(data);

        if (data) {

          alert('Homework deleted successfully');

          close();

          refresh();

        } else {

          alert('Homework cannot be deleted');

        }

      })

      .catch((error) => {

        console.log(error);
      });

  };


  return (
    <div className="homework-overlay">

      <div className="homework">

        <h2>Delete Homework</h2>

        <p>
          Are you sure you want to delete this homework?
        </p>

        <div className="homework-buttons">

          <button
            type="button"
            className="delete-homework-btn"
            onClick={Delete}
          >
            Delete
          </button>

          <button
            type="button"
            className="cancel-homework-btn"
            onClick={close}
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteHomework;