'use client';

import React, {useState} from 'react';
import axiosInstance from '@/lib/clientAxios';
import Link from "next/link";

export default function RegisterPage() {
    const [form, setForm] = useState({username: '', email: '', password: ''});
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/api/auth/register', form);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Registration failed: ');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 mb-4">
                    Register
                </button>

                <Link href="/auth/login" className="text-blue-500">
                    I already have an account
                </Link>
                {message && <p className="mt-4 text-green-500">{message}</p>}
            </form>
        </div>
    );
}
