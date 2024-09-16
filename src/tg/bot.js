const TelegramBot = require('node-telegram-bot-api');

// Замените значение ниже на токен вашего бота, полученный от @BotFather
const token = '1628873665:AAER3rGcnclUHqNvvaD8fV3Z8OmqBvEEuq0';
// Создаём бота с использованием 'polling' для получения обновлений
const bot = new TelegramBot(token, { polling: true });

// Обработчик команды /echo
bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1]; // захваченный "whatever"

    // Отправляем обратно захваченное сообщение с кнопкой
    const options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Перейти в WebApp',
                        web_app: {
                            url: 'https://ruvilka.github.io' 
                            // url: 'http://localhost:3000/' 
                        }
                    }
                ]
            ]
        }
    };
    
    bot.sendMessage(chatId, resp, options);
});

// Слушаем любые сообщения
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
    
//     // Получаем фотографии профиля пользователя
//     bot.getUserProfilePhotos(msg.from.id).then(function (res) {
//         if (res.photos.length > 0) {
//             const file_id = res.photos[0][0].file_id;
//             bot.getFile(file_id).then(function (result) {
//                 const file_path = result.file_path;
//                 const photo_url = `https://api.telegram.org/file/bot${token}/${file_path}`;
//                 bot.sendMessage(chatId, photo_url);
//             });
//         } else {
//             bot.sendMessage(chatId, 'У пользователя нет фотографий профиля.');
//         }
//     });
// });
