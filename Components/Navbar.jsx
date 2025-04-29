import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Authorisation/AuthContext';

import { useNavigate } from 'react-router-dom';

function Navbar() {
    const { currentUser, logout } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout()
            console.log('Logout successful')
        } catch (error) {
            console.error('Error logging out:', error)
        }
    }


    return (
        <div>
            <header className="sticky top-0 z-50 bg-white shadow-sm">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <NavLink to="/" className="flex items-center">
                        <span className="text-2xl font-['Pacifico'] text-purple-700">LivWell</span>
                    </NavLink>

                    <nav className="hidden md:flex items-center space-x-8">
                        <NavLink to="/" className={({ isActive }) =>
                            isActive
                                ? "text-black font-semibold transition"
                                : "text-gray-600 hover:text-primary transition"
                        }>Home</NavLink>
                        <NavLink to="/rent/:id" className={({ isActive }) =>
                            isActive
                                ? "text-black font-semibold transition"
                                : "text-gray-600 hover:text-primary transition"
                        }>Rent</NavLink>
                        <NavLink to="/post-property" className={({ isActive }) =>
                            isActive
                                ? "text-black font-semibold transition"
                                : "text-gray-600 hover:text-primary transition"
                        }>Post Property</NavLink>
                        <NavLink to="/whishlist" className={({ isActive }) =>
                            isActive
                                ? "text-black font-semibold transition"
                                : "text-gray-600 hover:text-primary transition"
                        }>Wishlist</NavLink>
                        {currentUser && (
                            <div className="relative group">
                                <button className="text-gray-600 hover:text-primary transition focus:outline-none">
                                    My Account
                                </button>
                                <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all bg-white shadow-md rounded-md mt-2 min-w-[160px] z-50">
                                    <NavLink
                                        to="/my-rented-properties"
                                        className={({ isActive }) =>
                                            isActive
                                              ? "block px-4 py-2 text-black font-semibold bg-gray-100"
                                              : "block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                          }
                                    >
                                        My Purchases
                                    </NavLink>
                                    <NavLink
                                        to="/my-posted-properties"
                                        className={({ isActive }) =>
                                            isActive
                                              ? "block px-4 py-2 text-black font-semibold bg-gray-100"
                                              : "block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                          }
                                    >
                                        My Property
                                    </NavLink>
                                </div>
                            </div>
                        )}

                        {/* {(currentUser && <NavLink to="/my-rented-properties" className="text-gray-600 hover:text-primary transition">My Purchases</NavLink>)} */}
                    </nav>
                    <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
                        <div className="w-5 h-5 flex items-center justify-center text-gray-500">
                            <i className="ri-search-line"></i>
                        </div>
                        <div className='flex items-center justify-between w-full pr-2'>
                            <input
                                type="text"
                                placeholder="Search for properties..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent border-none outline-none px-3 w-full text-sm"
                            />
                            <button
                                onClick={() => {
                                    if (searchQuery.trim()) {
                                        navigate(`/search?query=${searchQuery}`);
                                    }
                                }}
                                className="w-9 h-8 flex items-center justify-center bg-purple-700 rounded-full text-white hover:bg-purple-800 transition"
                            >
                                <i className="ri-search-line"></i>
                            </button>
                        </div>
                        <button
                            className="w-9 h-8 flex items-center justify-center bg-purple-700 rounded-full text-white livi-pulse"
                        >
                            <i className="ri-mic-line"></i>
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        {!currentUser ? (
                            <>
                                <NavLink to={'/login'} className="hidden md:block text-gray-700 hover:text-black transition">
                                    Login
                                </NavLink>
                                <NavLink to={'/signup'} className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-lg whitespace-nowrap hover:bg-primary/90 transition">
                                    Sign Up
                                </NavLink>
                                <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full md:hidden">
                                    <i className="ri-menu-line text-gray-700"></i>
                                </button>
                            </>
                        ) : (
                            <div className="flex items-center gap-4">
                                <img src="https://t4.ftcdn.net/jpg/08/23/95/89/360_F_823958944_1c9covIC7Tl7eyJtWoTiXc0L4vP6f43q.jpg" alt="User Logo" className="w-10 h-10 rounded-full object-cover" />
                                <span className="text-gray-700 font-semibold">
                                    {currentUser.displayName}
                                </span>
                                <button onClick={() => handleLogout()}
                                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                                >
                                    Logout
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
