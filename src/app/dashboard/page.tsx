'use client';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/Button';
import React from 'react';

const mockProjects = [
  { id: 1, name: 'Inventory Management System', status: 'Completed' },
  { id: 2, name: 'E-Commerce App', status: 'In Progress' },
  { id: 3, name: 'CRM Dashboard', status: 'Pending' },
  { id: 4, name: 'Mobile Loan App', status: 'Completed' },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <Button onClick={() => signOut()} className="bg-red-500 hover:bg-red-600 text-white">
            Logout
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Total Projects</h2>
            <p className="text-3xl font-bold text-blue-600">{mockProjects.length}</p>
          </div>
          {/* Add more cards here if needed */}
        </div>

        {/* Project List */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Project List</h2>
          <ul className="divide-y divide-gray-200">
            {mockProjects.map((project) => (
              <li key={project.id} className="py-3 flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium text-gray-900">{project.name}</p>
                  <p className="text-sm text-gray-500">Status: {project.status}</p>
                </div>
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : project.status === 'In Progress'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {project.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
