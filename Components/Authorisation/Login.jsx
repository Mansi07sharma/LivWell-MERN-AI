import React from 'react'
import { useForm } from 'react-hook-form';
import { auth } from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
      const { register, handleSubmit, formState: { errors } } = useForm();
      const navigate=useNavigate()

      const onSubmit = async (data) => {
        try{
          await signInWithEmailAndPassword(auth,data.email,data.password);
          console.log("User logged in successfully")
          navigate('/')
        }catch(e){
          console.log(e)
        }
      }
  
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-5"
          >
            <h2 className="text-2xl font-bold text-center text-indigo-600">Login</h2>
    
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
              Login
            </button>
          </form>
        </div>
      );
    };

export default Login
