import React, { useEffect, useState } from "react";
import "../../styles/studentdashboardstyles/Attendance.css";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:8000/attendance/my_attendance", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAttendance(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="student-attendance-page">
      <div className="attendance-cards">
        {attendance.map((item) => (
          <div className="attendance-card" key={item.id}>
            <h2>Attendance Details</h2>

            <div className="student-info">
              <p>
                <strong>Student ID:</strong>
                <span>{item.student_id}</span>
              </p>

              <p>
                <strong>Name:</strong>
                <span>{item.name}</span>
              </p>
            </div>

            <div className="attendance-details">
              <div className="attendance-box">
                <h3>Total Classes</h3>
                <p>{item.total_classes}</p>
              </div>

              <div className="attendance-box present">
                <h3>Present</h3>
                <p>{item.present}</p>
              </div>

              <div className="attendance-box absent">
                <h3>Absent</h3>
                <p>{item.absent}</p>
              </div>

              <div className="attendance-box percentage">
                <h3>Percentage</h3>
                <p>{item.percentage}%</p>
              </div>
            </div>

            <div className="attendance-chart">
              <h3>Attendance Overview</h3>

              <PieChart width={300} height={300}>
                <Pie
                  data={[
                    {
                      name: "Present",
                      value: item.present,
                    },
                    {
                      name: "Absent",
                      value: item.absent,
                    }
                    // {
                    //   name: "Total Classes",
                    //   value: item.total_classes,
                    // },
                    // {
                    //   name: "Percentage",
                    //   value: item.percentage,
                    // },
                  ]}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  <Cell fill="#22c55e" />
                  <Cell fill="#ef4444" />
                  <Cell fill="blue" />
                  <Cell fill="violet" />
                </Pie>

                <Tooltip />

                <Legend />
              </PieChart>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
