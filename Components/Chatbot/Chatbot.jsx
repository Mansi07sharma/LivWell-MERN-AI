import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { text: "👋 Hello! How can I assist you with LivWell today?", sender: "bot" },
    ]);
    const [userInput, setUserInput] = useState('');
    const [isSending, setIsSending] = useState(false);

    const messagesEndRef = useRef(null);

    // Scroll to bottom whenever messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const getBotResponse = (input) => {
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes('what is livwell')) {
            return "LivWell is a platform where you can find and rent modern homes with full details, images, and amenities.";
        } else if (lowerInput.includes('what does your website offer')) {
            return "We offer apartments, houses, condos – browse listings, read reviews, book tours, and contact owners.";
        } else if (lowerInput.includes('real time location')) {
            return "We integrate Google Maps API to show real-time property locations on our interactive map.";
        } else if (lowerInput.includes('how do i book a property')) {
            return "Sign up, explore listings, and click the 'Book Now' button to start the process.";
        } else if (lowerInput.includes('how do i contact the owner')) {
            return "Owner contact details are on each property page. Reach out directly anytime.";
        } else if (lowerInput.includes('how do i sign up')) {
            return "Click 'Sign Up' at the top right and fill your details to begin.";
        } else {
            return "🤔 I didn't get that. Could you rephrase or ask something else about LivWell?";
        }
    };

    const handleSendMessage = () => {
        if (userInput.trim() === '') return;

        setIsSending(true);
        const newMessages = [...messages, { text: userInput, sender: "user" }];
        setMessages(newMessages);

        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            setMessages([...newMessages, { text: botResponse, sender: "bot" }]);
            setUserInput('');
            setIsSending(false);
        }, 1000);
    };

    return (
        <div className="fixed bottom-5 left-5 w-[22rem] md:w-96 bg-white/30 backdrop-blur-md rounded-xl shadow-xl border border-gray-300 overflow-hidden flex flex-col z-50">
            {/* Header */}
            <div className="bg-purple-600 text-white text-center font-semibold py-2 rounded-t-xl shadow">
                LivWell Assistant
            </div>

            {/* Messages */}
            <div
                className="h-80 overflow-y-auto [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-thumb]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-gray-300 px-4 py-3 space-y-2 bg-[url('https://images.unsplash.com/photo-1533223928-029cf07ab3c4')] bg-cover bg-center scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-purple-100 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg rounded-lg"
            >
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`max-w-[85%] px-4 py-2 rounded-lg text-sm shadow
        ${message.sender === 'bot'
                                ? 'bg-white text-gray-800 self-start rounded-bl-none'
                                : 'bg-purple-600 text-white self-end rounded-br-none'}
        ${isSending && index === messages.length - 1 ? 'opacity-50' : ''}
      `}
                    >
                        {message.text}
                    </div>
                ))}

                <div ref={messagesEndRef} />

                {/* 3 initial predefined questions – shown only at start */}
                {messages.length === 1 && (
                    <div className="flex flex-col gap-2 mt-2">
                        {[
                            "What is LivWell?",
                            "What does your website offer?",
                            "Do you support real-time location?"
                        ].map((question, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    const botResponse = getBotResponse(question);
                                    setMessages([
                                        ...messages,
                                        { text: question, sender: "user" },
                                        { text: botResponse, sender: "bot" },
                                    ]);
                                }}
                                className="text-left bg-white bg-opacity-80 text-purple-800 px-3 py-2 rounded-lg text-sm hover:bg-purple-200 shadow transition duration-200"
                            >
                                {question}
                            </button>
                        ))}
                    </div>
                )}
            </div>



            {/* Input Box */}
            <div className="flex items-center p-3 bg-white border-t border-gray-300 gap-2">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg"
                    disabled={isSending}
                >
                    {/* <SendHorizonal size={18} /> */}
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
