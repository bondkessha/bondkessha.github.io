import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Challenges from './pages/Challenges';
import Mentors from './pages/Mentors';
import './App.css';

function App() {
  const [userLevel, setUserLevel] = useState('B1');
  const [userRegion] = useState('СНГ');

  return (
    <Router>
      <div className="App">
        <Header 
          userLevel={userLevel} 
          setUserLevel={setUserLevel}
          userRegion={userRegion}
        />
        
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenges" element={
              <Challenges userLevel={userLevel} />
            } />
            <Route path="/mentors" element={<Mentors />} />
          </Routes>
        </div>
        
        <footer style={{
          background: '#1e293b',
          color: '#cbd5e1',
          textAlign: 'center',
          padding: '30px 20px',
          marginTop: '50px'
        }}>
          <p style={{ margin: '8px 0', lineHeight: '1.6' }}>
            <strong style={{ color: 'white' }}>DeutschRaum © 2024</strong> — Сообщество для изучающих немецкий из СНГ
          </p>
          <p style={{ margin: '8px 0', lineHeight: '1.6' }}>
            Фокус на качестве | Система менторства | Недельные челленджи
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;