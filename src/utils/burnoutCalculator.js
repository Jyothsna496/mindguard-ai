export function calculateBurnout(data) {
  let score = 0;

  // Sleep
  if (data.sleep < 5) score += 30;
  else if (data.sleep < 7) score += 15;

  // Stress
  score += Number(data.stress) * 4;

  // Mood (low mood = higher burnout)
  score += (10 - Number(data.mood)) * 3;

  // Work Hours
  if (data.workHours > 10) score += 20;
  else if (data.workHours > 8) score += 10;

  // Exercise
  if (!data.exercise) score += 10;

  // Screen Time
  if (data.screenTime > 8) score += 10;

  // Water Intake
  if (data.water < 2) score += 5;

  score = Math.min(score, 100);

  let risk = "";

  if (score < 35)
    risk = "Low";

  else if (score < 70)
    risk = "Moderate";

  else
    risk = "High";

  return {
    score,
    risk,
  };
}