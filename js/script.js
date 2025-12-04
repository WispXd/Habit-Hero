
// Global state
const state = {
    tasks: [],
    habits: [],
    events: [],
    xp: 0,
    streak: 0,
    theme: 'dark',
    level: 1
};
// DOM Elements
const themeToggle = document.getElementById('theme-toggle');

// Initialize app
function init() {
    loadData();
    setupEventListeners();
    render();
}

// Load data from localStorage
function loadData() {
    const savedData = localStorage.getItem('habithero-data');
    if (savedData) {
        state = JSON.parse(savedData);
    } else {
        // Default data
        state = {
            tasks: [
                { 
                    id: 1, 
                    title: "Complete project proposal", 
                    due: new Date(Date.now() + 86400000).toISOString(), 
                    priority: "high", 
                    completed: false 
                },
                { 
                    id: 2, 
                    title: "Buy groceries", 
                    due: new Date(Date.now() + 172800000).toISOString(), 
                    priority: "medium", 
                    completed: false 
                },
                { 
                    id: 3, 
                    title: "Call mom", 
                    due: new Date(Date.now() + 259200000).toISOString(), 
                    priority: "low", 
                    completed: false 
                },
                { 
                    id: 4,
                    title: "Finish weekly report",
                    due: new Date(Date.now() + 432000000).toISOString(),
                    priority: "high",
                    completed: false
                },
                { 
                    id: 5,
                    title: "Schedule dentist appointment",
                    due: new Date(Date.now() + 345600000).toISOString(),
                    priority: "medium",
                    completed: false
                },
                { 
                    id: 6,
                    title: "Water plants",
                    due: new Date(Date.now() + 86400000).toISOString(),
                    priority: "low",
                    completed: false
                },
                { 
                    id: 7,
                    title: "Plan weekend trip",
                    due: new Date(Date.now() + 518400000).toISOString(),
                    priority: "medium",
                    completed: false
                },
                {
                    id: 8,
                    title: "Review meeting notes",
                    due: new Date(Date.now() + 86400000).toISOString(),
                    priority: "medium",
                    completed: false
                },
                {
                    id: 9,
                    title: "Pay electricity bill",
                    due: new Date(Date.now() + 172800000).toISOString(),
                    priority: "high",
                    completed: false
                },
                {
                    id: 10,
                    title: "Organize workspace",
                    due: new Date(Date.now() + 259200000).toISOString(),
                    priority: "low",
                    completed: false
                },
                {
                    id: 11,
                    title: "Update resume",
                    due: new Date(Date.now() + 604800000).toISOString(),
                    priority: "high",
                    completed: false
                },
                {
                    id: 12,
                    title: "Research vacation destinations",
                    due: new Date(Date.now() + 259200000).toISOString(),
                    priority: "low",
                    completed: false
                }
],
            habits: [
                { id: 1, title: "Morning Exercise", streak: 7, xp: 10, completedToday: false },
                { id: 2, title: "Read 30 minutes", streak: 3, xp: 5, completedToday: false },
                { id: 3, title: "Meditate", streak: 5, xp: 5, completedToday: false },
                { id: 4, title: "Drink 8 glasses of water", streak: 4, xp: 5, completedToday: false },
                { id: 5, title: "No caffeine after 2pm", streak: 2, xp: 8, completedToday: false },
                { id: 6, title: "Evening journaling", streak: 10, xp: 7, completedToday: false },
                { id: 7, title: "30 minute walk", streak: 5, xp: 6, completedToday: false },
                { id: 8, title: "Take vitamins", streak: 12, xp: 4, completedToday: false },
                { id: 9, title: "Floss teeth", streak: 8, xp: 3, completedToday: false },
                { id: 10, title: "Practice instrument", streak: 6, xp: 7, completedToday: false },
                { id: 11, title: "Learn new word", streak: 15, xp: 2, completedToday: false },
                { id: 12, title: "No screens before bed", streak: 4, xp: 6, completedToday: false },
                { id: 13, title: "Meal prep", streak: 3, xp: 8, completedToday: false },
                { id: 14, title: "Review goals", streak: 5, xp: 5, completedToday: false },
                { id: 15, title: "Connect with friend", streak: 2, xp: 4, completedToday: false }
],
            events: [
                {
                    id: 1,
                    title: "Team meeting",
                    start: new Date(Date.now() + 3600000 * 2).toISOString(),
                    end: new Date(Date.now() + 3600000 * 3).toISOString(),
                    backgroundColor: "#6366f1",
                    borderColor: "#6366f1"
                },
                {
                    id: 2,
                    title: "Dentist appointment",
                    start: new Date(Date.now() + 86400000 * 2 + 3600000 * 10).toISOString(),
                    end: new Date(Date.now() + 86400000 * 2 + 3600000 * 11).toISOString(),
                    backgroundColor: "#ec4899",
                    borderColor: "#ec4899"
                },
                {
                    id: 3,
                    title: "Weekly planning session",
                    start: new Date(Date.now() + 86400000 * 6 + 3600000 * 9).toISOString(),
                    end: new Date(Date.now() + 86400000 * 6 + 3600000 * 10).toISOString(),
                    backgroundColor: "#10b981",
                    borderColor: "#10b981"
                },
                {
                    id: 4,
                    title: "Yoga class",
                    start: new Date(Date.now() + 86400000 * 4 + 3600000 * 17).toISOString(),
                    end: new Date(Date.now() + 86400000 * 4 + 3600000 * 18).toISOString(),
                    backgroundColor: "#8b5cf6",
                    borderColor: "#8b5cf6"
                },
                {
                    id: 5,
                    title: "Birthday party",
                    start: new Date(Date.now() + 86400000 * 7 + 3600000 * 19).toISOString(),
                    end: new Date(Date.now() + 86400000 * 7 + 3600000 * 22).toISOString(),
                    backgroundColor: "#f59e0b",
                    borderColor: "#f59e0b"
                },
                {
                    id: 6,
                    title: "Doctor checkup",
                    start: new Date(Date.now() + 86400000 * 3 + 3600000 * 14).toISOString(),
                    end: new Date(Date.now() + 86400000 * 3 + 3600000 * 15).toISOString(),
                    backgroundColor: "#ec4899",
                    borderColor: "#ec4899"
                }
],
            xp: 1245,
            streak: 42,
            theme: 'dark',
            level: 5
};
        saveData();
    }

    // Apply theme
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('habithero-data', JSON.stringify(state));
}

// Setup event listeners
function setupEventListeners() {
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

// Toggle dark/light theme
function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
    saveData();
}
// Complete a task
function completeTask(taskId) {
    const task = state.tasks.find(t => t.id === taskId);
    if (task && !task.completed) {
        task.completed = true;
        state.xp += 20; // Award XP for task completion
        checkLevelUp();
        saveData();
        render();
    }
}

// Check if user leveled up
function checkLevelUp() {
    const xpNeeded = state.level * 100;
    if (state.xp >= xpNeeded) {
        state.level += 1;
        showLevelUpNotification();
        return true;
    }
    return false;
}

// Show level up notification
function showLevelUpNotification() {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(`Level Up! 🎉`, {
            body: `Congratulations! You've reached level ${state.level}`
        });
    }
}

// Request notification permission
function requestNotificationPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            console.log('Notification permission:', permission);
        });
    }
}

// Initialize notification permission on app start
document.addEventListener('DOMContentLoaded', requestNotificationPermission);
// Complete a habit
function completeHabit(habitId) {
    const habit = state.habits.find(h => h.id === habitId);
    if (habit && !habit.completedToday) {
        habit.completedToday = true;
        habit.streak += 1;
        state.xp += habit.xp;
        
        // Check if we should increase streak
        const allHabitsCompleted = state.habits.every(h => h.completedToday);
        if (allHabitsCompleted) {
            state.streak += 1;
        }
        
        saveData();
        render();
    }
}

// Render the app
function render() {
    // In a real app, this would update the DOM based on state
    console.log('Rendering with state:', state);
}
// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Helper function to format date
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });
}
