import React, { useState, useEffect } from "react";
import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  font-size: 24px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const ClickTheButtonGame = () => {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    let timer;
    if (gameStarted) {
      timer = setTimeout(() => {
        setGameStarted(false);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [gameStarted]);

  const handleButtonClick = () => {
    if (gameStarted) {
      setScore(score + 1);
    } else {
      setScore(0);
      setGameStarted(true);
    }
  };

  return (
    <GameContainer>
      <h1>Click The Button Game</h1>
      <p>Click the button as many times as possible in 10 seconds:</p>
      <GameBoard>
        <h2>Score: {score}</h2>
        <Button onClick={handleButtonClick}>
          {gameStarted ? "Click me!" : "Start the game"}
        </Button>
      </GameBoard>
    </GameContainer>
  );
};

export default ClickTheButtonGame;
