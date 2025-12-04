class GameCharacter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .character-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 100;
        }
        
        .character {
          width: 100px;
          height: 150px;
          background-image: url('http://static.photos/gaming/200x300/42');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: bottom;
          image-rendering: pixelated;
          transition: transform 0.3s ease;
        }
        
        .character:hover {
          transform: scale(1.1) translateY(-10px);
        }
        
        .speech-bubble {
          position: absolute;
          top: -60px;
          left: -150px;
          width: 200px;
          background: white;
          border: 3px solid black;
          border-radius: 10px;
          padding: 10px;
          font-family: 'Press Start 2P', cursive;
          font-size: 10px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .character:hover .speech-bubble {
          opacity: 1;
        }
      </style>
      <div class="character-container">
        <div class="character">
          <div class="speech-bubble">
            Keep going! You're doing great!
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('game-character', GameCharacter);