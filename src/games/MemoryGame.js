import React, { useState, useEffect } from "react";
import "./MemoryGame.css";

const cardImages = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯"];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Card({ id, image, isSelected, isMatched, onClick }) {
  const classNames = ["card"];
  if (isSelected) classNames.push("selected");
  if (isMatched) classNames.push("matched");
  return (
    <div className={classNames.join(" ")} onClick={() => onClick(id)}>
      <div className="card-face card-front">??</div>
      <div className="card-face card-back">{isMatched ? image : ""}</div>
    </div>
  );
}

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [selectedCardIds, setSelectedCardIds] = useState([]);
  const [matchedCardIds, setMatchedCardIds] = useState([]);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const shuffledCards = shuffle(cardImages.concat(cardImages));
    setCards(shuffledCards.map((card) => ({ id: Math.random(), image: card })));
  }, []);

  function handleCardClick(cardId) {
    if (matchedCardIds.includes(cardId) || isFlipping) {
      return;
    }
    if (selectedCardIds.length === 0) {
      setSelectedCardIds([cardId]);
    } else {
      const [firstCardId] = selectedCardIds;
      const firstCard = cards.find((card) => card.id === firstCardId);
      const secondCard = cards.find((card) => card.id === cardId);
      setSelectedCardIds([firstCardId, cardId]);
      if (firstCard.image === secondCard.image) {
        setMatchedCardIds([...matchedCardIds, firstCardId, cardId]);
        setSelectedCardIds([]);
      } else {
        setIsFlipping(true);
        setTimeout(() => {
          setSelectedCardIds([]);
          setIsFlipping(false);
        }, 1000);
      }
    }
  }

  function isCardSelected(cardId) {
    return selectedCardIds.includes(cardId);
  }

  function isCardMatched(cardId) {
    return matchedCardIds.includes(cardId);
  }

  return (
    <div>
      <h1>Memory Game</h1>
      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            isSelected={isCardSelected(card.id)}
            isMatched={isCardMatched(card.id)}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default MemoryGame;
