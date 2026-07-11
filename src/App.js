import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from "./components/Experience";
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import About from './components/About';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
