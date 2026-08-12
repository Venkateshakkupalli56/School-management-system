import React, { useState } from "react";

const StudentMarksByName = ({ setData }) => {

    const [name, setName] = useState("");

    const change = (e) => {
        setName(e.target.value);
    };

    const Name = (e) => {

        e.preventDefault();

        const token = localStorage.getItem("token");

        fetch(`http://127.0.0.1:8000/marks/search?name=${name}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setData(data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="search-name">

            <form onSubmit={Name}>

                <input
                    type="text"
                    placeholder="Search by using student name"
                    name="name"
                    value={name}
                    onChange={change}
                />

                <button type="submit">
                    Search
                </button>

            </form>

        </div>
    );
};

export default StudentMarksByName;