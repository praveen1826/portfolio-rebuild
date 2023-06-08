import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Projects from "./components/Projects";
import { BrowserRouter } from "react-router-dom";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
