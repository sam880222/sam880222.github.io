import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./containers/About";
import Home from "./containers/Home";
import "./style.css";
import "animate.css";
import Experience from "./containers/Experience";
import Projects from "./containers/Projects";
import Skills from "./containers/Skills";
import Education from "./containers/Education";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
