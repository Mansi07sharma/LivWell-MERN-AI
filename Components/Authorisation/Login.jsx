import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { auth } from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
      console.log("User logged in successfully");
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center p-4">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl font-semibold text-white">Loading...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center text-indigo-600">Login</h2>
          <div>
            <input type="email" placeholder="Email"
              {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" } })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <input type="password" placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
            Login
          </button>
          <div className="text-center">
            <p className="text-gray-400 text-sm">OR</p>
            <button
              type="button"
              className="mt-3 w-full bg-red-500 text-white py-3 rounded-full hover:bg-red-600 transition duration-300"
            >Continue with Google
            </button>
          </div>
        </form>
      )}
    </div>
  );
};



export default Login;