import React, { useState, useEffect } from "react";
import styles from "./css-style/ExamPage.module.css";

const ExamPage = ({ studentName = "Student", classLevel = "Class 1" }) => {
  const [timer, setTimer] = useState(300); // 5 minutes
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const date = new Date().toLocaleString();

  const questions = [
    {id: 1,
        question: "Which letter comes after 'C'?",
        options: ["B", "D", "E", "A"],
        correctAnswer: "D"
      },
      {id: 2,
        question: "Which is a vowel?",
        options: ["B", "C", "A", "D"],
        correctAnswer: "A"
      },
    {
      id: 3,
      question: "What is 2 + 2?",
      options: ["1", "2", "4", "5"],
      correct: "4",
    },
    {
      id: 4,
      question: "What color is the sky?",
      options: ["Red", "Blue", "Green", "Black"],
      correct: "Blue",
    },

    // Add more MCQs here...
  ];

  useEffect(() => {
    if (timer > 0 && !submitted) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !submitted) {
      handleSubmit();
    }
  }, [timer]);

  const handleAnswerChange = (qid, selected) => {
    setAnswers({ ...answers, [qid]: selected });
  };

  const handleSubmit = () => {
    setSubmitted(true);

    const score = questions.reduce((acc, q) => {
      return acc + (answers[q.id] === q.correct ? 1 : 0);
    }, 0);

    // Save to MongoDB via backend API (optional)
    fetch("http://localhost:5000/api/save-exam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: studentName,
        classLevel,
        date,
        score,
        total: questions.length,
        answers,
      }),
    });

    alert(`Exam submitted! You scored ${score}/${questions.length}`);
  };

  return (
    <div className={styles.examContainer}>
      <div className={styles.header}>
        <h1>📚 Exam Time</h1>
        <p>👦 {studentName} | 🏫 {classLevel} | 📅 {date}</p>
        <p className={styles.timer}>⏳ {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</p>
      </div>

      {questions.map((q) => (
        <div key={q.id} className={styles.questionBox}>
          <h3>{q.id}. {q.question}</h3>
          <div className={styles.options}>
            {q.options.map((opt, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name={`q${q.id}`}
                  value={opt}
                  disabled={submitted}
                  onChange={() => handleAnswerChange(q.id, opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}

      {!submitted && (
        <button className={styles.submitBtn} onClick={handleSubmit}>Submit Exam</button>
      )}
      {submitted && (
        <div className={styles.resultBox}>
          <h2>Exam Submitted!</h2>
          <p>Your score: {questions.reduce((acc, q) => acc + (answers[q.id] === q.correct ? 1 : 0), 0)}/{questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default ExamPage;
