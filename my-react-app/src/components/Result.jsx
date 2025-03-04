import { useState } from "react";
import { motion } from "framer-motion";
import "./css-style/Result.css";

const Results = () => {
  const [results] = useState([
    { subject: "Mathematics", score: 85, grade: "A" },
    { subject: "Science", score: 78, grade: "B" },
    { subject: "English", score: 92, grade: "A+" },
    { subject: "Social Studies", score: 74, grade: "B" },
    { subject: "Computer Science", score: 88, grade: "A" },
  ]);

  return (
    <motion.div
      className="results-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="results-title">Student Progress</h2>
      <table className="results-table">
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
    </motion.div>
  );
};

export default Results;
