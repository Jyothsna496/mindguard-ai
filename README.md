# 🧠 MindGuard AI

**MindGuard AI** is an AI-powered wellness platform designed to help users monitor their daily well-being, identify potential burnout risk, understand wellness trends, and receive personalized guidance through an AI wellness coach.

The platform combines daily wellness check-ins, burnout risk assessment, historical analytics, and generative AI to encourage users to recognize unhealthy patterns early and take practical action.

---

## 🚀 Live Demo

🔗 **Live Application:** https://mindguard-ai-184ec.web.app

---

## 💡 The Problem

Burnout often develops gradually through factors such as poor sleep, prolonged stress, excessive workload, low mood, dehydration, and unhealthy digital habits.

Most people notice these patterns only after they begin affecting productivity and well-being.

**MindGuard AI aims to make these patterns visible earlier.**

Instead of simply tracking habits, the platform analyzes daily wellness indicators, estimates burnout risk, tracks changes over time, and provides personalized AI-powered guidance.

---

## ✨ Features

### 🔐 Authentication

- Email and password authentication
- Google Sign-In
- Secure user sessions
- Protected application routes
- User profile and logout functionality

### 📝 Daily Wellness Check-In

Users can record daily wellness indicators including:

- 😴 Sleep hours
- 😰 Stress level
- 😊 Mood
- 💼 Work hours
- 💧 Water intake
- 💻 Screen time
- 🏃 Exercise
- 📒 Personal journal entry

### 🧠 Burnout Risk Assessment

MindGuard analyzes the user's wellness indicators and generates:

- Burnout risk score
- Low / Moderate / High risk classification
- Visual burnout indicator
- Personalized wellness insights

> The burnout score is a wellness risk indicator and is not intended as a medical diagnosis.

### 📊 Wellness Dashboard

The dashboard provides a quick overview of:

- Latest burnout score
- Current risk level
- Number of assessments
- Latest check-in
- Wellness indicators
- Personalized recommendations

### 📈 History & Trend Analysis

Users can review previous assessments and visualize how their burnout risk changes over time.

This helps identify patterns across multiple daily check-ins rather than viewing each assessment in isolation.

### 🤖 AI Wellness Coach

MindGuard includes an AI-powered wellness coach that provides contextual guidance based on user questions and wellness information.

Users can ask about:

- Stress management
- Sleep improvement
- Workload
- Focus
- Wellness habits
- Their latest assessment

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router

### Data Visualization

- Recharts

### Authentication & Deployment

- Firebase Authentication
- Firebase Hosting

### Artificial Intelligence

- Google Gemini API

### Storage

- Browser Local Storage for assessment history in the current MVP

---

## 🏗️ How It Works

```text
User
 │
 ▼
Firebase Authentication
 │
 ▼
Daily Wellness Check-In
 │
 ▼
Burnout Risk Assessment
 │
 ├───────────────┐
 ▼               ▼
Dashboard       History
 │               │
 ▼               ▼
Insights      Trend Analysis
 │
 ▼
AI Wellness Coach
```

---

## 🔄 User Flow

```text
Landing Page
     ↓
Login / Sign Up
     ↓
Dashboard
     ↓
Daily Check-In
     ↓
Burnout Risk Analysis
     ↓
Personalized Insights
     ↓
History & Trends
     ↓
AI Wellness Coach
```

---

## 📂 Project Structure

```text
mindguard-ai/
│
├── public/
│
├── src/
│   ├── components/
│   ├── Pages/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── firebase.json
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Running Locally

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd mindguard-ai
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root and configure the required environment variables.

**Never commit API keys or secrets to GitHub.**

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed by Vite.

---

## 🔮 Future Improvements

- Firestore-based cloud assessment history
- Cross-device wellness synchronization
- More advanced burnout risk modelling
- Personalized wellness goals
- Smart reminders and notifications
- Weekly wellness reports
- Improved AI recommendations using historical trends
- Secure server-side handling of AI requests
- Additional wellness analytics and visualizations

---

## 🔒 Privacy & Disclaimer

MindGuard AI is designed as a wellness and productivity support tool.

The burnout risk score and AI-generated recommendations are informational and should **not be considered medical diagnoses or professional healthcare advice**.

Sensitive credentials and API keys should never be committed to the repository.

---

## 🎯 Project Goal

MindGuard AI explores how AI, behavioral indicators, and data visualization can work together to create a more proactive approach to digital wellness.

The goal is simple:

> **Identify patterns early, understand your wellness, and take action before burnout takes over.**

---

## 👩‍💻 Developed By

**Jyothsna R**

Built as a hackathon project using React, Firebase, and Google Gemini.

