import { Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import CheckIn from "./Pages/CheckIn";
import History from "./Pages/History";
import AICoach from "./Pages/AICoach";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/checkin"
        element={
          <ProtectedRoute>
            <CheckIn />
          </ProtectedRoute>
        }
      />

      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }
      />

      <Route
        path="/coach"
        element={
          <ProtectedRoute>
            <AICoach />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NavigateToHome />} />
    </Routes>
  );
}

function NavigateToHome() {
  return <Landing />;
}

export default App;