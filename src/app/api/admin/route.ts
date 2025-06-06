import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  const existing = await Admin.findOne({ email });
  if (existing) return NextResponse.json({ message: 'Admin exists' }, { status: 400 });

  const hashed = await bcrypt.hash(password, 10);
  const newAdmin = new Admin({ email, password: hashed });
  await newAdmin.save();

  return NextResponse.json({ message: 'Admin created' }, { status: 201 });
}
