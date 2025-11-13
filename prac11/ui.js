// ui.js — handles dynamic UI and responsive design behavior
import { logEvent } from './helper.js'; // ✅ added import

// Function to change background color and font size based on screen size 
export function handleViewportChange() { 
  if (window.innerWidth < 600) { 
    document.body.style.background = '#f0f8ff'; 
  } else { 
    document.body.style.background = 'white'; 
  }

  // ✅ NEW: change font size when width < 500px
  if (window.innerWidth < 500) {
    document.body.style.fontSize = '14px';
  } else {
    document.body.style.fontSize = '16px';
  }
} 

// Function to add dynamic behavior (event delegation) 
export function addDynamicSessions() { 
  const sessionsDiv = document.getElementById('sessions'); 

  sessionsDiv.addEventListener('click', (e) => { 
    if (e.target.classList.contains('session')) { 
      alert("You selected: " + e.target.textContent); 
      logEvent("User selected session: " + e.target.textContent);
    } 
  }); 
} 

// ✅ NEW: Add a session dynamically
export function enableAddSession() {
  const addBtn = document.getElementById('addSessionBtn');
  const sessionsDiv = document.getElementById('sessions');

  addBtn.addEventListener('click', () => {
    const time = prompt("Enter session time (HH:MM):");
    const name = prompt("Enter session name:");

    if (time && name) {
      const newSession = document.createElement('div');
      newSession.classList.add('session');
      newSession.setAttribute('data-time', time);
      newSession.textContent = `${name} - ${time}`;
      sessionsDiv.appendChild(newSession);
      logEvent(`Added new session: ${name} at ${time}`);
    } else {
      alert("Please enter both time and name!");
    }
  });
}
