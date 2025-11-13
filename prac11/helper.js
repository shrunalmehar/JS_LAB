// helper.js — helper functions for formatting and logging

// Format time (seconds → mm:ss)
export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' + secs : secs}`;
}

// Simple event logger
export function logEvent(message) {
  const now = new Date().toLocaleTimeString();
  console.log(`[${now}] ${message}`);
}

