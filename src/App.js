import React from "react";

//Components
import MyNavbar from "./components/my-navbar/MyNavBar";
import TitleMessage from "./components/my-typewritereffect/TitleMessage";
import Background from "./components/my-background/Background";
import ScrollDown from "./components/my-scrolldown/ScrollDown";
import About from "./pages/About";
import Skills from "./components/my-skills/Skills";
import Projects from "./components/my-projects/Projects";
import Contact from "./components/my-contact/Contact";

import "./App.css";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div>
      <MyNavbar />
      <Background />
      <TitleMessage />
      <ScrollDown />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop smooth />
    </div>
  );
}

export default App;
