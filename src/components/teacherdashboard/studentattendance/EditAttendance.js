import React, { useState } from 'react'
import '../../../styles/teacherdashboard/studentattendancestyles/EditAttendance.css';

const EditAttendance = ({ close, data }) => {

    const [editdata, setEditdata] = useState({
        student_id: data.student_id,
        name: data.name,
        total_classes: data.total_classes,
        present: data.present
    })

    const handlechange = (e) => {
        setEditdata({
            ...editdata,
            [e.target.name]: e.target.value
        })
    }

    const updateattendance = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token')

        fetch(`http://127.0.0.1:8000/attendance/${data.id}`, {
            method: 'PUT',

            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(editdata)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            alert('Attendance updated successfully')
        })
        .catch((error) => {
            console.log(error);
            alert('Attendance cannot be updated')
        })
    }

    return (
        <div className="edit-attendance-overlay">

            <div className="edit-attendance-card">

                <h2 className="edit-attendance-title">
                    Edit Attendance
                </h2>

                <form
                    className="edit-attendance-form"
                    onSubmit={updateattendance}
                >

                    <div className="edit-attendance-field">
                        <label>Student ID</label>

                        <input
                            type="text"
                            name="student_id"
                            placeholder="Enter Student ID"
                            value={editdata.student_id}
                            onChange={handlechange}
                        />
                    </div>

                    <div className="edit-attendance-field">
                        <label>Student Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter student name"
                            value={editdata.name}
                            onChange={handlechange}
                        />
                    </div>

                    <div className="edit-attendance-field">
                        <label>Total Classes</label>

                        <input
                            type="number"
                            name="total_classes"
                            placeholder="Enter total classes"
                            value={editdata.total_classes}
                            onChange={handlechange}
                        />
                    </div>

                    <div className="edit-attendance-field">
                        <label>Present Classes</label>

                        <input
                            type="number"
                            name="present"
                            placeholder="Enter present classes"
                            value={editdata.present}
                            onChange={handlechange}
                        />
                    </div>

                    <div className="edit-attendance-buttons">

                        <button
                            type="submit"
                            className="edit-attendance-update"
                        >
                            Update Attendance
                        </button>

                        <button
                            type="button"
                            className="edit-attendance-cancel"
                            onClick={close}
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default EditAttendance