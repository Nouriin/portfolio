import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-accentPurple selection:text-white">
      <nav className="fixed w-full z-50 p-6 flex justify-between items-center backdrop-blur-md bg-dark/80 border-b border-white/5">
        <div className="text-xl font-bold tracking-tighter">NF.</div>
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#achievements" className="hover:text-accent transition-colors">Achievements</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Achievements />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Nourin Fathima. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
