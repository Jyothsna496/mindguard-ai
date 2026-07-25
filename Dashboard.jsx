import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import BurnoutTrendChart from "../components/BurnoutTrendChart";

import { auth } from "../services/firebase";

import {
  getLatestAssessment,
  getHistory,
} from "../services/storageService";

export default function Dashboard() {
  const navigate = useNavigate();

  const [latest, setLatest] = useState(null);
  const [history, setHistory] = useState([]);

  const user = auth.currentUser;

  useEffect(() => {
    const latestAssessment = getLatestAssessment();
    const allHistory = getHistory();

    setLatest(latestAssessment);
    setHistory(allHistory);
  }, []);

  const firstName =
    user?.displayName?.split(" ")[0] ||
    user?.email?.split("@")[0] ||
    "there";

  function getRiskColor(risk) {
    if (risk === "High") return "text-red-400";
    if (risk === "Moderate") return "text-yellow-400";
    if (risk === "Low") return "text-green-400";

    return "text-slate-300";
  }

  function getRiskBadge(risk) {
    if (risk === "High") {
      return "border-red-500/20 bg-red-500/10 text-red-400";
    }

    if (risk === "Moderate") {
      return "border-yellow-500/20 bg-yellow-500/10 text-yellow-400";
    }

    return "border-green-500/20 bg-green-500/10 text-green-400";
  }

  function getRecommendation() {
    if (!latest) return "";

    if (latest.risk === "High") {
      return "Your current indicators suggest that recovery should be a priority. Review your sleep, workload and stress patterns, and use the AI Coach to create a manageable plan for today.";
    }

    if (latest.risk === "Moderate") {
      return "A few wellness indicators need attention. Maintaining consistent sleep, taking regular breaks and managing workload may help improve your next check-in.";
    }

    return "Your current indicators look positive. Keep maintaining your sleep, hydration, movement and workload habits while checking in consistently.";
  }

  return (
    <Layout>

      {/* ======================================
          HERO
      ====================================== */}

      <section className="relative mb-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 px-7 py-8 sm:px-9">

        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-7 xl:flex-row xl:items-center">

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-semibold text-cyan-400">
              <span>●</span>
              Wellness Dashboard
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl">
              Welcome back,{" "}
              <span className="text-cyan-400">
                {firstName}
              </span>{" "}
              👋
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Track your wellness patterns, understand your
              burnout risk, and take small actions before stress
              becomes overwhelming.
            </p>
          </div>

          <button
            onClick={() => navigate("/checkin")}
            className="shrink-0 rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-300"
          >
            + New Check-In
          </button>

        </div>

      </section>


      {/* ======================================
          STATS
      ====================================== */}

      <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Burnout Score"
          value={
            latest
              ? `${latest.score}%`
              : "--"
          }
          color={getRiskColor(latest?.risk)}
          icon="◉"
          subtitle="Latest assessment"
        />

        <StatCard
          title="Current Risk"
          value={
            latest
              ? latest.risk
              : "--"
          }
          color={getRiskColor(latest?.risk)}
          icon="△"
          subtitle="Burnout indicator"
        />

        <StatCard
          title="Total Check-Ins"
          value={history.length}
          color="text-cyan-400"
          icon="✓"
          subtitle="Assessments completed"
        />

        <StatCard
          title="Last Check-In"
          value={
            latest
              ? latest.date
              : "--"
          }
          icon="◷"
          subtitle={
            latest?.time ||
            "No assessment yet"
          }
        />

      </section>


      {/* ======================================
          EMPTY STATE
      ====================================== */}

      {!latest && (

        <section className="mb-8 rounded-3xl border border-slate-800 bg-slate-900/70 px-6 py-16 text-center">

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-400/10 text-4xl">
            🧠
          </div>

          <h2 className="text-3xl font-bold">
            Your wellness journey starts here
          </h2>

          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-slate-400">
            Complete your first daily assessment to calculate
            your burnout indicator and unlock personalized
            wellness insights.
          </p>

          <button
            onClick={() =>
              navigate("/checkin")
            }
            className="mt-7 rounded-xl bg-cyan-400 px-7 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start Assessment
          </button>

        </section>

      )}


      {/* ======================================
          WELLNESS OVERVIEW
      ====================================== */}

      {latest && (

        <section className="mb-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">

          {/* STATUS */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-7">

            <div className="mb-7 flex items-start justify-between gap-4">

              <div>
                <p className="mb-1 text-sm font-semibold text-cyan-400">
                  Latest Check-In
                </p>

                <h2 className="text-2xl font-bold">
                  Wellness Status
                </h2>
              </div>

              <span
                className={`rounded-full border px-3 py-1.5 text-xs font-bold ${getRiskBadge(
                  latest.risk
                )}`}
              >
                {latest.risk} Risk
              </span>

            </div>


            {/* SCORE */}

            <div className="mb-8 flex items-end gap-3">

              <span
                className={`text-6xl font-bold tracking-tight ${getRiskColor(
                  latest.risk
                )}`}
              >
                {latest.score}
              </span>

              <span className="mb-2 text-xl text-slate-500">
                / 100
              </span>

            </div>


            {/* METRICS */}

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

              <Metric
                label="Sleep"
                value={`${latest.sleep} hrs`}
                icon="☾"
              />

              <Metric
                label="Stress"
                value={`${latest.stress}/10`}
                icon="⚡"
              />

              <Metric
                label="Mood"
                value={`${latest.mood}/10`}
                icon="☺"
              />

              <Metric
                label="Work"
                value={`${latest.workHours} hrs`}
                icon="▣"
              />

              <Metric
                label="Water"
                value={`${latest.water} L`}
                icon="◉"
              />

              <Metric
                label="Screen"
                value={`${latest.screenTime} hrs`}
                icon="▤"
              />

            </div>

          </div>


          {/* AI INSIGHT */}

          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 to-cyan-950/20 p-7">

            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-xl text-slate-950">
                ✦
              </div>

              <p className="text-sm font-semibold text-cyan-400">
                MindGuard AI
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                Today's Insight
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                {getRecommendation()}
              </p>

              <button
                onClick={() =>
                  navigate("/coach")
                }
                className="mt-7 flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Get personalized guidance
                <span>→</span>
              </button>

            </div>

          </div>

        </section>

      )}


      {/* ======================================
          QUICK ACTIONS
      ====================================== */}

      <section className="mb-8">

        <div className="mb-5">
          <p className="text-sm font-semibold text-cyan-400">
            Shortcuts
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            Quick Actions
          </h2>
        </div>


        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

          <ActionCard
            icon="+"
            title="Daily Check-In"
            description="Record today's wellness indicators."
            onClick={() =>
              navigate("/checkin")
            }
          />

          <ActionCard
            icon="↗"
            title="View History"
            description="Review previous assessments and progress."
            onClick={() =>
              navigate("/history")
            }
          />

          <ActionCard
            icon="✦"
            title="AI Wellness Coach"
            description="Get guidance based on your latest assessment."
            onClick={() =>
              navigate("/coach")
            }
          />

        </div>

      </section>


      {/* ======================================
          TREND CHART
      ====================================== */}

      <section className="mb-6">
        <BurnoutTrendChart data={history} />
      </section>


      {/* FOOTNOTE */}

      <p className="pb-4 text-center text-xs text-slate-600">
        MindGuard provides general wellness insights and does
        not replace professional medical advice.
      </p>

    </Layout>
  );
}


/* ==========================================
   METRIC
========================================== */

function Metric({
  label,
  value,
  icon,
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">

      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-sm text-cyan-400">
        {icon}
      </div>

      <p className="text-xs text-slate-500">
        {label}
      </p>

      <p className="mt-1 font-bold text-slate-100">
        {value}
      </p>

    </div>
  );
}


/* ==========================================
   ACTION CARD
========================================== */

function ActionCard({
  icon,
  title,
  description,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-black/20"
    >

      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl font-bold text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
        {icon}
      </div>

      <h3 className="font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <p className="mt-5 text-sm font-semibold text-cyan-400">
        Open →
      </p>

    </button>
  );
}