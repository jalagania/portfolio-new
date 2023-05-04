import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skillset from "./components/Skillset";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Skillset />
        <Projects />
      </main>
    </div>
  );
}

export default App;
