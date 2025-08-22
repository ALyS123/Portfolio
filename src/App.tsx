import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Divider from "./components/UI/Divider/Divider";

function App() {
  return (
        <>
      <Header />
      <Hero />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
