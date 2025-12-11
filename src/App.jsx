import React, { memo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import './styles/sections.css';
import './styles/design-system.css';
import './styles/components.css';

// Ottimizzazione dei componenti con React.memo per evitare re-rendering non necessari
const MemoizedHeader = memo(Header);
const MemoizedHero = memo(Hero);
const MemoizedAbout = memo(About);
const MemoizedSkills = memo(Skills);
const MemoizedExperience = memo(Experience);
const MemoizedProjects = memo(Projects);
const MemoizedContact = memo(Contact);
const MemoizedFooter = memo(Footer);

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <MemoizedHeader />
        <main>
          <MemoizedHero />
          <MemoizedAbout />
          <MemoizedSkills />
          <MemoizedExperience />
          <MemoizedProjects />
          <MemoizedContact />
        </main>
        <MemoizedFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
