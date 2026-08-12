import React from 'react';
import '../../../styles/teacherdashboard/studentmarksstyles/DeleteMarks.css';
const DeleteMarks = ({ id, close }) => {

    const handleDelete = () => {

        const token = localStorage.getItem('token');

        fetch(`http://127.0.0.1:8000/marks/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert('Deleted successfully');
            close();
        })
        .catch((error) => {
            console.log(error);
            alert('Data cannot be deleted');
        });
    };

    return (
    <div className="delete-overlay">

        <div className="delete-modal">

            <h2>Are you sure you want to delete?</h2>

            <div className="delete-buttons">

                <div className="delete-btn123">
                    <button onClick={handleDelete}>
                        Delete
                    </button>
                </div>

                <div className="cancel-btn123">
                    <button onClick={close}>
                        Cancel
                    </button>
                </div>

            </div>

        </div>

    </div>
);
};

export default DeleteMarks;