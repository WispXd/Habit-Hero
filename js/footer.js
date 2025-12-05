
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    background-color: white;
                    border-top: 1px solid #e5e7eb;
                    margin-top: 2rem;
                }
                
                .dark :host {
                    background-color: #1f2937;
                    border-top: 1px solid #374151;
                }
                footer {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 1.5rem 1rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    color: #374151;
                }
                .dark footer {
                    color: #111827;
                }
.footer-links {
                    display: flex;
                    gap: 1.5rem;
                    margin-bottom: 1rem;
                }
                
                .footer-link {
                    color: inherit;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                
                .footer-link:hover {
                    color: #6366f1;
                }
                
                .dark .footer-link:hover {
                    color: #a5b4fc;
                }
                
                .copyright {
                    font-size: 0.875rem;
                }
            </style>
            <footer>
                <div class="footer-links">
                    <a href="/about" class="footer-link">About</a>
                    <a href="/privacy" class="footer-link">Privacy</a>
                    <a href="/terms" class="footer-link">Terms</a>
                    <a href="/contact" class="footer-link">Contact</a>
                </div>
                <div class="copyright">
                    &copy; ${new Date().getFullYear()} HabitHero. All rights reserved.
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
