import { NavLink } from "react-router-dom";
import {
  FaBrain,
  FaChartLine,
  FaHistory,
  FaClipboardCheck,
} from "react-icons/fa";

export default function Sidebar() {
  const linkStyle =
    "flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-500 hover:text-black transition";

  const activeStyle = "bg-cyan-500 text-black";

  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-700 min-h-screen p-6">

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        🧠 MindGuard AI
      </h1>

      <nav className="space-y-4">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          <FaChartLine />
          Dashboard
        </NavLink>

        <NavLink
          to="/checkin"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          <FaClipboardCheck />
          Daily Check-In
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          <FaHistory />
          History
        </NavLink>

        <NavLink
          to="/coach"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : ""}`
          }
        >
          <FaBrain />
          AI Coach
        </NavLink>

      </nav>

    </aside>
  );
}