// Register.js
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './css-style/Register.module.css';
import logo from './images_icons/kindergarten.png';

const Register = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '', number: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(form); // Debugging line to check form data
            const res = await axios.post('http://localhost:8080/api/auth/register', form);
            alert(res.data.message); // Success popup
            navigate('/login');
        } catch (err) {
            alert(err.response?.data?.error || 'Registration failed');
        }
    };

    return (
        <div className={styles.registerContainer}>
            <div className={styles.infoBox}>
                <img src={logo} alt="E School Hub" className={styles.logo} />
                <h1>Welcome to E School Hub!</h1>
                <p className={styles.quote}>“Learning today for a better tomorrow.”</p>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={styles.inputField}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={styles.inputField}
                    required
                />
                <input
                    type="text"
                    placeholder="Mobile Number"
                    value={form.number}
                    onChange={(e) => setForm({ ...form, number: e.target.value })}
                    className={styles.inputField}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className={styles.inputField}
                    required
                />
                <button type="submit" className={styles.button}>Register</button>
                <button 
                    type="button" 
                    className={styles.loginBtn} 
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Register;
