import React from 'react'
import './App.scss'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
