import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// 🔹 Hardcoded Admin User (For Now)
const ADMIN_EMAIL = "admin@example.com"; // Change to your email
const ADMIN_PASSWORD = "Admin@123"; // Change to your password

// Ensure the admin user exists in MongoDB
const ensureAdminUser = async () => {
    const existingAdmin = await User.findOne({ email: ADMIN_EMAIL });
    if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
        const adminUser = new User({
            name: "Admin",
            email: ADMIN_EMAIL,
            password: hashedPassword,
            number: "1234567890"
        });
        await adminUser.save();
        console.log("Admin user created!");
    }
};
ensureAdminUser();

// 🔹 Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'Invalid Email' });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid Password' });

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });

        // Send token on success
        res.status(200).json({ token, message: 'Login successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Login failed' });
    }
});

export default router;
