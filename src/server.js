const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const WebSocket = require('ws'); // Импортируем модуль WebSocket

const port = 3001;
const wsPort = 3002;
const app = express();

app.use(cors());

const botToken = '';
const bot = new TelegramBot(botToken, { polling: false });

app.use(bodyParser.json());

app.post('/send-message', (req, res) => {
    const message = req.body?.message;
    console.log(message);
    const chatId = '';

    bot.sendMessage(chatId, message)
        .then(() => {
            res.status(200).json({ success: true, message: 'Message sent successfully' });
        })
        .catch((error) => {
            res.status(500).json({ success: false, message: 'Failed to send message', error: error });
        });
});

const server = app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('received: %s', message);
    });

    ws.send('connected');
});

console.log(`WebSocket server is running on port ${wsPort}`);
