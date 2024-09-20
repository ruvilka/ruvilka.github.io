const TelegramBot = require('node-telegram-bot-api');

// Замените на токен вашего бота
const token = '1628873665:AAER3rGcnclUHqNvvaD8fV3Z8OmqBvEEuq0';
const bot = new TelegramBot(token, { polling: true });

// Обработчик команды /start
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  try {
    // Получаем ID пользователя для запроса его фото профиля
    const res = await bot.getUserProfilePhotos(msg.from.id);
    let file_path = ''; // Изначально пустой путь к файлу

    // Проверяем, есть ли у пользователя фотографии
    if (res.photos.length > 0) {
      const file_id = res.photos[0][0].file_id;

      // Получаем путь к файлу
      const result = await bot.getFile(file_id);
      file_path = result.file_path;
    }

    // Формируем сообщение с кнопкой для перехода в WebApp
    sendWelcomeMessage(chatId, file_path);
  } catch (err) {
    console.error('Error getting user profile photos:', err);
    sendWelcomeMessage(chatId, null); // В случае ошибки отправляем сообщение без фото
  }
});

// Функция для отправки приветственного сообщения
function sendWelcomeMessage(chatId, file_path) {
  const baseUrl = 'https://ruvilka.github.io/#'; // Базовый URL для хэш-роутинга
  // Формируем URL WebApp с подмешанным file_path, если он есть
  const webAppUrl = file_path ? `${baseUrl}/${file_path}/home` : `${baseUrl}/home`;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Перейти в WebApp 5',
            web_app: {
              url: webAppUrl // Ссылка на WebApp с подмешанным file_path
            }
          }
        ]
      ]
    }
  };

  // Приветственное сообщение
//   const welcomeMessage = 'Привет! Добро пожаловать в наше приложение. Нажмите кнопку ниже, чтобы перейти в WebApp.';

  // Отправляем сообщение
  bot.sendMessage(chatId, file_path, options);
}
