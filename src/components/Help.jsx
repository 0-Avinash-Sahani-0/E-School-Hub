import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaComments, FaTimes, FaTrash } from "react-icons/fa";
import styles from "./css-style/Help.module.css"; // Ensure the styles are correct

const Help = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Hi there! How can I assist you today?" },
  ]);

  const [faqs] = useState([
    { question: "How do I enroll in a course?", answer: "Go to the 'Courses' section, select a course, and click 'Enroll'." },
    { question: "Can I track my progress?", answer: "Yes, visit the 'Results' section to see your academic performance." },
    { question: "How do I reset my password?", answer: "Click 'Forgot Password' on the login page and follow the instructions." },
    { question: "How can I contact support?", answer: "You can email us at support@eschoolhub.com or call our helpline." },
  ]);

  const [feedback, setFeedback] = useState({ name: "", email: "", message: "" });

  const toggleChat = () => setChatVisible(!chatVisible);
  const clearChat = () => setChatMessages([{ sender: "bot", text: "Hi there! How can I assist you today?" }]);

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      const userMsg = { sender: "user", text: chatInput };
      setChatMessages((prev) => [...prev, userMsg]);
      const question = chatInput;
      setChatInput("");

      try {
        const response = await axios.post("http://localhost:8080/api/chat/ask", {
          message: question,
        });

        const botText = response.data.reply;
        setChatMessages((prev) => [...prev, { sender: "bot", text: botText }]);
      } catch (error) {
        console.error("Chatbot API error:", error);
        setChatMessages((prev) => [...prev, { sender: "bot", text: "Oops! Something went wrong with the chatbot." }]);
      }
    }
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/feedback", feedback);
      alert("Feedback submitted successfully!");
      setFeedback({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Feedback submission error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div className={styles.helpContainer} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2 className={styles.helpTitle}>FAQs & Support</h2>

      <div className={styles.helpList}>
        {faqs.map((faq, index) => (
          <motion.div key={index} className={styles.helpItem} whileHover={{ scale: 1.05 }}>
            <h3 className={styles.helpQuestion}>{faq.question}</h3>
            <p className={styles.helpAnswer}>{faq.answer}</p>
          </motion.div>
        ))}
      </div>

      {/* Chat Icon / Toggle */}
      <div className={styles.chatIcon} onClick={toggleChat}>
        {chatVisible ? <FaTimes title="Close Chat" /> : <FaComments title="Open Chat" />}
      </div>

      {/* Chatbot Panel */}
      {chatVisible && (
        <motion.div className={styles.chatPanel} initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: 300 }}>
          <div className={styles.chatHeader}>
            <h4>AI Assistant</h4>
            <button className={styles.clearBtn} onClick={clearChat}><FaTrash /></button>
          </div>
          <div className={styles.chatWindow}>
            {chatMessages.map((msg, index) => (
              <div key={index} className={`${styles.chatMessage} ${msg.sender === "user" ? styles.userMsg : styles.botMsg}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className={styles.chatForm}>
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask your question..."
              className={styles.chatInput}
            />
            <button type="submit" className={styles.chatBtn}>Send</button>
          </form>
        </motion.div>
      )}

      {/* Feedback Form */}
      <div className={styles.feedback}>
        <h3>Feedback & Complaints</h3>
        <form className={styles.feedbackForm} onSubmit={handleFeedbackSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className={styles.inputField}
            required
            value={feedback.name}
            onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.inputField}
            required
            value={feedback.email}
            onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
          />
          <textarea
            placeholder="Your Feedback / Complaint"
            className={styles.textArea}
            required
            value={feedback.message}
            onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
          />
          <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Help;
