import logo from './media/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <nav className="flex-row">
          <div class="logo-container">
            <img src={logo} alt="AuditAI Logo" />
            <h2>AUDIT</h2>
            <h1>AI</h1>
          </div>
          <div class="nav-links flex-row">
            <a href="#">Home</a>
            <a href="https://devpost.com">Devpost Submission</a>
            <a href="https://github.com/ukataria/Bitcamp2024">Github Repository</a>
            <a href="https://youtube.com">Youtube Video</a>
          </div>
      </nav>

      <div class="body">
        <h1>AUDIT AI</h1>
        <h2>CHAT, IS THIS REAL?</h2>
      </div>

      <div class = "game">
        <p>Welcome to Audit AI's Image guessing game! In the new world, with AI generators like DALLE 2 and Stable Diffusion, it bcomes increasingly hard to detect if an image is AI generated. Our trained ML model has an accuracy of 95% on this subset of 20 images, do you think you can do better? Start playing the game to find out, and realize just how good some AI images can get.</p>
        <h3>Correct Answers: 0</h3>
        <img src = "website/audit-ai/src/photos/pinterest-fake.jpg" alt="The Fake Image"/>
        <button>Real</button>
        <button>Fake</button>
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;