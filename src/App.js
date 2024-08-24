import './App.css';
import Navbar from './component/Navbar/navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Projects from './component/Projects/Projects';
import Skills from './component/Skills/Skills';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills/>
      {/*<Projects/>*/}
      <Contact/> 
    </div>
  );
}

export default App;
