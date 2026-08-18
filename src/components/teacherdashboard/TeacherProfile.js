import React, { useEffect, useState } from 'react'
import '../../styles/studentdashboardstyles/StudentProfile.css'

const TeacherProfile = () => {
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token')

        fetch('http://127.0.0.1:8000/teacher_profile', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setProfile(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div className="student-profile-page">
            {profile && (
                <div className="student-profile-card">

                    <div className="student-profile-cover"></div>

                    <div className="student-profile-avatar">
                        {profile.name?.charAt(0)}
                    </div>

                    <div className="student-profile-header">
                        <h2>{profile.name}</h2>
                        <p>{profile.email}</p>
                    </div>

                    <div className="student-profile-divider"></div>

                    <div className="student-profile-details">

                        <div className="student-profile-row">
                            <span>Teacher ID :</span>
                            <strong>{profile.teacher_id}</strong>
                        </div>

                        <div className="student-profile-row">
                            <span>Subject:</span>
                            <strong>{profile.subject}</strong>
                        </div>

                        <div className="student-profile-row">
                            <span>Phone :</span>
                            <strong>{profile.phone}</strong>
                        </div>

                        <div className="student-profile-row">
                            <span>Qualification :</span>
                            <strong>{profile.qualification}</strong>
                        </div>

                        <div className="student-profile-row">
                            <span>Gender :</span>
                            <strong>{profile.gender}</strong>
                        </div>

                        <div className="student-profile-row">
                            <span>Address :</span>
                            <strong>{profile.address}</strong>
                        </div>

                    </div>

                    <button className="student-profile-edit">
                        Edit Profile
                    </button>

                </div>
            )}
        </div>
    )
}

export default TeacherProfile