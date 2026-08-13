import React from 'react'
import '../../../styles/teacherdashboard/studentattendancestyles/DeleteAttendance.css';

const DeleteAttendance = ({ id, close }) => {

    const deleteattendance = () => {

        const token = localStorage.getItem('token')

        fetch(`http://127.0.0.1:8000/attendance/delete_attendance/${id}`, {
            method: 'DELETE',

            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            alert('Attendance deleted successfully')
            close()
        })
        .catch((error) => {
            console.log(error)
            alert('Attendance cannot be deleted')
        })
    }

    return (
        <div className="delete-attendance-overlay">

            <div className="delete-attendance-card">

                <h2 className="delete-attendance-title">
                    Delete Attendance
                </h2>

                <p className="delete-attendance-message">
                    Are you sure you want to delete this attendance?
                </p>

                <div className="delete-attendance-buttons">

                    <button
                        className="delete-attendance-confirm"
                        onClick={deleteattendance}
                    >
                        Delete
                    </button>

                    <button
                        className="delete-attendance-cancel"
                        onClick={close}
                    >
                        Cancel
                    </button>

                </div>

            </div>

        </div>
    )
}

export default DeleteAttendance