import React, { useState } from 'react';
import logo from './media/logo.png';
import fake1 from './quizPhotos/fake1.jpg';
import fake5 from './quizPhotos/fake5.jpg';
import fake6 from './quizPhotos/fake6.jpg';
import fake7 from './quizPhotos/fake7.jpg';
import fake9 from './quizPhotos/fake9.jpg';
import fake10 from './quizPhotos/fake10.jpg';

import real3 from './quizPhotos/real3.jpg';
import real4 from './quizPhotos/real4.jpg';
import real5 from './quizPhotos/real5.jpg';
import real6 from './quizPhotos/real6.jpg';
import real9 from './quizPhotos/real9.jpg';
import real10 from './quizPhotos/real10.jpg';
import './App.css';

function App() {
  const quizPhotos = [
    { src: real3, isFake: true },
    { src: real4, isFake: true },
    { src: fake1, isFake: true },
    { src: real6, isFake: true },
    { src: fake5, isFake: true },
    { src: fake6, isFake: true },
    { src: fake7, isFake: true },
    { src: real9, isFake: true },
    { src: fake9, isFake: true },
    { src: real10, isFake: true },
    { src: fake10, isFake: true },
    { src: real5, isFake: true },
  ];

  const totalImages = quizPhotos.length;
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleButtonClick = (guess) => {
    const currentPhoto = quizPhotos[currentImageIndex];
    const isCorrect = currentPhoto.isFake === guess;

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    const nextIndex = currentImageIndex + 1;

    if (nextIndex == totalImages) {
      setGameOver(true); // Indicate the game has ended
    } else {
      setCurrentImageIndex(nextIndex);
    }
  };

  const calculatePercentageCorrect = () => {
    return (correctAnswers / totalImages) * 100;
  };

  const renderEndScreen = () => {
    const correctPercentage = calculatePercentageCorrect(); // Calculate the correct answer percentage
    const aiAccuracy = 95; // AI's accuracy benchmark
  
    let resultMessage = ''; // Initial result message
  
    if (correctPercentage > aiAccuracy) {
      resultMessage = 'You Win! You beat the AI!';
    } else {
      resultMessage = 'You Lose! The AI beat you!';
    }
  
    return (
      <div>
        <h2>{resultMessage}</h2>
        <p>You answered with {correctPercentage.toFixed(2)}% accuracy</p> {/* Display the player's accuracy */}
      </div>
    );
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
          {gameOver ? (
            <div className="end-screen"> {renderEndScreen()} </div>
          ) : (
            <div className="game">
              <div className="imgBox">
                <img src={quizPhotos[currentImageIndex].src} alt="Quiz Image" className="center-fit" />
              </div>
              <div className="buttons">
                <button onClick={() => handleButtonClick(true)}>AI GENERATED</button>
                <button onClick={() => handleButtonClick(false)}>MAN-MADE</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
