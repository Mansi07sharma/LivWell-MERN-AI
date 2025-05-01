# 🏡 LivWell — Smart Housing & Property Management Platform

**LivWell** is a modern housing and property management web application built using **React.js**, **Express.js**, **MongoDB Atlas** **Tailwind CSS**, and **Firebase**. It offers intelligent property search, voice and chatbot support, user authentication, and real-time mapping via Google Maps.

---

## 🚀 Key Features

- 🔍 **Smart Property Search**
  - Search properties by owner's name or phone number.

- 👤 **User Authentication (Firebase Auth)**
  - Sign up and log in with secure Firebase Authentication.

- 📂 **Personal Dashboard**
  - `My Property`: Manage all the properties posted by the logged-in user.
  - `My Purchases`: View properties the user has purchased or rented.

- 🤖 **Chatbot Assistant**
  - An interactive chatbot to assist users with common queries related to LivWell.

- 🎙️ **Voice Assistant**
  - Voice-enabled interaction using `window.SpeechRecognition` (Web Speech API) — no external NLP or OpenAI API used.

- 🗺️ **Google Maps Integration**
  - Displays the real-time location of each property using Google Maps JavaScript API and geolocation data (latitude & longitude).

- 📱 **Responsive UI**
  - Built with Tailwind CSS to ensure a smooth experience across all devices.

---

## 🛠️ Tech Stack

| Technology              | Purpose                                |
|-------------------------|----------------------------------------|
| React.js                | Frontend Framework                     |
| Tailwind CSS            | UI Styling & Responsiveness            |
| Express.js              | Backend Framework                      |
| MongoDB Atlas           | Cloud Database Solution                |
| Firebase (Auth + DB)    | Authentication & Real-time Database    |
| Google Maps JS API      | Map Integration                        |
| window.SpeechRecognition| Voice Assistant (Web Speech API)       |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Mansi07sharma/livwell-mern-ai.git
cd livwell-mern-ai

cd client
npm install

# Start the backend server
cd backend
nodemon index.js

# Start the frontend
npm run dev
```

## 🔮 Future Improvements

<ul>
  <li>🔐 Google or phone-based login with Firebase</li>

<li>🧾 Stripe integration for rent payments</li>

<li>📆 Booking system with visit scheduling</li>

<li>📈 Dashboard analytics for property owners</li>

<li>🌐 Multi-language support</li>
<li>📍 Filter properties by location, price range, or property type</li>
</ul>
