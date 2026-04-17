import React, { useState } from 'react';

const Mentors = () => {
  const [mentors] = useState([
    {
      id: 1,
      name: "Анна М.",
      level: "C1",
      specialization: "Бизнес-немецкий",
      experience: "5 лет преподавания",
      students: 3,
      maxStudents: 8,
      rating: 4.9,
      description: "Помогу с деловой перепиской и подготовкой к собеседованию"
    },
    {
      id: 2,
      name: "Дмитрий Ш.",
      level: "Носитель",
      specialization: "TestDaF подготовка",
      experience: "3 года",
      students: 7,
      maxStudents: 10,
      rating: 5.0,
      description: "Живу в Берлине, специализируюсь на подготовке к экзаменам"
    }
  ]);
  
  const [selectedMentor, setSelectedMentor] = useState(null);
  
  const handleRequest = (mentorId) => {
    alert(`Запрос отправлен ментору #${mentorId}! Он свяжется с вами в течение 24 часов.`);
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#1a237e', marginBottom: '10px' }}>Наши менторы</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Опытные преподаватели и носители языка готовы помочь вам в изучении немецкого
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
        {mentors.map(mentor => (
          <div key={mentor.id} style={{
            background: 'white',
            borderRadius: '12px',
            padding: '25px',
            boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h3 style={{ color: '#1a237e' }}>{mentor.name}</h3>
              <span style={{
                background: mentor.level === 'Носитель' ? '#F44336' : '#4CAF50',
                color: 'white',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                {mentor.level}
              </span>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <p><strong>Специализация:</strong> {mentor.specialization}</p>
              <p><strong>Опыт:</strong> {mentor.experience}</p>
              <p><strong>Рейтинг:</strong> ⭐ {mentor.rating}/5.0</p>
            </div>
            
            <p style={{ color: '#666', marginBottom: '20px', fontStyle: 'italic' }}>
              "{mentor.description}"
            </p>
            
            <div style={{ 
              background: mentor.students >= mentor.maxStudents ? '#ffebee' : '#e8f5e9',
              padding: '10px',
              borderRadius: '8px',
              marginBottom: '20px',
              border: `1px solid ${mentor.students >= mentor.maxStudents ? '#ffcdd2' : '#c8e6c9'}`
            }}>
              <p style={{ margin: 0 }}>
                <strong>Места:</strong> {mentor.students}/{mentor.maxStudents}
                {mentor.students >= mentor.maxStudents ? ' (заполнено)' : ' (есть места)'}
              </p>
            </div>
            
            <button
              onClick={() => handleRequest(mentor.id)}
              disabled={mentor.students >= mentor.maxStudents}
              style={{
                width: '100%',
                padding: '12px',
                background: mentor.students >= mentor.maxStudents ? '#9E9E9E' : '#1a237e',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: mentor.students >= mentor.maxStudents ? 'default' : 'pointer'
              }}
            >
              {mentor.students >= mentor.maxStudents ? '❌ Нет мест' : '📨 Отправить запрос'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;