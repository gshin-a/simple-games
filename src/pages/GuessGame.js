import React, { useState, useEffect } from "react";
import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameBoard = styled.div`
  margin-top: 20px;
`;

const GuessInput = styled.input`
  margin-right: 10px;
`;

const GuessButton = styled.button`
  background-color: #0077cc;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const GuessGame = () => {
  const [number, setNumber] = useState(null);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  // Set the random number to guess
  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    setNumber(randomNum);
  }, []);

  // Handle submitting a guess
  const handleGuessSubmit = (event) => {
    event.preventDefault();
    if (guess === "") {
      setFeedback("Please enter a number.");
    } else if (guess == number) {
      setFeedback(`Congratulations! ${guess} is the correct number!`);
      setGuess("");
    } else {
      setFeedback(`Sorry, ${guess} is not the correct number. Try again.`);
      setGuess("");
    }
  };

  return (
    <GameContainer>
      <h1>Guess the Number</h1>
      <p>Guess a number between 1 and 10:</p>
      <GameBoard>
        <form onSubmit={handleGuessSubmit}>
          <GuessInput
            type="number"
            min="1"
            max="10"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <GuessButton type="submit">Guess</GuessButton>
        </form>
        {feedback && <p>{feedback}</p>}
      </GameBoard>
    </GameContainer>
  );
};

export default GuessGame;
