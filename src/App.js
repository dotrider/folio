import React from 'react';
import Landing from './Components/Landing/Landing';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
// import Nav from './Components/Nav/Nav';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Landing/>
      <Projects/>
      <Skills/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
