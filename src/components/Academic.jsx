import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css-style/Academic.module.css";
import { FaClipboardList, FaRegStickyNote, FaTimes, FaTrashAlt } from "react-icons/fa";
import logo from "./images_icons/kindergarten.png";

const Academic = () => {
  const navigate = useNavigate();
  const [grade, setGrade] = useState("Jr");
  const [subject, setSubject] = useState("");
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [videoList, setVideoList] = useState([]);
  const [notes, setNotes] = useState(localStorage.getItem("notes") || "");
  const [showNotes, setShowNotes] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  const courses = {
    Jr: ["Alphabet", "Numbers", "Rhymes"],
    1: ["BasicMath", "EnglishGrammar", "EVS"],
    2: ["MathFundamentals", "StoryWriting", "GeneralScience"],
    3: ["AdvancedMath", "CreativeWriting", "SocialStudies"],
    4: ["Fractions", "ReadingComprehension", "Geography", "ScienceExperiments", "LogicalReasoning"],
    5: ["Geometry", "EssayWriting", "PhysicsBasics", "CodingFundamentals", "Astronomy"]
  };

  useEffect(() => {
    if (subject) {
      const list = [1, 2, 3].map((num) => `/videos/${grade}/${subject}${num}.mp4`);
      setVideoList(list);
      setSelectedVideoIndex(0);
    }
  }, [subject, grade]);

  const handlePlay = () => videoRef.current?.play();
  const handlePause = () => videoRef.current?.pause();
  const handleForward = () => videoRef.current && (videoRef.current.currentTime += 10);
  const handleBackward = () => videoRef.current && (videoRef.current.currentTime -= 10);
  const handleNext = () => {
    if (selectedVideoIndex < videoList.length - 1) {
      setSelectedVideoIndex(selectedVideoIndex + 1);
    }
  };

  const handleTakeExam = () => {
    navigate("/exam", {
      state: {
        subject,
        grade,
        studentName: localStorage.getItem("studentName"),
        roll: localStorage.getItem("roll"),
        photo: localStorage.getItem("photo")
      }
    });
  };

  const handleClearNotes = () => setNotes("");

  useEffect(() => {
    localStorage.setItem("notes", notes);
  }, [notes]);

  return (
    <div className={styles.academicContainer}>
      <header className={styles.header}>
        <img src={logo} alt="E-School Hub Logo" className={styles.logo} />
        <h1 className={styles.siteTitle}>E-School Hub</h1>
        <button className={styles.notesToggleBtn} onClick={() => setShowNotes(!showNotes)}>
          <FaRegStickyNote /> {showNotes ? "Hide Notes" : "Open Notes"}
        </button>
      </header>

      <h2 className={styles.animatedTitle}>📚 Academic Section</h2>
      <p className={styles.introText}>Hello, <strong>Student</strong>! Ready to learn today?</p>

      <div className={styles.selectorRow}>
        <label>Select Class:</label>
        <select value={grade} onChange={(e) => { setGrade(e.target.value); setSubject(""); }}>
          {Object.keys(courses).map((g) => (
            <option key={g} value={g}>{g === "Jr" ? "Jr. Kindergarten" : `Class ${g}`}</option>
          ))}
        </select>
      </div>

      {grade && (
        <div className={styles.selectorRow}>
          <label>Select Subject:</label>
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="">--Select Subject--</option>
            {courses[grade].map((sub, i) => (
              <option key={i} value={sub}>{sub.replace(/([A-Z])/g, " $1").trim()}</option>
            ))}
          </select>
        </div>
      )}

      {subject && videoList.length > 0 && (
        <div className={styles.videoSection}>
          <h2>{subject.replace(/([A-Z])/g, " $1").trim()} - Video {selectedVideoIndex + 1}</h2>

          <video ref={videoRef} className={styles.videoPlayerSmall} controls>
            <source src={videoList[selectedVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className={styles.videoControls}>
            <button onClick={handlePlay}>▶️ Play</button>
            <button onClick={handlePause}>⏸️ Pause</button>
            <button onClick={handleForward}>⏩ Forward</button>
            <button onClick={handleBackward}>⏪ Backward</button>
            {selectedVideoIndex < videoList.length - 1 && (
              <button onClick={handleNext}>➡️ Next Video</button>
            )}
          </div>

          <div className={styles.iconsRow}>
            <button className={styles.examBtn} onClick={handleTakeExam}>
              <FaClipboardList /> Take Exam
            </button>
          </div>
        </div>
      )}

      {showNotes && (
        <div className={styles.notesPopup}>
          <div className={styles.notesHeader}>
            <span>📝 Notes</span>
            <div>
              <button onClick={handleClearNotes}><FaTrashAlt /></button>
              <button onClick={() => setShowNotes(false)}><FaTimes /></button>
            </div>
          </div>
          <textarea
            className={styles.notesArea}
            value={notes}
            placeholder="Write your notes here..."
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default Academic;
