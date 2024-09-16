from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# Ваш токен, полученный от BotFather
TOKEN = '1628873665:AAER3rGcnclUHqNvvaD8fV3Z8OmqBvEEuq0'

# Обработчик команды /start
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    # Сообщение, которое будет отправлено пользователю
    text = "Привет! Нажми на кнопку, чтобы открыть приложение."
    
    # Создание кнопки с ссылкой
    keyboard = [
        [InlineKeyboardButton("Открыть WebApp", url='https://your-webapp-link.com')]
    ]
    
    # Создание разметки клавиатуры
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    # Отправка сообщения с кнопкой
    await update.message.reply_text(text, reply_markup=reply_markup)

async def main():
    # Создание экземпляра Application
    application = ApplicationBuilder().token(TOKEN).build()

    # Регистрация обработчиков команд
    application.add_handler(CommandHandler("start", start))

    # Запуск бота
    await application.run_polling()

if __name__ == '__main__':
    import asyncio
    asyncio.run(main())
