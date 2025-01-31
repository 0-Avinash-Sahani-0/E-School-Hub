import React, { useState } from 'react';
import './css-style/Academic.css';

const Courses = () => {
    const [grade, setGrade] = useState('Jr'); // Default grade selection
    const courses = {
        Jr: ['Alphabet', 'Numbers', 'Rhymes'],
        1: ['Basic Math', 'English Grammar', 'EVS'],
        2: ['Math Fundamentals', 'Story Writing', 'General Science'],
        3: ['Advanced Math', 'Creative Writing', 'Social Studies'],
        4: ['Fractions', 'Reading Comprehension', 'Geography'],
        5: ['Geometry', 'Essay Writing', 'Physics Basics'],
    };

    const handleEnroll = (course) => {
        alert(`You have enrolled in ${course}!`);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">E School Hub</div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#results">Results</a></li>
                    <li><a href="#store">Store</a></li>
                    <li><a href="#help">Help</a></li>
                </ul>
            </nav>

            {/* Academic Courses Section */}
            <div className="courses-page" id="courses">
                <h1>Explore Academic Courses</h1>
                <p className="description">
                    Select your grade and start learning with fun and engaging materials designed for kids.
                </p>

                <div className="grade-selector">
                    <label>Select Grade: </label>
                    <select value={grade} onChange={(e) => setGrade(e.target.value)}>
                        {Object.keys(courses).map((g) => (
                            <option key={g} value={g}>
                                {g === 'Jr' ? 'Jr. Kindergarten' : `Grade ${g}`}
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

export default Courses;
