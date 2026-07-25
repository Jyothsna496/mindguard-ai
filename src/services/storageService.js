const STORAGE_KEY = "mindguardHistory";

export function getHistory() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveAssessment(assessment) {
  const history = getHistory();

  history.unshift(assessment);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(history)
  );
}

export function getLatestAssessment() {
  const history = getHistory();

  return history.length ? history[0] : null;
}

export function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);
}