import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css-style/Login.module.css";
import logo from './images_icons/kindergarten.png';

const Login = () => {
    const [loginID, setLoginID] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(""); // For the dialog box
    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: loginID, password }),
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem("token", data.token);
            navigate("/Academic");
        } else {
            alert("Login failed: " + data.error);
        }
    };

    const handleForgotPassword = async () => {
        setOpenDialog(true); // Open the dialog box
    };

    const handleSendVerification = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
    
            const data = await response.json();
            alert("Verification email sent!");
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to send verification email.");
        }
    };
    

    return (
        <div className={styles.loginContainer}>
            <div className={styles.infoBox}>
                <img src={logo} alt="E School Hub Logo" className={styles.logo} />
                <h1>Welcome Back!</h1>
                <p className={styles.quote}>“Every day is a fresh start to learn something new.”</p>
            </div>
            <form className={styles.loginForm} onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Email"
                    className={styles.loginInput}
                    value={loginID}
                    onChange={(e) => setLoginID(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className={styles.loginInput}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className={styles.loginButton}>Login</button>
                <button
                    type="button"
                    className={styles.forgotBtn}
                    onClick={handleForgotPassword}
                >
                    Forgot Password?
                </button>
            </form>

            {/* Dialog box */}
            {openDialog && (
                <div className={styles.dialog}>
                    <h2>Forgot Password</h2>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className={styles.dialogInput}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button onClick={handleSendVerification} className={styles.dialogButton}>
                        Send Verification
                    </button>
                    <button onClick={() => setOpenDialog(false)} className={styles.dialogButton}>
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
};

export default Login;
