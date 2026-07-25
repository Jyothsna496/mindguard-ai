import { useState } from "react";
import Layout from "../components/Layout";
import BurnoutGauge from "../components/BurnoutGauge";
import InsightCard from "../components/InsightCard";
import { calculateBurnout } from "../utils/burnoutCalculator";
import { saveAssessment } from "../services/storageService";

export default function CheckIn() {
  const [formData, setFormData] = useState({
    sleep: 7,
    stress: 5,
    mood: 5,
    workHours: 8,
    water: 2,
    exercise: false,
    screenTime: 6,
    journal: "",
  });

  const [result, setResult] = useState(null);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const burnoutResult = calculateBurnout(formData);

    const assessment = {
      ...formData,
      ...burnoutResult,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    saveAssessment(assessment);

    setResult(burnoutResult);
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-2">
          📝 Daily Wellness Check
        </h1>

        <p className="text-slate-400 mb-8">
          Complete today's assessment to understand your burnout level.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Sleep */}
          <div className="bg-slate-900 rounded-xl p-5">
            <label className="block mb-3 font-semibold">
              😴 Sleep Hours
            </label>

            <input
              type="number"
              name="sleep"
              value={formData.sleep}
              onChange={handleChange}
              className="w-full bg-slate-800 rounded-lg p-3"
            />
          </div>

          {/* Work Hours */}
          <div className="bg-slate-900 rounded-xl p-5">
            <label className="block mb-3 font-semibold">
              💼 Work Hours
            </label>

            <input
              type="number"
              name="workHours"
              value={formData.workHours}
              onChange={handleChange}
              className="w-full bg-slate-800 rounded-lg p-3"
            />
          </div>

          {/* Stress */}
          <div className="bg-slate-900 rounded-xl p-5">
            <label className="block mb-3 font-semibold">
              😰 Stress Level ({formData.stress}/10)
            </label>

            <input
              type="range"
              min="1"
              max="10"
              name="stress"
              value={formData.stress}
              onChange={handleChange}
              className="w-full accent-cyan-500"
            />
          </div>

          {/* Mood */}
          <div className="bg-slate-900 rounded-xl p-5">
            <label className="block mb-3 font-semibold">
              😊 Mood ({formData.mood}/10)
            </label>

            <input
              type="range"
              min="1"
              max="10"
              name="mood"
              value={formData.mood}
              onChange={handleChange}
              className="w-full accent-cyan-500"
            />
          </div>

          {/* Water */}
          <div className="bg-slate-900 rounded-xl p-5">
            <label className="block mb-3 font-semibold">
              💧 Water Intake (Litres)
            </label>

            <input
              type="number"
              step="0.5"
              name="water"
              value={formData.water}
              onChange={handleChange}
              className="w-full bg-slate-800 rounded-lg p-3"
            />
          </div>

          {/* Screen Time */}
          <div className="bg-slate-900 rounded-xl p-5">
            <label className="block mb-3 font-semibold">
              💻 Screen Time (Hours)
            </label>

            <input
              type="number"
              name="screenTime"
              value={formData.screenTime}
              onChange={handleChange}
              className="w-full bg-slate-800 rounded-lg p-3"
            />
          </div>

          {/* Exercise */}
          <div className="bg-slate-900 rounded-xl p-5 md:col-span-2">
            <label className="flex items-center gap-3 text-lg">

              <input
                type="checkbox"
                name="exercise"
                checked={formData.exercise}
                onChange={handleChange}
                className="w-5 h-5"
              />

              🏃 I exercised today
            </label>
          </div>

          {/* Journal */}
          <div className="bg-slate-900 rounded-xl p-5 md:col-span-2">

            <label className="block mb-3 font-semibold">
              📒 Journal
            </label>

            <textarea
              rows="5"
              name="journal"
              value={formData.journal}
              onChange={handleChange}
              placeholder="How are you feeling today?"
              className="w-full bg-slate-800 rounded-lg p-3"
            />
          </div>

          <div className="md:col-span-2">

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black py-4 rounded-xl font-bold text-lg transition"
            >
              Analyze Burnout
            </button>

          </div>

        </form>

        {result && (
          <div className="mt-10 bg-slate-900 border border-cyan-500 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Burnout Analysis
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <BurnoutGauge
                score={result.score}
                risk={result.risk}
              />

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Assessment Result
                </h3>

                <p className="text-lg">
                  Burnout Score:
                  <span className="text-cyan-400 font-bold">
                    {" "}
                    {result.score}%
                  </span>
                </p>

                <p
                  className={`text-2xl font-bold mt-4 ${
                    result.risk === "High"
                      ? "text-red-400"
                      : result.risk === "Moderate"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }`}
                >
                  {result.risk} Risk
                </p>

              </div>

            </div>

          </div>
        )}

        {result && (
          <div className="mt-8">
            <InsightCard
              data={formData}
              result={result}
            />
          </div>
        )}

      </div>
    </Layout>
  );
}