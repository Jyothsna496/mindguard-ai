import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-6">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-11 h-11 bg-cyan-500/15 border border-cyan-400/30 rounded-xl flex items-center justify-center text-2xl">
            🧠
          </div>

          <h1 className="text-2xl font-bold">
            MindGuard
            <span className="text-cyan-400"> AI</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6">

          <button
            onClick={() => navigate("/dashboard")}
            className="hidden md:block text-slate-300 hover:text-cyan-400 transition"
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/history")}
            className="hidden md:block text-slate-300 hover:text-cyan-400 transition"
          >
            History
          </button>

          <button
            onClick={() => navigate("/coach")}
            className="hidden md:block text-slate-300 hover:text-cyan-400 transition"
          >
            AI Coach
          </button>

          <button
            onClick={() => navigate("/checkin")}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2.5 rounded-xl font-bold transition"
          >
            Check In
          </button>

        </div>
      </nav>

      {/* HERO */}
      <main>

        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT HERO */}
            <div>

              <div className="inline-flex items-center gap-2 border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold mb-7">
                ✨ AI-Powered Wellness Intelligence
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">

                Predict

                <span className="text-cyan-400">
                  {" "}Burnout{" "}
                </span>

                Before It Happens

              </h1>

              <p className="mt-7 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                MindGuard AI analyzes your sleep, stress, mood, workload,
                hydration, exercise and screen time to estimate burnout risk
                and provide personalized wellness insights.
              </p>

              {/* HERO BUTTONS */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">

                <button
                  onClick={() => navigate("/checkin")}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg shadow-cyan-500/10"
                >
                  Start Wellness Check →
                </button>

                <button
                  onClick={() => navigate("/dashboard")}
                  className="border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg transition"
                >
                  View Dashboard
                </button>

              </div>

              {/* BENEFITS */}
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">

                <span>✓ Daily Tracking</span>

                <span>✓ Burnout Analysis</span>

                <span>✓ AI Recommendations</span>

              </div>

            </div>

            {/* RIGHT HERO */}
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-10 bg-cyan-500/10 blur-3xl rounded-full"></div>

              {/* Dashboard Preview */}
              <div className="relative bg-slate-900/80 backdrop-blur border border-slate-700 rounded-3xl p-7 shadow-2xl">

                <div className="flex items-center justify-between mb-8">

                  <div>

                    <p className="text-slate-400 text-sm">
                      Wellness Overview
                    </p>

                    <h2 className="text-2xl font-bold mt-1">
                      Today's Assessment
                    </h2>

                  </div>

                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-2xl">
                    🧠
                  </div>

                </div>

                {/* PREVIEW STATS */}
                <div className="grid grid-cols-2 gap-4">

                  <PreviewCard
                    title="Burnout Risk"
                    value="Low"
                    color="text-green-400"
                  />

                  <PreviewCard
                    title="Wellness Score"
                    value="82%"
                    color="text-cyan-400"
                  />

                  <PreviewCard
                    title="Sleep"
                    value="7.5h"
                  />

                  <PreviewCard
                    title="Stress"
                    value="4/10"
                  />

                </div>

                {/* AI PREVIEW */}
                <div className="mt-5 bg-cyan-500/10 border border-cyan-400/20 rounded-2xl p-5">

                  <p className="text-cyan-300 font-semibold mb-2">
                    ✨ AI Insight
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    Your wellness indicators look balanced today.
                    Maintaining your current sleep routine and regular
                    breaks may help keep your burnout risk low.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* FEATURES */}
        <section className="border-t border-slate-800 bg-slate-950/40">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">

            <div className="text-center max-w-2xl mx-auto mb-14">

              <p className="text-cyan-400 font-semibold mb-3">
                YOUR WELLNESS, UNDERSTOOD
              </p>

              <h2 className="text-4xl md:text-5xl font-bold">
                More Than a Burnout Score
              </h2>

              <p className="text-slate-400 mt-5 text-lg">
                Understand your daily wellness signals, identify patterns and
                receive personalized recommendations based on your data.
              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <FeatureCard
                icon="📊"
                title="Burnout Analysis"
                description="Analyze sleep, stress, mood, workload, hydration, exercise and screen time to estimate your current burnout risk."
              />

              <FeatureCard
                icon="📈"
                title="Wellness History"
                description="Track previous assessments and understand how your wellness indicators change over time."
              />

              <FeatureCard
                icon="🤖"
                title="AI Wellness Coach"
                description="Receive personalized insights and practical recommendations based on your wellness assessment and history."
              />

            </div>

          </div>

        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">

          <div className="text-center mb-14">

            <p className="text-cyan-400 font-semibold mb-3">
              SIMPLE & INTELLIGENT
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              How MindGuard AI Works
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <StepCard
              number="01"
              icon="📝"
              title="Daily Check-In"
              description="Enter your sleep, stress, mood, work hours and other daily wellness indicators."
            />

            <StepCard
              number="02"
              icon="🧠"
              title="Burnout Analysis"
              description="MindGuard evaluates your wellness indicators and calculates your burnout risk."
            />

            <StepCard
              number="03"
              icon="✨"
              title="AI Guidance"
              description="Receive personalized insights and recommendations from your AI wellness coach."
            />

          </div>

        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-6 pb-24">

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-3xl p-10 md:p-14 text-center">

            <div className="text-4xl mb-5">
              🧠
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Understand Your Wellness Today
            </h2>

            <p className="text-slate-300 mt-4 text-lg max-w-2xl mx-auto">
              Complete your daily assessment and discover the factors
              affecting your burnout risk.
            </p>

            <button
              onClick={() => navigate("/checkin")}
              className="mt-8 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg transition"
            >
              Start Assessment →
            </button>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="font-bold">
            🧠 MindGuard
            <span className="text-cyan-400"> AI</span>
          </p>

          <p className="text-slate-500 text-sm text-center">
            AI-powered wellness insights for healthier daily habits.
          </p>

        </div>

      </footer>

    </div>
  );
}


/* --------------------------------------------------
   PREVIEW CARD
-------------------------------------------------- */

function PreviewCard({
  title,
  value,
  color = "text-white",
}) {
  return (
    <div className="bg-slate-800/70 rounded-2xl p-5 border border-slate-700">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <p
        className={`text-3xl font-bold mt-2 ${color}`}
      >
        {value}
      </p>

    </div>
  );
}


/* --------------------------------------------------
   FEATURE CARD
-------------------------------------------------- */

function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="bg-slate-900/70 border border-slate-800 hover:border-cyan-400/50 rounded-2xl p-7 transition">

      <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-2xl mb-5">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-slate-400 leading-relaxed">
        {description}
      </p>

    </div>
  );
}


/* --------------------------------------------------
   STEP CARD
-------------------------------------------------- */

function StepCard({
  number,
  icon,
  title,
  description,
}) {
  return (
    <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-7">

      <span className="absolute top-5 right-6 text-slate-700 text-4xl font-bold">
        {number}
      </span>

      <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-2xl mb-5">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-slate-400 leading-relaxed">
        {description}
      </p>

    </div>
  );
}