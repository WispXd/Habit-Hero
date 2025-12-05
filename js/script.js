// Global state persisted in localStorage
// Global state persisted in localStorage
const STORAGE_KEY = 'habithero-data-v2';

let state = {
  tasks: [],
  habits: [],
  events: [],
  xp: 0,
  coins: 0,                   
  streak: 0,
  theme: 'dark',
  level: 1,
  ownedCosmetics: ['avatar-border-default'], 
  equippedCosmetics: {                      
    avatarBorder: 'avatar-border-default',
  },
};

// Load state immediately
(function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      state = { ...state, ...saved };
    }
  } catch (e) {
    console.error('Failed to load saved data, starting fresh', e);
  }
  applyTheme();
})();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save data', e);
  }
}

// Theme handling
function applyTheme() {
  const root = document.documentElement;
  root.classList.toggle('dark', state.theme === 'dark');
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  saveState();
}

// Listen for theme-toggle event from navbar
document.addEventListener('theme-toggle', () => {
  toggleTheme();
});

// Generic helpers used by pages
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