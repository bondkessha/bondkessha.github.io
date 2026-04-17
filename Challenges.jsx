import React, { useState, useEffect } from 'react';
import ChallengeCard from '../components/ChallengeCard';

const Challenges = ({ userLevel }) => {
  const [challenges, setChallenges] = useState([]);
  
  useEffect(() => {
    // Заглушка данных
    setChallenges([
      {
        id: 1,
        title: "Nachhaltigkeit im Alltag",
        level: "B1",
        description: "Обсудим экологические привычки на немецком языке. Узнаем новые слова и выражения по теме экологии.",
        startDate: "2024-04-01",
        participants: 24
      },
      {
        id: 2,
        title: "Arbeitswelt der Zukunft",
        level: "B2",
        description: "Как изменится мир работы? Поговорим о трендах, удалённой работе и профессиях будущего.",
        startDate: "2024-04-08",
        participants: 18
      }
    ]);
  }, []);
  
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#1a237e', marginBottom: '10px' }}>Недельные челленджи</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Присоединяйтесь к тематическим неделям, практикуйте немецкий системно и получайте обратную связь
      </p>
      
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: '#1a237e' }}>Ваш текущий уровень: 
          <span style={{
            background: '#1a237e',
            color: 'white',
            padding: '5px 15px',
            borderRadius: '20px',
            marginLeft: '10px',
            fontSize: '0.9rem'
          }}>
            {userLevel}
          </span>
        </h3>
      </div>
      
      <div>
        {challenges.map(challenge => (
          <ChallengeCard 
            key={challenge.id} 
            challenge={challenge}
            userLevel={userLevel}
          />
        ))}
      </div>
      
      {challenges.length === 0 && (
        <div style={{ textAlign: 'center', padding: '50px 20px' }}>
          <h3 style={{ color: '#666' }}>Нет активных челленджей</h3>
          <p>Новые челленджи появятся в понедельник!</p>
        </div>
      )}
    </div>
  );
};

export default Challenges;