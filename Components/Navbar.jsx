import React from 'react'

function Navbar() {
    return (
        <div>
            <header class="sticky top-0 z-50 bg-white shadow-sm">
                <div
                    class="container mx-auto px-4 py-3 flex items-center justify-between">
                    <a href="#" class="flex items-center">
                        <span class="text-2xl font-['Pacifico'] text-purple-700">LivWell</span>
                    </a>

                    <nav class="hidden md:flex items-center space-x-8">
                        <a href="#" class="text-gray-900 font-medium hover:text-primary transition">Home</a>
                        <a href="#" class="text-gray-600 hover:text-primary transition">Rent</a>
                        <a href="#" class="text-gray-600 hover:text-primary transition">Post Property</a>
                        <a href="#" class="text-gray-600 hover:text-primary transition">Wishlist</a>
                    </nav>

                    <div class="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
                        <div class="w-5 h-5 flex items-center justify-center text-gray-500">
                            <i class="ri-search-line"></i>
                        </div>
                        <input
                            type="text"
                            placeholder="Search for properties..."
                            class="bg-transparent border-none outline-none px-3 w-full text-sm" />
                        <button
                            class="w-8 h-8 flex items-center justify-center bg-purple-700 rounded-full text-white animate-pulse">
                            <i class="ri-mic-line"></i>
                        </button>
                    </div>

                    <div class="flex items-center space-x-4">
                        <button class="hidden md:block text-gray-700 hover:text-primary transition">
                            Login
                        </button>
                        <button class="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-lg whitespace-nowrap hover:bg-primary/90 transition">
                            Sign Up
                        </button>
                        <button class="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full md:hidden">
                            <i class="ri-menu-line text-gray-700"></i>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
