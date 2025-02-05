import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./css-style/Academic.css";

const Academic = () => {
    const [grade, setGrade] = useState("Jr"); // Default grade selection
    const navigate = useNavigate();

    // Check if user is logged in
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login"); // Redirect if not logged in
        }
    }, [navigate]);

    const courses = {
        Jr: ["Alphabet", "Numbers", "Rhymes"],
        1: ["Basic Math", "English Grammar", "EVS"],
        2: ["Math Fundamentals", "Story Writing", "General Science"],
        3: ["Advanced Math", "Creative Writing", "Social Studies"],
        4: ["Fractions", "Reading Comprehension", "Geography"],
        5: ["Geometry", "Essay Writing", "Physics Basics"],
    };

    const handleEnroll = (course) => {
        console.log(`Enrolled in: ${course}`);
        alert(`You have enrolled in ${course}!`);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">E School Hub</div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/academic">Courses</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/results">Results</Link></li>
                    <li><Link to="/store">Store</Link></li>
                    <li><Link to="/help">Help</Link></li>
                </ul>
            </nav>

            {/* Academic Courses Section */}
            <div className="courses-page">
                <h1>Explore Academic Courses</h1>
                <p className="description">
                    Select your grade and start learning with fun and engaging materials designed for kids.
                </p>

                <div className="grade-selector">
                    <label htmlFor="grade">Select Grade: </label>
                    <select id="grade" value={grade} onChange={(e) => setGrade(e.target.value)}>
                        {Object.keys(courses).map((g) => (
                            <option key={g} value={g}>
                                {g === "Jr" ? "Jr. Kindergarten" : `Grade ${g}`}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="course-list">
                    {courses[grade].map((course, index) => (
                        <div key={index} className="course-card">
                            <h3>{course}</h3>
                            <button onClick={() => handleEnroll(course)}>Enroll</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>© 2025 E School Hub. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Academic;
