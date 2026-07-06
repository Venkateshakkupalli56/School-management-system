import React from "react";
import "../../styles/studentdashboardstyles/Marks.css";

const Marks = () => {
  return (
    <div className="marks-container">

      <div className="marks-header">
        <h2>Student Marks</h2>
      </div>

      <div className="marks-table-container">
        <table className="marks-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Subject</th>
              <th>Max Marks</th>
              <th>Marks Obtained</th>
              <th>Grade</th>
              <th>Result</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Mathematics</td>
              <td>100</td>
              <td>92</td>
              <td>A+</td>
              <td className="pass">Pass</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Science</td>
              <td>100</td>
              <td>88</td>
              <td>A</td>
              <td className="pass">Pass</td>
            </tr>

            <tr>
              <td>3</td>
              <td>English</td>
              <td>100</td>
              <td>90</td>
              <td>A+</td>
              <td className="pass">Pass</td>
            </tr>

            <tr>
              <td>4</td>
              <td>Social</td>
              <td>100</td>
              <td>84</td>
              <td>B+</td>
              <td className="pass">Pass</td>
            </tr>

            <tr>
              <td>5</td>
              <td>Computer</td>
              <td>100</td>
              <td>96</td>
              <td>O</td>
              <td className="pass">Pass</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Marks;