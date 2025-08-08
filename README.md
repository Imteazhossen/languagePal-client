<h1>LanguagePal – Your Global Language Learning Companion </h1>

Welcome to LanguagePal, a full-stack MERN web application that connects students with expert language tutors across the globe. Whether you're learning English, Spanish, Bangla, or French — LanguagePal makes it easy to find, book, and learn from the best.

Live Site:
🌍 https://language-pal-1c4dd.web.app/

Features

👤 Authentication
- Login via Email/Password and Google (Firebase Auth)
- Private routes for protected content

🧠 Tutors & Tutorials
- Search tutors by language
- View detailed tutor profiles
- Book tutors directly from their profiles
- Add, edit, and delete tutorials

💬 Ratings & Reviews
- Leave reviews for booked tutors
- Rating updates reflect both in bookings and tutor listings

🌗 Theme Support
- Light / Dark mode toggle using Tailwind & DaisyUI

🔒 JWT Security
- JWT is issued after Firebase login
- All private API routes are protected via token verification

Tech Stack

React – Frontend UI  
React Router – SPA navigation  
Firebase Auth – Authentication & social login  
MongoDB – Database  
Express.js – Backend API  
JWT – Secure protected routes  
DaisyUI + TailwindCSS – Styling & themes  

Setup Instructions

Prerequisites
- Node.js
- MongoDB
- Firebase Project

Clone & Install

git clone https://github.com/your-username/languagepal.git
cd languagepal

Client Setup

cd client
npm install
npm run dev

Server Setup

cd server
npm install
touch .env

Add the following to your .env file:

DB_USER=yourMongoUser  
DB_PASS=yourMongoPass  
JWT_SECRET=yourJWTSecretKey  

Then run:

node index.js

Firebase Setup

- Enable Email/Password and Google sign-in in Firebase Console
- Add your Firebase config to firebase.js

License

This project is licensed under the MIT License — free to use and modify.

Developer

Developed with ❤️ by [Md Imteaz Hossen]([https://github.com/your-username](https://github.com/Imteazhossen))

Feedback & Contributions

If you find a bug or want to contribute, feel free to submit a pull request or open an issue.
