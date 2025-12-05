class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          z-index: 50;
        }

        nav {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(15, 23, 42, 0.92);
          backdrop-filter: blur(18px);
          color: #e5e7eb;
          border-bottom: 1px solid rgba(148, 163, 184, 0.35);
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .nav-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0.45rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        /* Top bar */
        .nav-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .brand-icon {
          width: 28px;
          height: 28px;
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 20%, #a5b4fc, #4f46e5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.9rem;
          font-weight: bold;
          box-shadow: 0 10px 20px rgba(79, 70, 229, 0.5);
        }

        .brand-text-main {
          font-size: 1.1rem;
          font-weight: 800;
          color: #e5e7eb;
        }

        .brand-text-sub {
          font-size: 0.75rem;
          color: #9ca3af;
          margin-top: -4px;
        }

        .nav-top-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-greeting {
          font-size: 0.8rem;
          color: #9ca3af;
          max-width: 120px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: right;
        }

        .theme-toggle {
          width: 32px;
          height: 32px;
          border-radius: 9999px;
          border: 1px solid rgba(148, 163, 184, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(30, 41, 59, 0.9);
          cursor: pointer;
          transition: 0.2s;
        }

        .theme-toggle:hover {
          border-color: #a5b4fc;
          transform: translateY(-2px);
        }

        .theme-toggle svg {
          width: 18px;
          height: 18px;
        }

        /* Bottom tab bar */
        .nav-bottom-shell {
          position: relative;
          margin-top: 0.3rem;
        }

        .nav-bottom {
          border-radius: 9999px;
          background: rgba(15, 23, 42, 0.97);
          border: 1px solid rgba(55, 65, 81, 0.8);
          padding: 0.35rem 0.5rem;
          display: flex;
          justify-content: space-between;
          gap: 0.25rem;
        }

        .nav-item {
          flex: 1;
          text-align: center;
          text-decoration: none;
          color: #9ca3af;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.15rem;
          padding: 0.2rem 0;
          transition: color 0.2s;
        }

        .nav-item-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s;
        }

        .nav-item svg {
          width: 18px;
          height: 18px;
          stroke: currentColor;
          stroke-width: 1.8;
          fill: none;
        }

        .nav-label {
          font-size: 0.63rem;
        }

        .nav-item.active {
          color: white;
        }

        .nav-item.active .nav-item-icon-wrap {
          background: linear-gradient(135deg, #818cf8, #4f46e5);
          box-shadow: 0 10px 25px rgba(79, 70, 229, 0.7);
          transform: translateY(-3px);
        }

        /* Auth buttons */
        .nav-auth {
          margin-top: 0.25rem;
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
        }

        .auth-link {
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.8rem;
          cursor: pointer;
          border: 1px solid rgba(148, 163, 184, 0.6);
          background: transparent;
          color: white;
          text-decoration: none;
          transition: 0.2s;
        }

        .auth-link.primary {
          background: #4f46e5;
          border-color: #4f46e5;
        }

        .auth-link:hover {
          filter: brightness(1.1);
        }

        .hidden {
          display: none !important;
        }

        /* Mobile bottom-floating bar */
        @media (max-width: 767px) {
          .nav-bottom-shell {
            position: fixed;
            bottom: 0.7rem;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            max-width: 480px;
            padding: 0 1rem;
          }

          .nav-auth {
            display: none;
          }

          nav {
            position: fixed;
            top: 0;
          }
        }
      </style>

      <nav>
        <div class="nav-inner">
        
          <!-- TOP BAR -->
          <div class="nav-top">
            <a href="index.html" class="brand">
              <div class="brand-icon">H</div>
              <div>
                <div class="brand-text-main">HabitHero</div>
                <div class="brand-text-sub">Make progress daily</div>
              </div>
            </a>

            <div class="nav-top-right">
              <span id="nav-greeting" class="nav-greeting">Guest</span>
            </div>
          </div>

          <!-- BOTTOM TAB BAR -->
          <div class="nav-bottom-shell">
            <div class="nav-bottom">
              <!-- Home -->
              <a href="index.html" class="nav-item" data-tab="home">
                <div class="nav-item-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 10.5L12 3l9 7.5" />
                    <path d="M5 10v10h5v-6h4v6h5V10" />
                  </svg>
                </div>
                <span class="nav-label">Home</span>
              </a>

              <!-- Tasks -->
              <a href="tasks.html" class="nav-item" data-tab="tasks">
                <div class="nav-item-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="4" width="7" height="7" rx="1.5" />
                    <path d="M5 7.5l1.5 1.5L9 6" />
                    <rect x="14" y="4" width="7" height="7" rx="1.5" />
                    <rect x="3" y="13" width="7" height="7" rx="1.5" />
                    <rect x="14" y="13" width="7" height="7" rx="1.5" />
                  </svg>
                </div>
                <span class="nav-label">Tasks</span>
              </a>

              <!-- Habits -->
              <a href="habits.html" class="nav-item" data-tab="habits">
                <div class="nav-item-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 10a7 7 0 0 1 12-4" />
                    <polyline points="15 3 15 6 12 6" />
                    <path d="M21 14a7 7 0 0 1-12 4" />
                    <polyline points="9 21 9 18 12 18" />
                  </svg>
                </div>
                <span class="nav-label">Habits</span>
              </a>

              <!-- Rewards -->
              <a href="rewards.html" class="nav-item" data-tab="rewards">
                <div class="nav-item-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="8" width="18" height="13" rx="2" />
                    <path d="M3 12h18" />
                    <path d="M12 8v13" />
                    <path d="M7.5 8A2.5 2.5 0 1 1 10 5.5
                             C10 4 9 3 7.5 3
                             S5 4 5 5.5A2.5 2.5 0 0 0 7.5 8z" />
                    <path d="M16.5 8A2.5 2.5 0 1 0 14 5.5
                             C14 4 15 3 16.5 3
                             S19 4 19 5.5A2.5 2.5 0 0 1 16.5 8z" />
                  </svg>
                </div>
                <span class="nav-label">Rewards</span>
              </a>

              <!-- Calendar -->
              <a href="calendar.html" class="nav-item" data-tab="calendar">
                <div class="nav-item-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="17" rx="2" />
                    <path d="M16 3v4" />
                    <path d="M8 3v4" />
                    <path d="M3 10h18" />
                    <rect x="8" y="14" width="3" height="3" rx="0.5" />
                    <rect x="13" y="14" width="3" height="3" rx="0.5" />
                  </svg>
                </div>
                <span class="nav-label">Calendar</span>
              </a>

              <!-- Stats -->
              <a href="stats.html" class="nav-item" data-tab="stats">
                <div class="nav-item-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 19V9" />
                    <path d="M10 19V5" />
                    <path d="M16 19v-8" />
                    <path d="M22 19V7" />
                  </svg>
                </div>
                <span class="nav-label">Stats</span>
              </a>

              <!-- Profile -->
              <a href="profile.html" class="nav-item" data-tab="profile">
                <div class="nav-item-icon-wrap">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="3.2" />
                    <path d="M5 19.5a6.8 6.8 0 0 1 14 0" />
                  </svg>
                </div>
                <span class="nav-label">Profile</span>
              </a>
            </div>
          </div>

          <!-- LOGIN / LOGOUT SECTION -->
          <div class="nav-auth">
            <a id="nav-login" href="login.html" class="auth-link">Login</a>
            <a id="nav-signup" href="signup.html" class="auth-link primary">Sign Up</a>
            <button id="logout-btn" class="auth-link hidden">Logout</button>
          </div>
        </div>
      </nav>
    `;

    /* ---------------------------
       ACTIVE TAB HIGHLIGHT
    ----------------------------*/
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const tabs = this.shadowRoot.querySelectorAll(".nav-item");

    tabs.forEach((tab) => {
      if (tab.getAttribute("href") === currentPage) {
        tab.classList.add("active");
      }
    });

    /* ---------------------------
       AUTH LOGIC (Firebase)
    ----------------------------*/
    const greeting = this.shadowRoot.getElementById("nav-greeting");
    const loginBtn = this.shadowRoot.getElementById("nav-login");
    const signupBtn = this.shadowRoot.getElementById("nav-signup");
    const logoutBtn = this.shadowRoot.getElementById("logout-btn");

    if (typeof auth !== "undefined") {
      auth.onAuthStateChanged((user) => {
        if (user) {
          greeting.textContent = "Hi, " + (user.displayName || user.email || "Hero");
          loginBtn.classList.add("hidden");
          signupBtn.classList.add("hidden");
          logoutBtn.classList.remove("hidden");
        } else {
          greeting.textContent = "Guest";
          loginBtn.classList.remove("hidden");
          signupBtn.classList.remove("hidden");
          logoutBtn.classList.add("hidden");
        }
      });

      logoutBtn.addEventListener("click", async () => {
        await auth.signOut();
        window.location.href = "login.html";
      });
    }
  }
}

customElements.define("custom-navbar", CustomNavbar);