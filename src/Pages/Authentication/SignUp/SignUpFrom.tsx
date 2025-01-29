import React, { useState } from 'react';
import { Button, Card, TextField } from '@mui/material';

export function SignUpForm() {
  interface AuthFormProps {
    onSubmit: (data: { email: string; password: string; fullName?: string }) => void;
  }

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // onSubmit(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Join for success ✨</h1>
          <p className="mt-2 text-gray-600">
            Are you ready to take the next step towards a successful future? Look no further!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-sm font-medium text-gray-700 text-left">
                Full name
              </label>
              <TextField
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="mt-1"
                placeholder="Enter your full name"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 text-left">
                Email
              </label>
              <TextField
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1"
                placeholder="Enter your email"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-medium text-gray-700 text-left">
                Password
              </label>
              <TextField
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="mt-1"
                placeholder="Enter your password"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            style={{ backgroundColor: '#3498db', color: '#ffffff', padding: '10px 20px', borderRadius: '10px', border: 'none', cursor: 'pointer' }}
          >
            Sign up
          </Button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <Button
            type="button"
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
            style={{ backgroundColor: '#e74c3c', color: '#ffffff', padding: '10px 20px', borderRadius: '10px', border: 'none', cursor: 'pointer' }}
            onClick={() => {/* Implement Google Sign up */}}
          >
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" />
            Sign up with Google
          </Button>

          <Button
            type="button"
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
            style={{ backgroundColor: '#2ecc71', color: '#ffffff', padding: '10px 20px', borderRadius: '10px', border: 'none', cursor: 'pointer' }}
            onClick={() => {/* Implement Facebook Sign up */}}
          >
            <img src="https://img.icons8.com/color/24/000000/facebook.png" alt="Facebook" />
            Sign up with Facebook
          </Button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-black hover:underline">
              Log in
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
}