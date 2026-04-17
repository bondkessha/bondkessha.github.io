import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <h1 style={{ color: '#1a237e', marginBottom: '20px' }}>
        Добро пожаловать в DeutschRaum!
      </h1>
      
      <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto 30px', lineHeight: '1.6' }}>
        Первое сообщество для изучающих немецкий язык из стран СНГ с фокусом на качестве, 
        системой менторства и еженедельными челленджами.
      </p>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', margin: '40px 0' }}>
        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          flex: '1',
          minWidth: '250px',
          maxWidth: '350px'
        }}>
          <h3 style={{ color: '#1a237e' }}>🎯 Челленджи</h3>
          <p>Новая тема каждую неделю с готовым методическим пакетом</p>
          <Link to="/challenges">
            <button style={{
              padding: '10px 20px',
              background: '#1a237e',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '15px'
            }}>
              Смотреть челленджи
            </button>
          </Link>
        </div>
        
        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          flex: '1',
          minWidth: '250px',
          maxWidth: '350px'
        }}>
          <h3 style={{ color: '#1a237e' }}>👨‍🏫 Менторство</h3>
          <p>Персональная помощь от опытных преподавателей и носителей</p>
          <Link to="/mentors">
            <button style={{
              padding: '10px 20px',
              background: '#1a237e',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '15px'
            }}>
              Найти ментора
            </button>
          </Link>
        </div>
      </div>
      
      <div style={{ marginTop: '50px', padding: '30px', background: '#f0f4ff', borderRadius: '12px' }}>
        <h2 style={{ color: '#1a237e' }}>Почему именно DeutschRaum?</h2>
        <ul style={{ 
          listStyle: 'none', 
          padding: '0', 
          maxWidth: '600px', 
          margin: '20px auto',
          textAlign: 'left' 
        }}>
          <li style={{ padding: '10px 0' }}>✅ Сфокусированы на аудитории из СНГ</li>
          <li style={{ padding: '10px 0' }}>✅ Жёсткий контроль качества контента</li>
          <li style={{ padding: '10px 0' }}>✅ Система уровней от A1 до C1</li>
          <li style={{ padding: '10px 0' }}>✅ Поддержка сообщества 24/7</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;