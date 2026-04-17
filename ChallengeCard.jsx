import React, { useState } from 'react';

const ChallengeCard = ({ challenge, userLevel }) => {
  const [joined, setJoined] = useState(false);
  const [participants, setParticipants] = useState(challenge.participants);
  
  const handleJoin = async () => {
    try {
      const response = await fetch(`/api/challenges/${challenge.id}/join`, {
        method: 'POST'
      });
      
      if (response.ok) {
        setJoined(true);
        const data = await response.json();
        setParticipants(data.participants);
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
  
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '25px',
      margin: '20px 0',
      boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
      border: '1px solid #e2e8f0'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h3 style={{ color: '#1a237e' }}>{challenge.title}</h3>
        <span style={{
          background: challenge.level === 'B1' ? '#FFC107' : 
                     challenge.level === 'A1' ? '#4CAF50' : 
                     challenge.level === 'C1' ? '#F44336' : '#9E9E9E',
          color: 'white',
          padding: '5px 15px',
          borderRadius: '20px',
          fontSize: '0.9rem',
          fontWeight: 'bold'
        }}>
          {challenge.level}
        </span>
      </div>
      
      <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.6' }}>
        {challenge.description}
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <strong>Старт:</strong> {challenge.startDate}
        </div>
        <div>
          <strong>Участников:</strong> {participants}
        </div>
      </div>
      
      <button
        onClick={handleJoin}
        style={{
          width: '100%',
          padding: '12px',
          background: joined ? '#9E9E9E' : 'linear-gradient(to right, #4CAF50, #8BC34A)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '16px',
          cursor: joined ? 'default' : 'pointer',
          transition: 'all 0.3s'
        }}
        disabled={joined}
      >
        {joined ? 'Вы участвуете!' : 'Присоединиться к челленджу'}
      </button>
    </div>
  );
};

export default ChallengeCard;