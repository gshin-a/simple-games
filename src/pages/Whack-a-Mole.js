import React, { useState, useEffect } from "react";
import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameBoard = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background-color: #e5e5e5;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
`;

const Mole = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: brown;
  border-radius: 50%;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
`;

const Score = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const WhackAMoleGame = () => {
  const [molePosition, setMolePosition] = useState({ top: 0, left: 0 });
  const [moleVisible, setMoleVisible] = useState(false);
  const [score, setScore] = useState(0);

  // Generate a random mole position and show the mole
  const showMole = () => {
    const top = Math.floor(Math.random() * 320) + 40;
    const left = Math.floor(Math.random() * 320) + 40;
    setMolePosition({ top, left });
    setMoleVisible(true);
  };

  // Hide the mole and reset its position
  const hideMole = () => {
    setMoleVisible(false);
    setMolePosition({ top: 0, left: 0 });
  };

  // Handle clicking on the mole
  const handleMoleClick = () => {
    setScore(score + 1);
    hideMole();
  };

  // Show the mole for a random amount of time, then hide it
  useEffect(() => {
    const showTime = Math.floor(Math.random() * 2000) + 1000;
    const hideTime = showTime + Math.floor(Math.random() * 2000) + 1000;
    const showTimeout = setTimeout(() => showMole(), showTime);
    const hideTimeout = setTimeout(() => hideMole(), hideTime);
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [moleVisible]);

  return (
    <GameContainer>
      <h1>Whack-a-Mole Game</h1>
      <p>Click on the mole to earn points!</p>
      <GameBoard>
        <Mole
          top={molePosition.top}
          left={molePosition.left}
          show={moleVisible}
          onClick={handleMoleClick}
        />
      </GameBoard>
      <Score>Score: {score}</Score>
    </GameContainer>
  );
};

export default WhackAMoleGame;
