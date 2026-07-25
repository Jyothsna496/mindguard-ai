# 🧠 MindGuard AI

### AI-Powered Burnout Risk Monitoring & Personalized Wellness Companion

**MindGuard AI** is a wellness platform that helps users monitor daily well-being, identify potential burnout risk, track changes over time, and receive personalized AI-powered guidance.

Instead of waiting until burnout begins affecting productivity and well-being, MindGuard encourages users to recognize unhealthy patterns early and take practical action.

---

## 🚀 Live Demo

🌐 **https://mindguard-ai-184ec.web.app/login**

> Try the daily check-in, view your burnout risk indicator, explore wellness trends, and interact with the AI Wellness Coach.

---

## ✨ Key Features

- 🔐 **Secure Authentication** — Email/password login and Google Sign-In
- 📝 **Daily Wellness Check-In** — Track key lifestyle and wellness indicators
- 🧠 **Burnout Risk Assessment** — Generate a burnout risk score and classification
- 📊 **Personalized Dashboard** — View wellness indicators and latest insights
- 📈 **Trend Analysis** — Visualize burnout risk changes across check-ins
- 🤖 **AI Wellness Coach** — Receive personalized guidance powered by Gemini
- 📚 **Assessment History** — Review previous wellness check-ins
- 💡 **Personalized Insights** — Recommendations based on wellness indicators

---

# 📸 Product Preview

## 🔐 Login & Authentication

Secure access through email/password authentication and Google Sign-In.

<img width="959" height="468" alt="Screenshot 2026-07-25 163531" src="https://github.com/user-attachments/assets/27528df6-0fc6-49f1-8e33-ab047bdc6632" />



## 🏠 Wellness Dashboard

A personalized dashboard showing burnout risk, wellness indicators, AI insights, and assessment progress.

<img width="956" height="471" alt="Screenshot 2026-07-25 163605" src="https://github.com/user-attachments/assets/1aaebb1d-a298-47b4-80a0-6d67ce9f4f9c" />

<img width="782" height="359" alt="Screenshot 2026-07-25 163619" src="https://github.com/user-attachments/assets/be11d7a1-49ca-446b-a6a8-f0239b20156b" />


## 📝 Daily Wellness Check-In

Users can record sleep, stress, mood, workload, hydration, screen time, exercise, and daily reflections.

<img width="955" height="470" alt="Screenshot 2026-07-25 163735" src="https://github.com/user-attachments/assets/e4c2b253-2009-424f-8175-c9d66ffc01eb" />


## 📈 Wellness History & Trends

Previous assessments are stored and visualized to help users understand how their burnout risk changes over time.

<img width="958" height="470" alt="Screenshot 2026-07-25 163638" src="https://github.com/user-attachments/assets/b9047fe6-42a7-47aa-867a-8556e35b9780" />


## 🤖 AI Wellness Coach

The AI Wellness Coach provides contextual wellness guidance and recommendations based on user questions and wellness information.

<img width="950" height="470" alt="Screenshot 2026-07-25 163719" src="https://github.com/user-attachments/assets/0927d06d-a634-4e38-b4a0-444c55ee1bbe" />


---

## 💡 The Problem

Burnout rarely happens overnight.

It can gradually develop through factors such as:

- Poor sleep
- Prolonged stress
- Excessive workload
- Low mood
- Lack of exercise
- Insufficient hydration
- Excessive screen time

People often recognize these patterns only after they begin affecting productivity and overall well-being.

**MindGuard AI aims to make these patterns visible earlier.**

The platform combines wellness tracking, risk assessment, historical analytics, and generative AI to help users better understand their daily wellness patterns.

---

## ⚙️ How MindGuard Works

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
          ┌────────┴────────┐
          ▼                 ▼
      Dashboard          History
          │                 │
          ▼                 ▼
     AI Insights       Trend Analysis
          │
          ▼
     AI Wellness Coach
```

---

## 📝 Wellness Indicators

The daily assessment considers:

| Indicator | Description |
|---|---|
| 😴 Sleep | Daily sleep duration |
| 😰 Stress | Self-reported stress level |
| 😊 Mood | Daily mood rating |
| 💼 Work Hours | Time spent working/studying |
| 💧 Hydration | Daily water intake |
| 💻 Screen Time | Time spent using digital devices |
| 🏃 Exercise | Whether physical activity was completed |
| 📒 Journal | Optional daily reflection |

These indicators are used to calculate a wellness-oriented burnout risk indicator.

---

## 🧠 Burnout Risk Assessment

After completing a check-in, MindGuard generates:

- Burnout risk score
- Low / Moderate / High risk classification
- Visual risk indicator
- Personalized wellness insights

The results can then be tracked across multiple assessments to identify changes in wellness patterns.

> **Note:** The burnout score is a wellness risk indicator and is not intended to provide a medical diagnosis.

---

## 🤖 AI Wellness Coach

MindGuard integrates Google's Gemini API to provide an interactive AI wellness companion.

Users can ask for guidance related to:

- Stress management
- Sleep habits
- Workload management
- Focus and productivity
- Wellness routines
- Their latest wellness assessment

The goal is to transform wellness data into practical, understandable actions.

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router

### Data Visualization
- Recharts

### Authentication & Hosting
- Firebase Authentication
- Firebase Hosting

### Artificial Intelligence
- Google Gemini API

### Storage
- Browser Local Storage for assessment history in the current MVP

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

## 💻 Running the Project Locally

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
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

Never commit API keys or other secrets to GitHub.

### 5. Start the application

```bash
npm run dev
```

Vite will provide a local development URL.

---

## 🔮 Future Improvements

- ☁️ Firestore-based cloud assessment storage
- 🔄 Cross-device wellness synchronization
- 📊 More advanced burnout risk modelling
- 🎯 Personalized wellness goals
- 🔔 Smart reminders and notifications
- 📅 Weekly wellness reports
- 🧠 Historical context for AI recommendations
- 🔐 Server-side AI API integration
- 📈 Advanced wellness analytics

---

## 🔒 Privacy & Disclaimer

MindGuard AI is designed as a wellness and productivity support tool.

Burnout risk indicators and AI-generated recommendations are informational and should **not be considered medical diagnoses or professional healthcare advice**.

---

## 🎯 Vision

MindGuard AI explores how AI, behavioral indicators, and data visualization can work together to create a more proactive approach to digital wellness.

> **Recognize the pattern. Understand the risk. Take action early.**

---

## 👩‍💻 Developed By

**Jyothsna R**

Built with React, Firebase, Tailwind CSS, Recharts, and Google Gemini.
