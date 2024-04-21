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
