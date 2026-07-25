export default function StatCard({
  title,
  value,
  color = "text-white",
  icon = "●",
  subtitle,
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/20">

      {/* Glow */}

      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/5 blur-2xl transition group-hover:bg-cyan-400/10" />

      <div className="relative">

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-400">
            {title}
          </p>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-sm text-cyan-400">
            {icon}
          </div>
        </div>

        <p className={`text-3xl font-bold tracking-tight ${color}`}>
          {value}
        </p>

        {subtitle && (
          <p className="mt-2 text-xs text-slate-500">
            {subtitle}
          </p>
        )}

      </div>
    </div>
  );
}