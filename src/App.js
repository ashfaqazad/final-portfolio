import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import './StyleSheet/Style.css'
import Skills from './Pages/Skills';
import Footer from './Pages/Footer';



function App() {
  return (
    <div>
      <Navbar />
      {/* <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav> */}
      <Home />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
