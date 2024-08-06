<<<<<<< HEAD
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
=======
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
// config dotenv
dotenv.config();
// MongoDB connection URI
const uri = 'mongodb://localhost:27017/Easily-Database';
let client;
>>>>>>> af0fa2b72e37a6ed24da6e2d1227b4e65e102b9f

// Function to connect to MongoDB
export async function connectToMongoDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log('MongoDB is connected.');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}