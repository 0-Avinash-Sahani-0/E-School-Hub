import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./css-style/Result.module.css";

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchedResults = [
      { subject: "Mathematics", score: 85, grade: "A" },
      { subject: "Science", score: 78, grade: "B" },
      { subject: "English", score: 92, grade: "A+" },
      { subject: "Social Studies", score: 74, grade: "B" },
      { subject: "Computer Science", score: 88, grade: "A" },
    ];
    setResults(fetchedResults);
  }, []);

  const average =
    results.reduce((acc, r) => acc + r.score, 0) / results.length || 0;

  const colors = {
    A: "#4caf50",
    "A+": "#2196f3",
    B: "#ff9800",
  };

  return (
    <motion.div
      className={styles.dashboard}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.profileCard}>
        <div className={styles.profilePic}>
          👦
        </div>
        <div>
          <h2>Aman Gupta</h2>
          <p>Class: 5th Standard</p>
          <p>Total Subjects: {results.length}</p>
          <p>Average Score: {average.toFixed(2)}%</p>
        </div>
      </div>

      <div className={styles.chartArea}>
        {results.map((res, idx) => (
          <motion.div
            key={idx}
            className={styles.chartBar}
            initial={{ width: 0 }}
            animate={{ width: `${res.score}%` }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            style={{ backgroundColor: colors[res.grade] }}
          >
            <span className={styles.label}>
              {res.subject}: {res.score}% ({res.grade})
            </span>
          </motion.div>
        ))}
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.resultsTable}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Score</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.subject}</td>
                <td>{result.score}%</td>
                <td>{result.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Results;
