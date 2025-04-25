import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <header className="sticky top-0 z-50 bg-white shadow-sm">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <a href="#" className="flex items-center">
                        <span className="text-2xl font-['Pacifico'] text-purple-700">LivWell</span>
                    </a>

                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-900 font-medium hover:text-primary transition">Home</a>
                        <a href="#" className="text-gray-600 hover:text-primary transition">Rent</a>
                        <a href="#" className="text-gray-600 hover:text-primary transition">Post Property</a>
                        <a href="#" className="text-gray-600 hover:text-primary transition">Wishlist</a>
                    </nav>

                    <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
                        <div className="w-5 h-5 flex items-center justify-center text-gray-500">
                            <i className="ri-search-line"></i>
                        </div>
                        <input
                            type="text"
                            placeholder="Search for properties..."
                            className="bg-transparent border-none outline-none px-3 w-full text-sm"
                        />
                        <button
                            className="w-9 h-8 flex items-center justify-center bg-purple-700 rounded-full text-white livi-pulse"
                        >
                            <i className="ri-mic-line"></i>
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="hidden md:block text-gray-700 hover:text-primary transition">
                            Login
                        </button>
                        <button className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-lg whitespace-nowrap hover:bg-primary/90 transition">
                            Sign Up
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full md:hidden">
                            <i className="ri-menu-line text-gray-700"></i>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
