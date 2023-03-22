// 요청할 때 팁: React 혹은 javascript, html 등으로 코드를 작성해달라고 할때 css code를 따로 만들어달라고 하는 것보다는 styled-component처럼 같은 파일에 내장되어 있는 형태를 요구해야 정확성이 높아진다.

요청:
make simple game code using React and styled-components

응답:
색상 맞추기 게임을 출력함

요청:(조건설정)
At 5 points, "YOU WIN" appears for 5 seconds and the game ends. And the TRY AGAIN button pops up again as the phrase "Will you start the game?" You need to change the code like this

요청:
make another simple game code using React and styled-components
(3번 요청)

출력:
pages폴더의 게임파일 총4개

- 코드 + 게임에 대한 설명 + 코드에 대한 설명을 출력함

요청:
Create a web page using React and styled-component

- The page consists of a header, a main section, and a footer.
- HEADER: "Let's enjoy a simple game!" written in big letters width:100%. The animation effect of getting bigger and smaller
- Main section: The main section occupies the entire screen except the header. It is divided into four sections. The upper left section has the words "Click The Button Game" written on it, and a button underneath it. Below the button is a brief description of ClickTheButtonGame. Click the button to go to the ClickTheButtonGame.js page. The upper right section has the words "ColorMatchGame" written on it, and there is a button underneath it.Below the button is a brief description of the ColorMatchGame. Click the button to go to the ColorMatchGame.js page. The lower left section has the word "GuessGame" written on it, and there is a button underneath it. There is a brief description of GuessGame under the button.Clicking the button takes you to the GuessGame.js page. The lower right section has the words "Whack-a-Mole" written on it, and there is a button underneath it. Below the button is a brief description of the Whack-a-Mole. Clicking the button takes you to the Whack-a-Mole.js page. The background of each section is random color. Mouse hover on each section has a slightly larger animation effect.
- Footer: located at the bottom of the page. There are specification, contacts, sns links, etc. about copyright.

React와 styled-component를 사용해서 웹페이지를 제작해라

- 그 페이지는 헤더, 메인섹션, 푸터로 구성되어 있다.
- 헤더: "간단한 게임을 즐기자!"라는 문구가 width:100%으로 크게 적혀있음. 커졌다 작아졌다 하는 애니메이션 효과
- 메인섹션: 메인 섹션은 헤더를 제외한 화면 전체를 차지함. 4개의 섹션으로 4분할되어 있음. 왼쪽 위 섹션은 "ClickTheButtonGame"이라는 글자가 적혀져있고, 글자 밑에는 버튼이 있음. 버튼 밑에는 ClickTheButtonGame에 대한 간략한 설명이 있음. 버튼을 클릭하면 ClickTheButtonGame.js 페이지로 이동함. 오른쪽 위 섹션은 "ColorMatchGame"이라는 글자가 적혀져있고, 글자 밑에는 버튼이 있음.버튼 밑에는 ColorMatchGame에 대한 간략한 설명이 있음. 버튼을 클릭하면 ColorMatchGame.js 페이지로 이동함. 왼쪽 밑 섹션은 "GuessGame"이라는 글자가 적혀져있고, 글자 밑에는 버튼이 있음. 버튼 밑에는 GuessGame에 대한 간략한 설명이 있음.버튼을 클릭하면 GuessGame.js 페이지로 이동함. 오른쪽 밑 섹션은 "Whack-a-Mole"이라는 글자가 적혀져있고, 글자 밑에는 버튼이 있음. 버튼 밑에는 Whack-a-Mole에 대한 간략한 설명이 있음.버튼을 클릭하면 Whack-a-Mole.js 페이지로 이동함. 각각의 섹션의 배경은 랜덤색임. 각각의 섹션에 마우스호버를 하면 약간 커지는 애니메이션 효과가 있음.
- 푸터: 저작권에 대한 명시와 연락처, sns링크 등이 있음.

출력:
버튼 링크를 제외하고 요구사항이 들어있는 코드 생성 -> Home.js

![캡쳐](/src/images/image1.PNG)

요청:(버튼에 각 게임 페이지로 이동하는 기능을 추가해달라는 요청)
As you can see in the code below, I connected each game file to the router in the app file. Modify the Home.js code by adding a function to move to each game on each button.

import ColorMatchGame from "./pages/ColorMatchGame ";
import ClickTheButtonGame from "./pages/ClickTheButtonGame";
import GuessGame from "./pages/GuessGame";
import WhackAMoleGame from "./pages/Whack-a-Mole";
import Home from "./pages/Home";

function App() {
return (

<div className="App">
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/clickthebuttongame" element={<ClickTheButtonGame />} />
<Route path="/colormatchgame" element={<ColorMatchGame />} />
<Route path="/guessgame" element={<GuessGame />} />
<Route path="/whack-a-mole" element={<WhackAMoleGame />} />
</Routes>
</BrowserRouter>
</div>
);
}

Home.js:

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
<Button>Play</Button>
<p>
A simple game where you have to click the button as many times as
possible in a given time.
</p>
</Section>
<Section color={colors[1]}>
<h2>ColorMatchGame</h2>
<Button>Play</Button>
<p>
A game where you have to match the colors of two tiles as fast as
possible.
</p>
</Section>
<Section color={colors[2]}>
<h2>GuessGame</h2>
<Button>Play</Button>
<p>
A game where you have to guess the correct word based on the given
clues.
</p>
</Section>
<Section color={colors[3]}>
<h2>Whack-a-Mole</h2>
<Button>Play</Button>
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

출력:
![캡쳐](/src/images/image2.PNG)
