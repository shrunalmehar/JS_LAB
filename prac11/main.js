// Import functions from timer.js, ui.js, and helper.js 
import { startCountdown, highlightActiveSession } from './timer.js'; 
import { handleViewportChange, addDynamicSessions, enableAddSession } from './ui.js'; 
import { logEvent } from './helper.js'; // ✅ new import

// Select the countdown display element 
const countdownDisplay = document.getElementById('countdown'); 

// Start countdown for next class (e.g., 5 minutes = 300 seconds)
startCountdown(300, countdownDisplay); 

// Highlight the active session every minute 
setInterval(highlightActiveSession, 60000); 
highlightActiveSession(); 

// Handle screen resizing for responsive behavior 
window.addEventListener('resize', handleViewportChange); 
handleViewportChange(); 

// Enable event delegation and dynamic session addition 
addDynamicSessions(); 
enableAddSession();

logEvent("App initialized successfully");
