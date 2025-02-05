import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loginID, setLoginID] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: loginID, password }),
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem("token", data.token); // Store token
            navigate("/Academic"); // Redirect to Academic page
        } else {
            alert("Login failed: " + data.error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Email"
                    value={loginID}
                    onChange={(e) => setLoginID(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
