import React, { useState, useEffect } from "react";
import styled from "styled-components";

const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 10px;
  margin-top: 20px;
`;

const ColorOption = styled.div`
  background-color: ${(props) => props.color};
  height: 100px;
  cursor: pointer;
`;

const ColorMatchGame = () => {
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Set the target color to match
  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
  }, []);

  // Handle clicking on a color option
  const handleColorClick = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      if (score + 1 === 5) {
        setGameOver(true);
        setTimeout(() => {
          setScore(0);
          setGameOver(false);
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          setTargetColor(randomColor);
        }, 5000);
      } else {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setTargetColor(randomColor);
      }
    } else {
      setScore(0);
    }
  };

  return (
    <GameContainer>
      <h1>Color Match Game</h1>
      <p>Select the color that matches the target color:</p>
      <h2>{targetColor}</h2>
      <GameBoard>
        {colors.map((color) => (
          <ColorOption
            key={color}
            color={color}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </GameBoard>
      <p>Score: {score}</p>
      {gameOver && (
        <div>
          <p>YOU WIN!</p>
          <button onClick={() => setScore(0)}>TRY AGAIN?</button>
        </div>
      )}
    </GameContainer>
  );
};

export default ColorMatchGame;
