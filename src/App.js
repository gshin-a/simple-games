import { BrowserRouter, Routes, Route } from "react-router-dom";

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

export default App;
