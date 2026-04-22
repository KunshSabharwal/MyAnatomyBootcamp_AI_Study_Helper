# 🧠 MyAnatomy AI Study Helper

An AI-powered study assistant built during a 2-day bootcamp conducted by **MyAnatomy Organization** at our college. This application helps students generate structured study material, summaries, and quizzes from input topics — making learning faster, interactive, and efficient.

---

## 🚀 Overview

**MyAnatomy AI Study Helper** is a full-stack web application that leverages AI to:

- Generate concise study summaries
- Create practice quizzes automatically
- Track study history
- Provide an interactive learning experience

AI-powered study assistants are increasingly used to enhance learning efficiency through summarization and quiz generation capabilities. :contentReference[oaicite:0]{index=0}

---

## ✨ Features

### 📚 AI Study Material Generation

- Input any topic or concept
- AI generates:
  - Structured summary (bullet points)
  - Practice MCQ quiz

### 🧠 Interactive Quiz System

- Multiple-choice questions
- Instant feedback after submission
- Score calculation with percentage

### 🕒 Study History Tracking

- Stores all previous study sessions
- View summaries and quizzes anytime
- Expandable UI for detailed review

### 🔐 Authentication System

- User signup & login
- JWT-based protected routes
- Personalized study history

### 🎨 Modern UI/UX

- Built with React + Vite
- Clean and responsive design
- Interactive components with smooth state handling

---

## 🏗️ Tech Stack

### Frontend

- React.js (Vite)
- CSS (custom styling)
- Axios (API calls)

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas

### Authentication

- JWT (JSON Web Tokens)

### AI Integration

- OpenAI / LLM-based API (for content generation)

---

## ⚙️ Installation & Setup

1️⃣ Clone the Repository

```bash
git clone https://github.com/KunshSabharwal/MyAnatomyBootcamp_AI_Study_Helper.git
cd MyAnatomyBootcamp_AI_Study_Helper
```

2️⃣ Backend Setup

```bash
cd backEnd
npm install
```

3️⃣Create a .env file and run backEnd & frontEnd

```bash
MONGO_URI= "your_mongodb_database_uri"
MONGO_DATABASE= "your_database_name"
JWT_SECRET = "your_secret_key"
GEMINI_API_KEY = "your_gemini_api_key"

backEnd Setup ->
cd backEnd
npm install
npm start

Frontend Setup ->
cd frontEnd
npm install
npm run dev
```

## 🔌 API Endpoints

- Auth Routes
- POST /api/auth/register
- POST /api/auth/login
- Study Routes
- POST /api/study/generate-study-material
- GET /api/study/history

## 🔄 Application Flow

- User logs in / signs up
- Enters a study topic
- Backend calls AI API

### Returns:

- Summary
- Quiz
- Data stored in MongoDB
- User can view history anytime

## 🧪 Key Functionalities Implemented

- Full-stack MERN architecture
- REST API design
- Protected routes using middleware
- Dynamic quiz state handling
- Score calculation logic
- Expandable history UI
- Error handling & debugging (CORS, MongoDB, routing issues)

## 🐛 Challenges Faced

- MongoDB Atlas connection issues (SRV & authentication)
- CORS configuration between frontend and backend
- Route mismatch (GET vs POST)
- Environment variable setup
- API debugging using browser DevTools

## 🧠 Learnings

- Practical experience with MERN stack
- Debugging real-world backend issues
- Understanding REST API design
- Handling async data flow in React
- Working with external AI APIs

## 🎯 Future Improvements

- Add file upload (PDF → summary)
- Improve UI with animations
- Add leaderboard / gamification
- Implement spaced repetition
- Deploy on cloud (Render / Vercel)

## 🤝 Acknowledgement

- This project was built during a 2-day bootcamp conducted by MyAnatomy Organization, where we were guided step-by-step in building an AI-powered application from scratch. Thanks to @https://github.com/mishrakansha for the session.

# 📌 Author

- Kunsh Sabharwal
- GitHub: https://github.com/KunshSabharwal

## ⭐ If you found this useful

- Give it a ⭐ on GitHub and share it!
