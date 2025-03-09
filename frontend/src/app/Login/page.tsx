"use client"

import { FaGoogle, FaApple } from "react-icons/fa6"
import { useState } from "react"


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <h1 className="text-4xl font-bold text-center mb-4">LOGIN/SIGNUP</h1>
            <button className="flex items-center justify-center gap-2 w-52 bg-gray-800 text-white py-2 px-4 rounded-md mb-4 hover:bg-gray-600 transition">
                Sign in with Google <FaGoogle/>
            </button>
            <button className="flex items-center justify-center gap-2 w-52 bg-gray-800 text-white py-2 px-4 rounded-md mb-4 hover:bg-gray-600 transition">
                Sign in with Apple <FaApple/>
            </button>

            <form className="w-full max-w-sm bg-slate-200 p-6 rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@email.com"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                        required/>
                </div>
                <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                        required/>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-600 transition">Login</button>
            </form>
        </section>
    )
}