export default function BurnoutGauge({ score, risk }) {
  const radius = 70;
  const stroke = 10;

  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (score / 100) * circumference;

  const color =
    risk === "High"
      ? "#ef4444"
      : risk === "Moderate"
      ? "#facc15"
      : "#22c55e";

  return (
    <div className="flex flex-col items-center">

      <svg width="180" height="180">

        {/* Background Circle */}
        <circle
          cx="90"
          cy="90"
          r={normalizedRadius}
          stroke="#334155"
          strokeWidth={stroke}
          fill="none"
        />

        {/* Progress Circle */}
        <circle
          cx="90"
          cy="90"
          r={normalizedRadius}
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 90 90)"
          style={{
            transition: "stroke-dashoffset 1s ease",
          }}
        />

        {/* Percentage */}
        <text
          x="90"
          y="90"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="28"
          fontWeight="bold"
        >
          {score}%
        </text>

      </svg>

      <p
        className="text-xl font-semibold mt-3"
        style={{ color }}
      >
        {risk} Risk
      </p>

    </div>
  );
}

console.log(import.meta.env.VITE_GEMINI_API_KEY);