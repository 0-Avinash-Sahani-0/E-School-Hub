import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js'; // Import auth routes

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// 🔹 Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/eschoolhub')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// 🔹 Use authentication routes
app.use('/api/auth', authRoutes);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
