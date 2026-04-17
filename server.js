const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

// Данные для примера
let challenges = [
  {
    id: 1,
    title: "Nachhaltigkeit im Alltag",
    level: "B1",
    description: "Обсудим экологические привычки на немецком",
    startDate: new Date().toISOString().split('T')[0],
    tasks: ["Описать свою экопривычку", "Обсудить статью"],
    participants: 24
  }
];

let mentors = [
  {
    id: 1,
    name: "Анна М.",
    level: "C1",
    specialization: "Бизнес-немецкий",
    students: 3,
    maxStudents: 8,
    rating: 4.9
  }
];

// Маршруты
app.get('/api/challenges', (req, res) => {
  res.json(challenges);
});

app.get('/api/mentors', (req, res) => {
  res.json(mentors);
});

app.post('/api/challenges/:id/join', (req, res) => {
  const id = parseInt(req.params.id);
  const challenge = challenges.find(c => c.id === id);
  if (challenge) {
    challenge.participants += 1;
    res.json({ success: true, participants: challenge.participants });
  } else {
    res.status(404).json({ error: "Не найдено" });
  }
});

// WebSocket
io.on('connection', (socket) => {
  console.log('Пользователь подключен');
  socket.on('message', (data) => {
    io.emit('message', data);
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`✅ Сервер запущен: http://localhost:${PORT}`);
});