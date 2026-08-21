import React, { useEffect, useState } from 'react'
import '../../styles/studentdashboardstyles/StudentResult.css';
const StudentResult = () => {
    const [result, setResult] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token')

        fetch('http://127.0.0.1:8000/get_allmarks', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setResult(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="result">
            {result && (
                <div>
                    <p>Total: {result.total}</p>
                    <p>Marks Obtained: {result.scored_marks}</p>
                    <p>Percentage: {result.percentage}%</p>
                    {result.marks.map((item) => (
                        <div key={item.id}>
                            <p>Exam: {item.exam}</p>
                            <p>Subject: {item.subject}</p>
                            <p>Marks: {item.marks_obtained}</p>
                            <p>Grade: {item.grade}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default StudentResult