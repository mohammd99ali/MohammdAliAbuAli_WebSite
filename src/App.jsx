

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import SocialCard from './components/SocialCard';

import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen animated-gradient-bg text-white">

      <Navbar />
      <About />
      <Skills />
      <Experience />
      <SocialCard />
      <Contact />

    </div>
  )
}

export default App
