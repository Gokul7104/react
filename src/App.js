import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameStatus, setGameStatus] = useState('');
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');

  const handleRock = () => {
    setPlayerChoice('rock');
    playGame();
  };

  const handlePaper = () => {
    setPlayerChoice('paper');
    playGame();
  };

  const handleScissors = () => {
    setPlayerChoice('scissors');
    playGame();
  };

  const playGame = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoiceIndex = Math.floor(Math.random() * 3);
    setComputerChoice(choices[computerChoiceIndex]);

    if (playerChoice === computerChoice) {
      setGameStatus('Tie!');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setPlayerScore(playerScore + 1);
      setGameStatus('You win!');
    } else {
      setComputerScore(computerScore + 1);
      setGameStatus('Computer wins!');
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Rock, Paper, Scissors</h1>
      <div className="scoreboard">
        <div className="player-score">
          <p>Player Score:</p>
          <span className="score">{playerScore}</span>
        </div>
        <div className="computer-score">
          <p>Computer Score:</p>
          <span className="score">{computerScore}</span>
        </div>
      </div>
      <p className="game-status">{gameStatus}</p>
      <div className="choices">
        <div className="player-choice">
          {playerChoice === 'rock' && <img src="https://tse3.mm.bing.net/th?id=OIP.jKfW0bPrqbk3Z-7xPSjnbwHaH0&pid=Api&P=0&h=180" alt="Rock" />}
          {playerChoice === 'paper' && <img src="https://www.pngitem.com/pimgs/m/592-5920636_rock-paper-scissors-clipart-rock-paper-scissors-png.png" alt="Paper" />}
          {playerChoice === 'scissors' && <img src="https://tse4.mm.bing.net/th?id=OIP.FBgTsXOFehZ_imMmjo97RQHaFS&pid=Api&P=0&h=180" alt="Scissors" />}
        </div>
        <div className="computer-choice">
          {computerChoice === 'rock' && <img src="https://tse3.mm.bing.net/th?id=OIP.jKfW0bPrqbk3Z-7xPSjnbwHaH0&pid=Api&P=0&h=180" alt="Rock" />}
          {computerChoice === 'paper' && <img src="https://www.pngitem.com/pimgs/m/592-5920636_rock-paper-scissors-clipart-rock-paper-scissors-png.png" alt="Paper" />}
          {computerChoice === 'scissors' && <img src="https://tse4.mm.bing.net/th?id=OIP.FBgTsXOFehZ_imMmjo97RQHaFS&pid=Api&P=0&h=180" alt="Scissors" />}
        </div>
      </div>
      <div className="buttons">
        <button className="play-button" onClick={handleRock}>
          Rock
        </button>
        <button className="play-button" onClick={handlePaper}>
          Paper
        </button>
        <button className="play-button" onClick={handleScissors}>
          Scissors
        </button>
      </div>
    </div>
  );
};

export default App;