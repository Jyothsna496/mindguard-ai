import { useState } from "react";
import Layout from "../components/Layout";
import { getLatestAssessment } from "../services/storageService";
import { getWellnessAdvice } from "../services/geminiService";

export default function AICoach() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm your MindGuard AI Coach 🧠. Ask me about stress, sleep, workload, focus, or your latest wellness assessment.",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // --------------------------------------------------
  // SEND MESSAGE
  // --------------------------------------------------

  async function handleSubmit(e) {
    e.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || loading) {
      return;
    }

    setError("");

    // Add user's message to chat
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: trimmedMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      // Get latest assessment from localStorage
      const latestAssessment = getLatestAssessment();

      console.log(
        "Latest assessment sent to AI:",
        latestAssessment
      );

      // Send user question + assessment to Gemini
      const response = await getWellnessAdvice(
        trimmedMessage,
        latestAssessment
      );

      // Add Gemini response to chat
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: response,
        },
      ]);
    } catch (err) {
      console.error("AI Coach Error:", err);

      setError(
        err?.message ||
          "MindGuard AI could not generate a response. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  // --------------------------------------------------
  // QUICK PROMPTS
  // --------------------------------------------------

  function handleQuickPrompt(prompt) {
    setMessage(prompt);
    setError("");
  }

  return (
    <Layout>

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-white">
            🤖 AI Wellness Coach
          </h1>

          <p className="text-slate-400 mt-2">
            Get personalized wellness guidance based on your
            latest MindGuard assessment.
          </p>

        </div>


        {/* QUICK PROMPTS */}

        <div className="grid md:grid-cols-3 gap-4 mb-8">

          {/* Analyze Wellness */}

          <button
            type="button"
            onClick={() =>
              handleQuickPrompt(
                "What should I improve based on my latest assessment?"
              )
            }
            className="bg-slate-900 border border-slate-800 hover:border-cyan-400 rounded-xl p-5 text-left transition"
          >

            <p className="text-lg font-semibold text-white">
              📊 Analyze My Wellness
            </p>

            <p className="text-sm text-slate-400 mt-2">
              Review my latest assessment and tell me what
              I should improve.
            </p>

          </button>


          {/* Stress */}

          <button
            type="button"
            onClick={() =>
              handleQuickPrompt(
                "Based on my latest assessment, how can I reduce my stress today?"
              )
            }
            className="bg-slate-900 border border-slate-800 hover:border-cyan-400 rounded-xl p-5 text-left transition"
          >

            <p className="text-lg font-semibold text-white">
              🌿 Reduce Stress
            </p>

            <p className="text-sm text-slate-400 mt-2">
              Get practical actions to manage today's stress.
            </p>

          </button>


          {/* Sleep */}

          <button
            type="button"
            onClick={() =>
              handleQuickPrompt(
                "Analyze my sleep from my latest assessment and tell me how I can improve it."
              )
            }
            className="bg-slate-900 border border-slate-800 hover:border-cyan-400 rounded-xl p-5 text-left transition"
          >

            <p className="text-lg font-semibold text-white">
              😴 Improve Sleep
            </p>

            <p className="text-sm text-slate-400 mt-2">
              Get personalized suggestions for better sleep.
            </p>

          </button>

        </div>


        {/* CHAT CONTAINER */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">

          {/* CHAT HEADER */}

          <div className="border-b border-slate-800 px-6 py-4">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                🧠
              </div>

              <div>

                <h2 className="font-bold text-white">
                  MindGuard AI
                </h2>

                <p className="text-xs text-green-400">
                  ● AI Coach Online
                </p>

              </div>

            </div>

          </div>


          {/* MESSAGES */}

          <div className="p-6 min-h-[420px] max-h-[550px] overflow-y-auto space-y-5">

            {messages.map((chat, index) => (

              <div
                key={index}
                className={`flex ${
                  chat.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-5 py-4 ${
                    chat.role === "user"
                      ? "bg-cyan-500 text-slate-950"
                      : "bg-slate-800 text-slate-100"
                  }`}
                >

                  {/* AI Label */}

                  {chat.role === "assistant" && (

                    <p className="text-cyan-400 font-semibold mb-2">
                      🧠 MindGuard AI
                    </p>

                  )}


                  {/* MESSAGE */}

                  <p className="whitespace-pre-wrap leading-relaxed">
                    {chat.text}
                  </p>

                </div>

              </div>

            ))}


            {/* LOADING */}

            {loading && (

              <div className="flex justify-start">

                <div className="bg-slate-800 rounded-2xl px-5 py-4">

                  <p className="text-cyan-400 font-semibold mb-2">
                    🧠 MindGuard AI
                  </p>

                  <div className="flex items-center gap-2">

                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>

                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>

                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>

                    <span className="text-slate-400 ml-2">
                      Analyzing your wellness...
                    </span>

                  </div>

                </div>

              </div>

            )}

          </div>


          {/* ERROR */}

          {error && (

            <div className="mx-6 mb-5 bg-red-500/10 border border-red-500/30 text-red-300 rounded-xl p-4">

              <p className="font-semibold mb-1">
                Unable to generate response
              </p>

              <p className="text-sm">
                {error}
              </p>

            </div>

          )}


          {/* MESSAGE INPUT */}

          <form
            onSubmit={handleSubmit}
            className="border-t border-slate-800 p-5"
          >

            <div className="flex gap-3">

              <input
                type="text"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                placeholder="Ask about your stress, sleep, burnout..."
                disabled={loading}
                className="flex-1 bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none rounded-xl px-5 py-3 text-white placeholder:text-slate-500 disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={
                  loading || !message.trim()
                }
                className="bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-700 disabled:text-slate-500 text-slate-950 px-7 py-3 rounded-xl font-bold transition"
              >

                {loading
                  ? "Thinking..."
                  : "Send"}

              </button>

            </div>

          </form>

        </div>


        {/* INFO */}

        <div className="mt-5 text-center">

          <p className="text-xs text-slate-500">
            MindGuard AI provides general wellness guidance based
            on your assessment data and is not a substitute for
            professional medical advice.
          </p>

        </div>

      </div>

    </Layout>
  );
}