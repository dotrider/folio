import React from 'react';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import ScrollUp from './Components/ScrollUp/ScrollUp';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Projects/>
      <Skills/>
      <About/>
      <Footer/>
      <ScrollUp/>
    </div>
  );
}

export default App;
