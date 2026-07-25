import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = apiKey
  ? new GoogleGenAI({ apiKey })
  : null;

export async function getWellnessAdvice(
  message,
  assessment = null
) {
  if (!ai) {
    throw new Error(
      "Gemini API key is missing. Check your .env file."
    );
  }

  // Build assessment information
  const assessmentContext = assessment
    ? `
LATEST WELLNESS ASSESSMENT

Burnout Score: ${assessment.score}%
Risk Level: ${assessment.risk}

Sleep: ${assessment.sleep} hours
Stress: ${assessment.stress}/10
Mood: ${assessment.mood}/10
Work Hours: ${assessment.workHours} hours
Screen Time: ${assessment.screenTime} hours
Water Intake: ${assessment.water} litres
Exercise Today: ${assessment.exercise ? "Yes" : "No"}

Journal:
${assessment.journal?.trim() || "No journal entry provided."}

Assessment Date:
${assessment.date || "Unknown"}

Assessment Time:
${assessment.time || "Unknown"}
`
    : `
NO WELLNESS ASSESSMENT AVAILABLE

The user has not completed a wellness assessment yet.
`;

  const prompt = `
You are MindGuard AI, an AI wellness coach built into a burnout-awareness application.

Your role is to help users understand their wellness patterns and provide practical, supportive suggestions.

${assessmentContext}

USER MESSAGE

${message}

INSTRUCTIONS

Use the wellness assessment above when it is relevant to the user's question.

If the user asks about their burnout risk, wellness, stress, sleep, mood, workload, screen time, hydration, exercise, or latest assessment, explain your answer using their actual assessment values.

For example, instead of saying:
"Try to get more sleep."

Prefer:
"You reported 5 hours of sleep, which may be contributing to your current wellness score. Consider aiming for a more consistent sleep schedule."

Do not invent assessment values.

If no assessment is available, tell the user that completing a Daily Wellness Check would allow you to provide more personalized guidance.

Keep responses concise and easy to understand.

When appropriate:
1. Briefly explain what stands out.
2. Identify the most important factors.
3. Give 2-4 realistic actions the user can take.

Important safety rules:
- Do not diagnose medical or mental health conditions.
- Do not describe the burnout score as a medical diagnosis.
- Do not prescribe medication or treatment.
- Do not claim that MindGuard can predict a medical condition with certainty.
- Encourage professional support when a situation appears beyond general wellness guidance.

Answer the user's message now.
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);

    throw new Error(
      "MindGuard AI could not generate a response. Please try again."
    );
  }
}