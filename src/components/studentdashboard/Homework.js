import React from 'react'
import '../../styles/studentdashboardstyles/Homework.css';
const Homework = () => {
  return (
    <div>
        <div className="marks-container">
      <div className="marks-header">
        <h2>Student Homework</h2>
      </div>

      <div className="marks-table-container">
        <table className="marks-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Reading</th>
                    <th>Writing</th>
                    <th>Practice</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2/7/2026</td>
                    <td>Telugu</td>
                    <td>1st Lesson</td>
                    <td>Write any two poems in 1st lesson</td>
                    <td>Two Questions</td>
                </tr>
                <tr>
                    <td>3/7/2026</td>
                    <td>Hindi</td>
                    <td>2nd Lesson</td>
                    <td>Write Hindi words</td>
                    <td>Three Questions</td>
                </tr>
                <tr>
                    <td>4/7/2026</td>
                    <td>English</td>
                    <td>1st Lesson</td>
                    <td>Words practice</td>
                    <td>Two Questions</td>
                </tr>
                <tr>
                    <td>5/7/2026</td>
                    <td>Mathematics</td>
                    <td>3rd Lesson</td>
                    <td>Additions</td>
                    <td>Two Questions</td>
                </tr>
                <tr>
                    <td>6/7/2026</td>
                    <td>Science</td>
                    <td>2nd Lesson</td>
                    <td>Diagrams</td>
                    <td>Five Questions</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    </div>
  )
}

export default Homework
