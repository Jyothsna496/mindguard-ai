import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function BurnoutTrendChart({ data = [] }) {
  if (!data.length) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 text-center">
        <p className="text-slate-400">
          Complete assessments to start building your burnout trend.
        </p>
      </div>
    );
  }

  // History is stored newest first.
  // Reverse a copy so chart runs oldest -> newest.
  const chartData = [...data]
    .reverse()
    .map((item, index) => ({
      ...item,
      chartLabel:
        item.date ||
        `Check ${index + 1}`,
      score: Number(item.score) || 0,
    }));

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">

      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">

        <div>
          <p className="mb-1 text-sm font-semibold text-cyan-400">
            Wellness Analytics
          </p>

          <h2 className="text-2xl font-bold">
            Burnout Score Trend
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Track how your burnout indicator changes between check-ins.
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-slate-400">
          {data.length}{" "}
          {data.length === 1
            ? "assessment"
            : "assessments"}
        </div>

      </div>

      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: -15,
              bottom: 0,
            }}
          >

            <defs>
              <linearGradient
                id="burnoutGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#22d3ee"
                  stopOpacity={0.3}
                />

                <stop
                  offset="95%"
                  stopColor="#22d3ee"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#1e293b"
              vertical={false}
            />

            <XAxis
              dataKey="chartLabel"
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
            />

            <YAxis
              domain={[0, 100]}
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#ffffff",
              }}
              labelStyle={{
                color: "#94a3b8",
              }}
              formatter={(value) => [
                `${value}%`,
                "Burnout Score",
              ]}
            />

            <Area
              type="monotone"
              dataKey="score"
              stroke="#22d3ee"
              strokeWidth={3}
              fill="url(#burnoutGradient)"
              activeDot={{
                r: 6,
                fill: "#22d3ee",
              }}
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* LEGEND */}

      <div className="mt-5 flex flex-wrap gap-5 border-t border-slate-800 pt-5 text-xs">

        <span className="text-green-400">
          ● Low risk
        </span>

        <span className="text-yellow-400">
          ● Moderate risk
        </span>

        <span className="text-red-400">
          ● High risk
        </span>

      </div>

    </div>
  );
}