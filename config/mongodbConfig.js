import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// config dotenv
dotenv.config();
// MongoDB connection URI

// Function to connect to MongoDB
export async function connectToMongoDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log('MongoDB is connected.');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}