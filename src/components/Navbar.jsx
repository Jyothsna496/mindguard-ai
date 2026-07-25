export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 border-b border-slate-800">

      <h1 className="text-3xl font-bold text-cyan-400">
        MindGuard AI
      </h1>

      <div className="flex items-center gap-4">

        <button className="bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700 transition">
          🔔
        </button>

        <img
          src="https://i.pravatar.cc/40"
          className="rounded-full"
          alt="profile"
        />

      </div>

    </nav>
  );
}