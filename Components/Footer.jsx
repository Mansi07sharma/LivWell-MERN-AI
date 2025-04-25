import React from 'react'

function Footer() {
    return (
        <div>
            <footer class="bg-gray-900 text-white py-12">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <a href="#" class="flex items-center mb-4">
                                <span class="text-2xl font-['Pacifico'] text-white">LivWell</span>
                            </a>
                            <p class="text-gray-400 mb-4">
                                Find your perfect home with our AI-powered rental platform.
                                Search, connect, and move in with ease.
                            </p>
                            <div class="flex space-x-4">
                                <a href="#" class="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition">
                                    <i class="ri-facebook-fill"></i>
                                </a>
                                <a href="#" class="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition">
                                    <i class="ri-twitter-x-fill"></i>
                                </a>
                                <a href="#" class="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition">
                                    <i class="ri-instagram-fill"></i>
                                </a>
                                <a href="#" class="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition">
                                    <i class="ri-linkedin-fill"></i>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul class="space-y-2">
                                <li>
                                    <a href="#" class="text-gray-400 hover:text-white transition">Home</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400 hover:text-white transition"
                                    >Rent</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400 hover:text-white transition">Post Property</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400 hover:text-white transition">Wishlist</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400 hover:text-white transition">About Us</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold mb-4">Support</h3>
                            <ul class="space-y-2">
                                <li>
                                    <a href="#" class="text-gray-400 hover:text-white transition">Help Center</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400 hover:text-white transition">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400 hover:text-white transition">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400 hover:text-white transition">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400 hover:text-white transition">FAQ</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold mb-4">Subscribe</h3>
                            <p class="text-gray-400 mb-4">
                                Stay updated with the latest properties and features.
                            </p>
                            <div class="flex">
                                <input type="email" placeholder="Your email" class="bg-gray-800 border-none outline-none rounded-l px-4 py-2 w-full text-sm" />
                                <button
                                    class="bg-violet-600 text-white px-4 py-2 rounded-r whitespace-nowrap hover:bg-violet-700/90 transition">
                                    Subscribe
                                </button>
                            </div>
                            <div class="mt-4">
                                <h4 class="text-sm font-medium mb-2">Payment Methods</h4>
                                <div class="flex space-x-3">
                                    <div class="w-8 h-8 flex items-center justify-center text-gray-400">
                                        <i class="ri-visa-fill text-xl"></i>
                                    </div>
                                    <div class="w-8 h-8 flex items-center justify-center text-gray-400">
                                        <i class="ri-mastercard-fill text-xl"></i>
                                    </div>
                                    <div class="w-8 h-8 flex items-center justify-center text-gray-400">
                                        <i class="ri-paypal-fill text-xl"></i>
                                    </div>
                                    <div class="w-8 h-8 flex items-center justify-center text-gray-400">
                                        <i class="ri-apple-fill text-xl"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
                        <p class="text-gray-400 text-sm">
                            © 2025 LivWell. All rights reserved.
                        </p>
                        <p class="text-gray-400 text-sm mt-2 md:mt-0">
                            Designed with ❤️ for comfortable living
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
