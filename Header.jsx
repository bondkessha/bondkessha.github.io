import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ userLevel, setUserLevel, userRegion }) => {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
      color: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '1.8rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>🇩🇪</span>
        <span>Deutsch<span style={{ color: '#ffd600' }}>Raum</span></span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ 
            background: '#ffd600', 
            color: '#1a237e', 
            padding: '5px 10px', 
            borderRadius: '15px',
            fontSize: '0.9rem',
            fontWeight: 'bold'
          }}>
            {userRegion}
          </span>
          <select 
            value={userLevel} 
            onChange={(e) => setUserLevel(e.target.value)}
            style={{
              padding: '8px 15px',
              borderRadius: '20px',
              border: '2px solid #ffd600',
              background: 'white',
              fontWeight: 'bold',
              color: '#1a237e',
              cursor: 'pointer'
            }}
          >
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
          </select>
        </div>
      </div>
      
      <nav style={{ display: 'flex', gap: '25px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', padding: '8px 15px', borderRadius: '5px' }}>
          Главная
        </Link>
        <Link to="/challenges" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', padding: '8px 15px', borderRadius: '5px' }}>
          Челленджи
        </Link>
        <Link to="/mentors" style={{ color: 'white', textDecoration: 'none', fontWeight: '500', padding: '8px 15px', borderRadius: '5px' }}>
          Менторы
        </Link>
      </nav>
    </header>
  );
};

export default Header;