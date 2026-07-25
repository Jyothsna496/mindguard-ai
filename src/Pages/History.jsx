import { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import { getHistory } from "../services/storageService";

export default function History() {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const filteredHistory = useMemo(() => {
    return history.filter((item) =>
      `${item.date} ${item.time} ${item.risk}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [history, search]);

  const latest = history[0];

  const highRisk = history.filter((h) => h.risk === "High").length;
  const moderateRisk = history.filter((h) => h.risk === "Moderate").length;
  const lowRisk = history.filter((h) => h.risk === "Low").length;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">
            📊 Assessment History
          </h1>

          <p className="text-slate-400 mt-2">
            Track your wellness journey and monitor burnout trends over time.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400">Total Assessments</p>
            <h2 className="text-4xl font-bold text-cyan-400 mt-2">
              {history.length}
            </h2>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400">High Risk</p>
            <h2 className="text-4xl font-bold text-red-400 mt-2">
              {highRisk}
            </h2>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400">Moderate Risk</p>
            <h2 className="text-4xl font-bold text-yellow-400 mt-2">
              {moderateRisk}
            </h2>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400">Latest Score</p>

            <h2 className="text-4xl font-bold text-green-400 mt-2">
              {latest ? `${latest.score}%` : "--"}
            </h2>
          </div>

        </div>

        {/* Search */}
        <div className="mb-6">

          <input
            type="text"
            placeholder="🔍 Search by date, time or risk..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-cyan-500"
          />

        </div>

        {/* History Table */}
        <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">

          {filteredHistory.length === 0 ? (

            <div className="p-12 text-center">

              <h2 className="text-2xl font-bold mb-3">
                No Assessments Found
              </h2>

              <p className="text-slate-400">
                Complete a Daily Wellness Check to begin tracking your history.
              </p>

            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-slate-800">

                  <tr>
                    <th className="text-left p-4">Date</th>
                    <th className="text-left p-4">Time</th>
                    <th className="text-left p-4">Score</th>
                    <th className="text-left p-4">Risk</th>
                    <th className="text-left p-4">Sleep</th>
                    <th className="text-left p-4">Stress</th>
                    <th className="text-left p-4">Mood</th>
                    <th className="text-left p-4">Work</th>
                    <th className="text-left p-4">Water</th>
                    <th className="text-left p-4">Screen</th>
                  </tr>

                </thead>

                <tbody>

                  {filteredHistory.map((item, index) => (

                    <tr
                      key={index}
                      className="border-t border-slate-800 hover:bg-slate-800 transition"
                    >

                      <td className="p-4">{item.date}</td>

                      <td className="p-4">{item.time}</td>

                      <td className="p-4 font-bold text-cyan-400">
                        {item.score}%
                      </td>

                      <td className="p-4">

                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            item.risk === "High"
                              ? "bg-red-500/20 text-red-400"
                              : item.risk === "Moderate"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {item.risk}
                        </span>

                      </td>

                      <td className="p-4">{item.sleep} hrs</td>

                      <td className="p-4">{item.stress}/10</td>

                      <td className="p-4">{item.mood}/10</td>

                      <td className="p-4">{item.workHours} hrs</td>

                      <td className="p-4">{item.water} L</td>

                      <td className="p-4">{item.screenTime} hrs</td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>
    </Layout>
  );
}