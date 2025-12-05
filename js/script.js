// Global application state persisted in localStorage
const STORAGE_KEY = 'habithero-data-v2';

const DEFAULT_STATE = {
  tasks: [],
  habits: [],
  events: [],
  xp: 0,
  streak: 0,
  theme: 'dark',
  level: 1,
 
  coins: 0,
  rewards: [],
  cosmetics: [],
  ownedCosmetics: [],
  equippedCosmetics: {}, // e.g. { avatarBorder: 'avatar-border-gold' }
};

let state = { ...DEFAULT_STATE };

// Load state from localStorage right away
(function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved && typeof saved === 'object') {
      state = { ...state, ...saved };
    }
  } catch (err) {
    console.error('Failed to load state from localStorage', err);
  }

  // Apply saved theme
  try {
    const html = document.documentElement;
    const theme = state.theme || 'dark';
    html.classList.toggle('dark', theme === 'dark');
  } catch (e) {
    // ignore
  }
})();

// Save state helper
function saveState() {
  try {
    const html = document.documentElement;
    state.theme = html.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save state to localStorage', err);
  }
}

// Helpers
function formatDate(dateString) {
  if (!dateString) return '';
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

function generateId() {
  return Date.now() + Math.floor(Math.random() * 100000);
}
