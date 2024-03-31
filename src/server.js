const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const port = 3001; // Порт, на котором будет запущен сервер
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World 3001!')
  });

const botToken = '6676309872:AAF-SniHoGi5O4lkg9eIylQE2lBsNV76hiE'; // Токен вашего Telegram бота

// Инициализация Telegram бота
const bot = new TelegramBot(botToken, { polling: false });

// Парсер для POST запросов
app.use(bodyParser.json());

// Обработка POST запросов на отправку сообщений в Telegram
app.post('/send-message', (req, res) => {
    
    const message = req.body?.message;
    console.log(message);
    const chatId = '-1002013528530'; // ID чата, куда будет отправлено сообщение

    bot.sendMessage(chatId, message)
        .then(() => {
            res.status(200).json({ success: true, message: 'Message sent successfully' });
        })
        .catch((error) => {
            res.status(500).json({ success: false, message: 'Failed to send message', error: error });
        });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
