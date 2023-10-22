import Topbar from "./Components/topbar/Topbar";
import Menu from "./Components/menu/Menu";
import Home from "./Components/home/Home";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Achievements from "./Components/achievements/Achievements";
import Contact from "./Components/contact/Contact";
import "./App.css";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Home />
        <Intro />
        <Portfolio />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
}

export default App;
