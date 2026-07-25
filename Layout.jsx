import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "▦",
    },
    {
      name: "Daily Check-In",
      path: "/checkin",
      icon: "✓",
    },
    {
      name: "History",
      path: "/history",
      icon: "↗",
    },
    {
      name: "AI Coach",
      path: "/coach",
      icon: "✦",
    },
  ];

  async function handleLogout() {
    try {
      await signOut(auth);
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  function getInitial() {
    if (user?.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }

    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }

    return "U";
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* SIDEBAR */}

      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-slate-800/80 bg-slate-950 lg:flex">

        {/* LOGO */}

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-3 border-b border-slate-800/80 px-6 py-6 text-left"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-xl font-black text-slate-950 shadow-lg shadow-cyan-500/10">
            M
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight">
              MindGuard
              <span className="text-cyan-400"> AI</span>
            </h1>

            <p className="mt-0.5 text-xs text-slate-500">
              Wellness Intelligence
            </p>
          </div>
        </button>

        {/* NAVIGATION */}

        <nav className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
            Workspace
          </p>

          <div className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/10"
                      : "text-slate-400 hover:bg-slate-900 hover:text-white"
                  }`
                }
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/10 text-base">
                  {item.icon}
                </span>

                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* USER */}

        <div className="border-t border-slate-800/80 p-4">
          {user && (
            <div className="mb-3 flex items-center gap-3 rounded-2xl bg-slate-900/80 p-3">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  referrerPolicy="no-referrer"
                  className="h-10 w-10 rounded-xl object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 font-bold text-cyan-400">
                  {getInitial()}
                </div>
              )}

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  {user.displayName || "MindGuard User"}
                </p>

                <p className="truncate text-xs text-slate-500">
                  {user.email}
                </p>
              </div>
            </div>
          )}

          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-800 px-4 py-3 text-sm font-semibold text-slate-400 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
          >
            <span>↪</span>
            Logout
          </button>
        </div>
      </aside>

      {/* MOBILE HEADER */}

      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-800 bg-slate-950/90 px-5 py-4 backdrop-blur lg:hidden">
        <button
          onClick={() => navigate("/dashboard")}
          className="text-lg font-bold"
        >
          MindGuard <span className="text-cyan-400">AI</span>
        </button>

        <div className="flex gap-2">
          <button
            onClick={() => navigate("/checkin")}
            className="rounded-lg bg-cyan-400 px-3 py-2 text-xs font-bold text-slate-950"
          >
            Check-In
          </button>

          <button
            onClick={handleLogout}
            className="rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-300"
          >
            Logout
          </button>
        </div>
      </header>

      {/* PAGE */}

      <main className="min-h-screen lg:ml-64">
        <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
          {children}
        </div>
      </main>
    </div>
  );
}