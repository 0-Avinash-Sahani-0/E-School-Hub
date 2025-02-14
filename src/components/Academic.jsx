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
        4: ["Fractions", "Reading Comprehension", "Geography", "Science Experiments", "Logical Reasoning"],
        5: ["Geometry", "Essay Writing", "Physics Basics", "Coding Fundamentals", "Astronomy"],
    };

    const handleEnroll = (course) => {
        console.log(`Enrolled in: ${course}`);
        alert(`You have enrolled in ${course}!`);
    };

    return (
        <>
            <div className="courses-page">
                <h1>Explore Academic Courses</h1>
                <p className="description">
                    Select your grade and start learning with fun and engaging materials designed for kids.
                </p>

                {/* Grade Selector */}
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

                {/* Course List */}
                <div className="course-list">
                    {courses[grade].map((course, index) => (
                        <div key={index} className="course-card">
                            <img src={`./images/${course.replace(/\s+/g, "").toLowerCase()}.jpg`} alt={course} className="course-img"/>
                            <h3>{course}</h3>
                            <button onClick={() => handleEnroll(course)}>Enroll</button>
                        </div>
                    ))}
                </div>

                {/* Additional Learning Resources */}
                <div className="learning-section">
                    <h2>Enhance Your Learning</h2>
                    <p>Explore additional resources, quizzes, and interactive activities to make learning fun!</p>
                    <img src="./images/learning.png" alt="Learning Resources" className="learning-img"/>
                </div>
            </div>

            
           
        </>
    );
};

export default Academic;
