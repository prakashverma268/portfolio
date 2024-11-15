import React from 'react';
import './index.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Summary from './components/summary/Summary';
import Skills from './components/skill/Skills';
import Projects from './components/project/Projects';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import StarryBackground from './components/background/StarryBackground';

function App() {
  return (
      <div className="App">

<StarryBackground />
      <Header />
      <Profile />
      <Summary />
      <Skills />
      <Projects />
      <Education />
      < Contact />
      <Footer />
    </div>
    
  );
}

export default App;
