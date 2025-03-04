import { useState } from "react";
import { motion } from "framer-motion";
import "./css-style/Help.css";

const Help = () => {
  const [faqs] = useState([
    { question: "How do I enroll in a course?", answer: "Go to the 'Courses' section, select a course, and click 'Enroll'." },
    { question: "Can I track my progress?", answer: "Yes, visit the 'Results' section to see your academic performance." },
    { question: "How do I reset my password?", answer: "Click 'Forgot Password' on the login page and follow the instructions." },
    { question: "How can I contact support?", answer: "You can email us at support@eschoolhub.com or call our helpline." },
  ]);

  return (
    <motion.div
      className="help-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="help-title">FAQs & Support</h2>
      <div className="help-list">
        {faqs.map((faq, index) => (
          <motion.div key={index} className="help-item" whileHover={{ scale: 1.05 }}>
            <h3 className="help-question">{faq.question}</h3>
            <p className="help-answer">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Help;
