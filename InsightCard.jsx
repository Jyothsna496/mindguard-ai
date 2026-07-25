export default function InsightCard({ data, result }) {
  const causes = [];
  const positives = [];
  const recommendations = [];

  // Causes
  if (data.sleep < 7)
    causes.push("Less than 7 hours of sleep");

  if (data.stress > 6)
    causes.push("High stress levels");

  if (data.workHours > 8)
    causes.push("Long work hours");

  if (data.screenTime > 8)
    causes.push("Excessive screen time");

  // Positives
  if (data.exercise)
    positives.push("You exercised today");

  if (data.water >= 2)
    positives.push("Good hydration");

  if (data.mood >= 7)
    positives.push("Positive mood");

  // Recommendations
  if (data.sleep < 7)
    recommendations.push("Sleep at least 7–8 hours tonight.");

  if (data.stress > 6)
    recommendations.push("Take a 10-minute relaxation break.");

  if (data.screenTime > 8)
    recommendations.push("Reduce screen time before bed.");

  if (!data.exercise)
    recommendations.push("Go for a short walk or stretch.");

  return (
    <div className="mt-8 bg-slate-900 border border-cyan-500 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        🧠 AI Wellness Insight
      </h2>

      <p className="text-slate-300 mb-6">
        Your current burnout risk is
        <span className="text-cyan-400 font-bold">
          {" "}{result.risk}
        </span>.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <div>
          <h3 className="font-bold text-red-400 mb-3">
            🚨 Main Contributors
          </h3>

          {causes.length === 0 ? (
            <p>None detected 🎉</p>
          ) : (
            causes.map((item, index) => (
              <p key={index}>• {item}</p>
            ))
          )}
        </div>

        <div>
          <h3 className="font-bold text-green-400 mb-3">
            ✅ Positive Habits
          </h3>

          {positives.length === 0 ? (
            <p>Let's build some healthy habits!</p>
          ) : (
            positives.map((item, index) => (
              <p key={index}>• {item}</p>
            ))
          )}
        </div>

        <div>
          <h3 className="font-bold text-cyan-400 mb-3">
            💡 Recommendations
          </h3>

          {recommendations.map((item, index) => (
            <p key={index}>• {item}</p>
          ))}
        </div>

      </div>

    </div>
  );
}