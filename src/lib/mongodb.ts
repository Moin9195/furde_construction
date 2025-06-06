// lib/mongodb.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI 
|| 'mongodb://localhost:27017/furde_group';

if (!MONGODB_URI) throw new Error('Please define MONGODB_URI in .env.local');

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(MONGODB_URI);
}
