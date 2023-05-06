import "./App.css";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
