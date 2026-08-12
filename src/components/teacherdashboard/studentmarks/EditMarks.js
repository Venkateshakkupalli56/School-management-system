import React, { useState } from "react";
import "../../../styles/teacherdashboard/studentmarksstyles/EditMarks.css";

const EditMarks = ({ data, close, refresh }) => {

    const [update, setUpdate] = useState({
        student_id: data.student_id,
        name: data.name,
        subject: data.subject,
        exam: data.exam,
        marks_obtained: data.marks_obtained,
        total: data.total,
        grade: data.grade
    });


    // CHANGE INPUT
    const change = (e) => {

        setUpdate({
            ...update,
            [e.target.name]: e.target.value
        });

    };


    // UPDATE MARKS
    const marks = (e) => {

        e.preventDefault();

        const token = localStorage.getItem("token");

        fetch(`http://127.0.0.1:8000/marks/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(update)
        })
        .then((response) => response.json())
        .then((result) => {

            console.log(result);

            alert("Marks updated successfully");

            refresh();
            close();

        })
        .catch((error) => {

            console.log(error);

            alert("Update failed");

        });

    };


    return (

        <div className="editmarks-overlay">

            <div className="editmarks-container">

                <h2 className="editmarks-title">
                    Edit Marks
                </h2>


                <form
                    className="editmarks-form"
                    onSubmit={marks}
                >

                    {/* STUDENT ID */}

                    <div className="form-group">

                        <label>Student ID</label>

                        <input
                            className="editmarks-input"
                            type="text"
                            name="student_id"
                            value={update.student_id}
                            onChange={change}
                            required
                        />

                    </div>


                    {/* NAME */}

                    <div className="form-group">

                        <label>Student Name</label>

                        <input
                            className="editmarks-input"
                            type="text"
                            name="name"
                            value={update.name}
                            onChange={change}
                            required
                        />

                    </div>


                    {/* SUBJECT */}

                    <div className="form-group">

                        <label>Subject</label>

                        <input
                            className="editmarks-input"
                            type="text"
                            name="subject"
                            value={update.subject}
                            onChange={change}
                            required
                        />

                    </div>


                    {/* EXAM */}

                    <div className="form-group">

                        <label>Exam Type</label>

                        <input
                            className="editmarks-input"
                            type="text"
                            name="exam"
                            value={update.exam}
                            onChange={change}
                            required
                        />

                    </div>


                    {/* MARKS */}

                    <div className="form-group">

                        <label>Marks Obtained</label>

                        <input
                            className="editmarks-input"
                            type="number"
                            name="marks_obtained"
                            value={update.marks_obtained}
                            onChange={change}
                            required
                        />

                    </div>


                    {/* TOTAL */}

                    <div className="form-group">

                        <label>Total Marks</label>

                        <input
                            className="editmarks-input"
                            type="number"
                            name="total"
                            value={update.total}
                            onChange={change}
                            required
                        />

                    </div>


                    {/* GRADE */}

                    <div className="form-group">

                        <label>Grade</label>

                        <input
                            className="editmarks-input"
                            type="text"
                            name="grade"
                            value={update.grade}
                            onChange={change}
                            required
                        />

                    </div>


                    {/* BUTTONS */}

                    <div className="editmarks-buttons">

                        <button
                            className="editmarks-btn submit-btn"
                            type="submit"
                        >
                            Update
                        </button>

                        <button
                            className="editmarks-btn cancel-btn"
                            type="button"
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

export default EditMarks;