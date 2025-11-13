// timer.js — contains countdown and session highlight logic 
import { formatTime, logEvent } from './helper.js'; // ✅ added import

// Function to start a countdown timer 
export function startCountdown(duration, display) { 
  let time = duration; // time in seconds 

  const timer = setInterval(() => { 
    // use helper for formatted time
    display.textContent = `Next session starts in ${formatTime(time)}`; 

    // ✅ NEW: change color when less than 1 minute
    if (time < 60 && time >= 0) {
      display.classList.add('warning');
    } else {
      display.classList.remove('warning');
    }

    time--; // decrease the timer each second 

    // Stop timer when it reaches 0 
    if (time < 0) { 
      clearInterval(timer); 
      display.textContent = "Session Started!"; 
      display.classList.remove('warning');
      logEvent("Countdown finished");
    } 
  }, 1000); 

  logEvent("Countdown started");
} 

// Function to highlight the currently active session 
export function highlightActiveSession() { 
  const sessions = document.querySelectorAll('.session'); 
  const now = new Date(); 
  const currentHour = now.getHours(); 

  sessions.forEach(session => { 
    const hour = parseInt(session.dataset.time.split(':')[0]); 
    if (hour === currentHour) { 
      session.classList.add('active'); 
    } else { 
      session.classList.remove('active'); 
    } 
  }); 

  logEvent("Highlighted active session");
}
