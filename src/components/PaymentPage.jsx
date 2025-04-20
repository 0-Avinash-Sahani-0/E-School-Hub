import { useState } from "react";
import styles from "./css-style/PaymentPage.module.css";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [method, setMethod] = useState("");
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  const handleDetailChange = (field, value) => {
    setDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handlePayment = () => {
    if (!method) return alert("Please select a payment method");

    // Simple validation
    if (method === "UPI" && !details.upi) return alert("Enter UPI ID");
    if ((method === "Credit Card" || method === "Debit Card") &&
        (!details.cardNumber || !details.expiry || !details.cvv)) {
      return alert("Enter complete card details");
    }

    alert(`Payment successful via ${method}`);
    navigate("/store");
  };

  return (
    <div className={styles.paymentContainer}>
      <h2>Select Payment Method</h2>
      <div className={styles.methodList}>
        {["UPI", "Credit Card", "Debit Card", "Cash on Delivery"].map((m) => (
          <label key={m}>
            <input
              type="radio"
              name="payment"
              value={m}
              onChange={(e) => setMethod(e.target.value)}
              checked={method === m}
            />{" "}
            {m}
          </label>
        ))}
      </div>

      {/* Conditional Inputs */}
      <div className={styles.paymentDetails}>
        {method === "UPI" && (
          <input
            type="text"
            placeholder="Enter your UPI ID"
            value={details.upi || ""}
            onChange={(e) => handleDetailChange("upi", e.target.value)}
            className={styles.inputField}
          />
        )}
        {(method === "Credit Card" || method === "Debit Card") && (
          <div className={styles.cardForm}>
            <input
              type="text"
              placeholder="Card Number"
              value={details.cardNumber || ""}
              onChange={(e) => handleDetailChange("cardNumber", e.target.value)}
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={details.expiry || ""}
              onChange={(e) => handleDetailChange("expiry", e.target.value)}
              className={styles.inputField}
            />
            <input
              type="password"
              placeholder="CVV"
              value={details.cvv || ""}
              onChange={(e) => handleDetailChange("cvv", e.target.value)}
              className={styles.inputField}
            />
          </div>
        )}
        {method === "Cash on Delivery" && (
          <p className={styles.codNote}>You will pay in cash upon delivery.</p>
        )}
      </div>

      <button className={styles.payButton} onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
