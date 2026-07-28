import React, { useState } from 'react';
import '../../../styles/teacherdashboard/studentmarksstyles/AddMarks.css';

const AddMarks = ({ close }) => {

    const [add, setAdd] = useState({
        student_id: "",
        name: "",
        subject: "",
        exam: "",
        marks_obtained: "",
        total_marks: "",
        grade: ""
    });

    const handlechange = (e) => {
        setAdd({
            ...add,
            [e.target.name]: e.target.value
        });
    };

    const handlemarks = async (e) => {
        e.preventDefault();

        const response = await fetch(
            'http://127.0.0.1:8000/add',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(add)
            }
        );

        const data = await response.json();

        if (response.ok) {
            alert('Marks added successfully');

            // Close Add Marks form
            close();

        } else {
            alert('Marks cannot be added');
            console.log(data);
        }
    };

    return (
        <div className="addmarks-container">

            <div className="addmarks">

                <h1>Add Student Marks</h1>

                <form onSubmit={handlemarks}>

                    <div className="form-group">
                        <label>Student ID</label>
                        <input
                            type="number"
                            name="student_id"
                            placeholder="Enter student ID"
                            value={add.student_id}
                            onChange={handlechange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Student Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter student name"
                            value={add.name}
                            onChange={handlechange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Enter subject name"
                            value={add.subject}
                            onChange={handlechange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Exam</label>
                        <input
                            type="text"
                            name="exam"
                            placeholder="Enter exam name"
                            value={add.exam}
                            onChange={handlechange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Marks Obtained</label>
                        <input
                            type="number"
                            name="marks_obtained"
                            placeholder="Enter marks obtained"
                            value={add.marks_obtained}
                            onChange={handlechange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Total Marks</label>
                        <input
                            type="number"
                            name="total_marks"
                            placeholder="Enter total marks"
                            value={add.total_marks}
                            onChange={handlechange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Grade</label>
                        <input
                            type="text"
                            name="grade"
                            placeholder="Enter grade"
                            value={add.grade}
                            onChange={handlechange}
                            required
                        />
                    </div>

                    <div className="button-group">

                        <button type="submit" className="add-btn">
                            Add Marks
                        </button>

                        <button
                            type="button"
                            className="cancel-btn"
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

export default AddMarks;