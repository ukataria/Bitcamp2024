import React, { useState } from 'react';
import logo from './media/logo.png';
import hackathonFake from './quizPhotos/hackathon-fake.webp';
import sauronFake from './quizPhotos/sauron-fake.jpeg';
import sauronReal from './quizPhotos/sauron-real.webp';
import './App.css';

function App() {
  const quizPhotos = [
    { src: hackathonFake, isFake: true },
    { src: sauronFake, isFake: true },
    { src: sauronReal, isFake: false },
  ];

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleButtonClick = (guess) => {
    const currentPhoto = quizPhotos[currentImageIndex];
    const isCorrect = currentPhoto.isFake === guess;

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    // Move to the next image, looping back to the beginning
    const nextIndex = (currentImageIndex + 1) % quizPhotos.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div className="App">
      <nav className="flex-row">
        <div className="logo-container">
          <img src={logo} alt="AuditAI Logo" />
          <h2>AUDIT</h2>
          <h1>AI</h1>
        </div>
        <div className="nav-links flex-row">
          <a href="#">Home</a>
          <a href="https://devpost.com">Devpost Submission</a>
          <a href="https://github.com/ukataria/Bitcamp2024">Github Repository</a>
          <a href="https://youtube.com">Youtube Video</a>
        </div>
      </nav>

      <div className="container">
        <div className="column1">
          <div className="body">
            <h1>AUDIT AI</h1>
            <h2>CHAT, IS THIS REAL?</h2>
          </div>
          <div className="left-box">
            <p>
              Welcome to Audit AI's Image guessing game! With AI generators like DALLE 2 and Stable Diffusion, it's increasingly hard to detect if an image is AI-generated. Our trained ML model has 95% accuracy on this subset of 20 images. Can you do better? Start playing to find out.
            </p>
            <h3>Correct Answers: {correctAnswers}</h3>
          </div>
        </div>
        <div className="column2">
          <div className="game">
            <div className="imgBox">
              <img src={quizPhotos[currentImageIndex].src} alt="Quiz Image" className="center-fit" />
            </div>
            <div className="buttons">
              <button onClick={() => handleButtonClick(true)}>Fake</button>
              <button onClick={() => handleButtonClick(false)}>Real</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
