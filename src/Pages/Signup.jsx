import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";

import {
  auth,
  googleProvider,
} from "../services/firebase";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();

    setError("");

    if (password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    setLoading(true);

    try {
      const credential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await updateProfile(
        credential.user,
        {
          displayName: name,
        }
      );

      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      if (err.code === "auth/email-already-in-use") {
        setError(
          "An account already exists with this email."
        );
      } else if (err.code === "auth/invalid-email") {
        setError("Enter a valid email address.");
      } else {
        setError(
          "Unable to create your account. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignup() {
    setError("");
    setLoading(true);

    try {
      await signInWithPopup(
        auth,
        googleProvider
      );

      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      setError(
        "Google sign-in failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white flex items-center justify-center p-6">

      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400">
            🧠 MindGuard AI
          </h1>

          <p className="text-slate-400 mt-3">
            Start tracking your wellness.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-2">
            Create Account
          </h2>

          <p className="text-slate-400 mb-7">
            Create your MindGuard account.
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-300 rounded-xl p-3 mb-5">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSignup}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
                placeholder="Your name"
                className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
                placeholder="you@example.com"
                className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
                minLength={6}
                placeholder="At least 6 characters"
                className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none rounded-xl p-3"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-slate-950 py-3 rounded-xl font-bold transition"
            >
              {loading
                ? "Creating account..."
                : "Create Account"}
            </button>

          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="h-px bg-slate-700 flex-1" />

            <span className="text-slate-500 text-sm">
              OR
            </span>

            <div className="h-px bg-slate-700 flex-1" />
          </div>

          <button
            onClick={handleGoogleSignup}
            disabled={loading}
            className="w-full bg-white hover:bg-slate-100 text-slate-900 py-3 rounded-xl font-semibold transition"
          >
            Continue with Google
          </button>

          <p className="text-center text-slate-400 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-cyan-400 font-semibold"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}