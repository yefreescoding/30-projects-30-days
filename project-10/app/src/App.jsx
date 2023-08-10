// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SectionCards from './components/SectionCards';
import SectionFeatures from './components/SectionFeatures';
import SectionQuestions from './components/SectionQuestion';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <HeroSection />
      <SectionFeatures />
      <SectionCards />
      <SectionQuestions />
    </div>
  );
}

export default App;
