import React, { useState } from 'react';
import logo from './media/logo.png';
import fake1 from './quizPhotos/fake1.jpg';
import fake2 from './quizPhotos/fake2.jpg';
import fake5 from './quizPhotos/fake5.jpg';
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
    { src: fake1, isFake: true },
    { src: fake2, isFake: true },
    { src: fake5, isFake: true },
    { src: fake7, isFake: true },
    { src: fake9, isFake: true },
    { src: fake10, isFake: true },
    { src: real3, isFake: false },
    { src: real4, isFake: false },
    { src: real5, isFake: false },
    { src: real6, isFake: false },
    { src: real9, isFake: false },
    { src: real10, isFake: false },
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

    if (nextIndex >= totalImages) {
      setGameOver(true); // Game ends when all images have been displayed
    } else {
      setCurrentImageIndex(nextIndex); // Move to the next image
    }
  };

  const calculatePercentageCorrect = () => {
    return (correctAnswers / totalImages) * 100; // Calculate accuracy
  };

  const renderEndScreen = () => {
    const correctPercentage = calculatePercentageCorrect();
    const aiAccuracy = 95;

    let resultMessage = ''; // Initialize the result message

    if (correctPercentage > aiAccuracy) {
      resultMessage = 'You Win! You beat the AI!';
    } else {
      resultMessage = 'You Lose! The AI beat you!';
    }

    return (
      <div> {/* Ensures the end screen has the correct styling */}
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
              Welcome to Audit AI's Image guessing game! With AI generators like DALLE 2 and Stable Diffusion, it's increasingly hard to detect if an image is AI-generated. Our trained ML model has 94% accuracy on this subset of 16 images. Can you do better? Start playing to find out.
            </p>
            <h3>Correct Answers: {correctAnswers}</h3>
          </div>
        </div>

        <div className="column2">
          {gameOver ? (
            <div className="end-screen"> {/* Ensures the end screen has the correct styling */}
              {renderEndScreen()} {/* Show the end screen when the game ends */}
            </div>
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
