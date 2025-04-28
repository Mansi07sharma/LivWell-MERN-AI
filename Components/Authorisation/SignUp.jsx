import React from 'react'
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        console.log(data)
        try {
            // only 2 params after auth
            await createUserWithEmailAndPassword(auth, data.email, data.password)
            const user = auth.currentUser;
            navigate('/')
            console.log(user)

            await updateProfile(user,{
                displayName: data.username
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-5"
            >
                <h2 className="text-2xl font-bold text-center text-indigo-600">Sign Up</h2>

                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        {...register("username", { required: "Username is required" })}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address"
                            }
                        })}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be at least 6 characters" }
                        })}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                >
                    Sign Up
                </button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-gray-500">OR</p>
                <button
                    className="mt-3 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition">
                    Continue with Google
                </button>
            </div>
        </div>
    );
}

export default Signup
