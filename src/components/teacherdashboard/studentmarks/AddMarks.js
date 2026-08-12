import React, { useState } from "react";
import "../../../styles/teacherdashboard/studentmarksstyles/AddMarks.css";

const AddMarks = ({ close }) => {

    const [add, setAdd] = useState({
        student_id: "",
        name: "",
        subject: "",
        exam: "",
        marks_obtained: "",
        total: "",
        grade: ""
    });

    const handlechange = (e) => {

        setAdd({
            ...add,
            [e.target.name]: e.target.value
        });

    };

    const addmarks = (e) => {

        e.preventDefault();

        const token = localStorage.getItem("token");

        fetch("http://127.0.0.1:8000/addmarks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(add)
        })
        .then((response) => response.json())
        .then((data) => {

            console.log(data);

            alert("Marks added successfully");

            // Close Add Marks after successful adding
            close();

        })
        .catch((error) => {

            console.log(error);

            alert("Unable to add marks");

        });

    };

    return (

        <div className="addmarks-overlay">

            <div className="addmarks-container">

                <h2 className="addmarks-title">
                    Add Marks
                </h2>

                <form
                    className="addmarks-form"
                    onSubmit={addmarks}
                >

                    {/* STUDENT ID */}

                    <div className="form-group">

                        <label>
                            Student ID
                        </label>

                        <input
                            type="text"
                            name="student_id"
                            value={add.student_id}
                            onChange={handlechange}
                            placeholder="Enter Student ID"
                            required
                        />

                    </div>


                    {/* NAME */}

                    <div className="form-group">

                        <label>
                            Student Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={add.name}
                            onChange={handlechange}
                            placeholder="Enter Student Name"
                            required
                        />

                    </div>


                    {/* SUBJECT */}

                    <div className="form-group">

                        <label>
                            Subject
                        </label>

                        <input
                            type="text"
                            name="subject"
                            value={add.subject}
                            onChange={handlechange}
                            placeholder="Enter Subject"
                            required
                        />

                    </div>


                    {/* EXAM */}

                    <div className="form-group">

                        <label>
                            Exam Type
                        </label>

                        <input
                            type="text"
                            name="exam"
                            value={add.exam}
                            onChange={handlechange}
                            placeholder="Enter Exam"
                            required
                        />

                    </div>


                    {/* MARKS */}

                    <div className="form-group">

                        <label>
                            Marks Obtained
                        </label>

                        <input
                            type="number"
                            name="marks_obtained"
                            value={add.marks_obtained}
                            onChange={handlechange}
                            placeholder="Enter Marks Obtained"
                            required
                        />

                    </div>


                    {/* TOTAL */}

                    <div className="form-group">

                        <label>
                            Total Marks
                        </label>

                        <input
                            type="number"
                            name="total"
                            value={add.total}
                            onChange={handlechange}
                            placeholder="Enter Total Marks"
                            required
                        />

                    </div>


                    {/* GRADE */}

                    <div className="form-group">

                        <label>
                            Grade
                        </label>

                        <input
                            type="text"
                            name="grade"
                            value={add.grade}
                            onChange={handlechange}
                            placeholder="Enter Grade"
                            required
                        />

                    </div>


                    {/* BUTTONS */}

                    <div className="button-group">

                        <button
                            type="submit"
                            className="add-btn"
                        >
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