import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// Define keyframe animation for the header text
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

// Define styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  height: 100px;
  animation: ${pulse} 2s infinite;
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

const Section = styled.section`
  flex-basis: calc(50% - 20px);
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Home = () => {
  // Define colors for the sections
  const colors = ["#ff7f50", "#87ceeb", "#da70d6", "#ffd700"];

  return (
    <Container>
      <Header>
        <h1>Let's enjoy a simple game!</h1>
      </Header>
      <Main>
        <Section color={colors[0]}>
          <h2>Click The Button Game</h2>
          <Link to="/clickthebuttongame">
            <Button>PLAY</Button>
          </Link>
          <p>
            A simple game where you have to click the button as many times as
            possible in a given time.
          </p>
        </Section>
        <Section color={colors[1]}>
          <h2>ColorMatchGame</h2>
          <Link to="/colormatchgame">
            <Button>PLAY</Button>
          </Link>
          <p>
            A game where you have to match the colors of two tiles as fast as
            possible.
          </p>
        </Section>
        <Section color={colors[2]}>
          <h2>GuessGame</h2>
          <Link to="/guessgame">
            <Button>PLAY</Button>
          </Link>
          <p>
            A game where you have to guess the correct word based on the given
            clues.
          </p>
        </Section>
        <Section color={colors[3]}>
          <h2>Whack-a-Mole</h2>
          <Link to="/whack-a-mole">
            <Button>PLAY</Button>
          </Link>
          <p>
            A game where you have to hit the moles as they pop up from their
            holes.
          </p>
        </Section>
      </Main>
      <Footer>
        <p>Copyright &copy; 2023</p>
        <p>Specification | Contacts | SNS links</p>
      </Footer>
    </Container>
  );
};

export default Home;
