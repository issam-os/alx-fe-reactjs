import React, { useState } from 'react';
import Header from './components/Header'; // Assuming you created Header.jsx in the components folder
import MainContent from './components/MainContent'; // Assuming you created MainContent.jsx in the components folder
import Footer from './components/Footer'; // Assuming you created Footer.jsx in the components folder
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Main Content Section */}
      <MainContent />

      {/* Footer Component */}
      <Footer />

      {/* Vite and React Logos */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
    </>
  );
}

export default App;
