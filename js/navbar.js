class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    background-color: white;
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
                }
                
                .dark :host {
                    background-color: #1f2937;
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
                }
                
                nav {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .logo {
                    display: flex;
                    align-items: center;
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: #6366f1;
                    text-shadow: 2px 2px 0 rgba(0,0,0,0.2);
                    transition: all 0.3s ease;
                }
                
                .logo:hover {
                    transform: translateY(-2px);
                    text-shadow: 3px 3px 0 rgba(0,0,0,0.2);
                }
.logo-icon {
                    margin-right: 0.5rem;
                }
                
                .nav-links {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }
                .nav-link {
                    color: #374151;
                    font-weight: 500;
                    transition: color 0.2s;
                    display: flex;
                    align-items: center;
                }
                
                .nav-link:hover {
                    color: #6366f1;
                }
                
                .nav-link i {
                    margin-right: 0.25rem;
                }
                .dark .nav-link {
                    color: #111827;
                }
.dark .nav-link:hover {
                    color: #4338ca;
                }
.theme-toggle {
                    background: none;
                    border: none;
                    color: #4b5563;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 0.375rem;
                    transition: all 0.2s;
                }
                
                .theme-toggle:hover {
                    background-color: #f3f4f6;
                    color: #6366f1;
                }
                
                .dark .theme-toggle {
                    color: #d1d5db;
                }
                
                .dark .theme-toggle:hover {
                    background-color: #374151;
                    color: #a5b4fc;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                }
            </style>
            <nav>
                <a href="/" class="logo">
                    <i data-feather="shield" class="logo-icon"></i>
                    HabitHero
                </a>
                <div class="nav-links">
                    <a href="/" class="nav-link">
                        <i data-feather="home"></i>
                        Dashboard
                    </a>
                    <a href="tasks.html" class="nav-link">
                        <i data-feather="check-circle"></i>
                        Tasks
                    </a>
                    <a href="habits.html" class="nav-link">
                        <i data-feather="repeat"></i>
                        Habits
                    </a>
                    <a href="rewards.html" class="nav-link">
                        <i data-feather="gift"></i>
                        Rewards
                    </a>
                    <a href="stats.html" class="nav-link">
                        <i data-feather="bar-chart-2"></i>
                        Stats
                    </a>
                    <a href="calendar.html" class="nav-link">
                        <i data-feather="calendar"></i>
                        Calendar
                    </a>
                    <a href="profile.html" class="nav-link">
                        <i data-feather="user"></i>
                        Profile
                    </a>
<button id="theme-toggle" class="theme-toggle">
                        <i data-feather="moon"></i>
                    </button>
                </div>
            </nav>
        `;
        
        // Initialize feather icons in shadow DOM
        const featherScript = document.createElement('script');
        featherScript.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
        this.shadowRoot.appendChild(featherScript);
        
        featherScript.onload = () => {
            if (window.feather) {
                window.feather.replace();
            }
            
            // Setup theme toggle
            const toggle = this.shadowRoot.getElementById('theme-toggle');
            if (toggle) {
                toggle.addEventListener('click', () => {
                    const event = new CustomEvent('theme-toggle', {
                        bubbles: true,
                        composed: true
                    });
                    this.dispatchEvent(event);
                });
            }
        };
    }
}

customElements.define('custom-navbar', CustomNavbar);