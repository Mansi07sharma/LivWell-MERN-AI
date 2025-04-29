import React, { useState } from 'react';
import Chatbot from './Chatbot/Chatbot';

function Footer() {
    const [showChatbot, setShowChatbot] = useState(false);

    const toggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };
    return (
        <div>
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <a href="#" className="flex items-center mb-4">
                                <span className="text-2xl font-['Pacifico'] text-white">LivWell</span>
                            </a>
                            <p className="text-gray-400 mb-4">
                                Find your perfect home with our AI-powered rental platform.
                                Search, connect, and move in with ease.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition">
                                    <i className="ri-facebook-fill"></i>
                                </a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition">
                                    <i className="ri-twitter-x-fill"></i>
                                </a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition">
                                    <i className="ri-instagram-fill"></i>
                                </a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition">
                                    <i className="ri-linkedin-fill"></i>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition">Rent</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition">Post Property</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition">Wishlist</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition">About Us</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition">Help Center</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition">FAQ</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                            <p className="text-gray-400 mb-4">
                                Stay updated with the latest properties and features.
                            </p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-gray-800 border-none outline-none rounded-l px-4 py-2 w-full text-sm"
                                />
                                <button className="bg-violet-600 text-white px-4 py-2 rounded-r whitespace-nowrap hover:bg-violet-700/90 transition">
                                    Subscribe
                                </button>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-sm font-medium mb-2">Payment Methods</h4>
                                <div className="flex space-x-3">
                                    <div className="w-8 h-8 flex items-center justify-center text-gray-400">
                                        <i className="ri-visa-fill text-xl"></i>
                                    </div>
                                    <div className="w-8 h-8 flex items-center justify-center text-gray-400">
                                        <i className="ri-mastercard-fill text-xl"></i>
                                    </div>
                                    <div className="w-8 h-8 flex items-center justify-center text-gray-400">
                                        <i className="ri-paypal-fill text-xl"></i>
                                    </div>
                                    <div className="w-8 h-8 flex items-center justify-center text-gray-400">
                                        <i className="ri-apple-fill text-xl"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 LivWell. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm mt-2 md:mt-0">
                            Designed with ❤️ for comfortable living
                        </p>
                    </div>
                </div>
            </footer>
            {/* Voice Assistant Button */}
            {showChatbot && (
                <div className="fixed bottom-24 right-6 z-50">
                    <Chatbot />
                </div>
            )}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={toggleChatbot}
                    className="w-14 h-14 bg-violet-700 rounded-full shadow-lg flex items-center justify-center text-white livi-pulse"
                >
                    <i className="ri-robot-2-line text-xl"></i>
                </button>
            </div>

            {/* {chatbot&&<Chatbot/>} */}
        </div >
    );
}

export default Footer;
