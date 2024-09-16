import React, { useEffect, useState } from 'react';

const UserAvatar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = window.Telegram.WebApp.initDataUnsafe.user;
    setUser(userData); // Сохраняем данные пользователя в состояние
  }, []);
  
  // Проверяем, есть ли данные пользователя
  if (!user) {
    return <div>Загрузка...</div>;
  }

  // Получаем URL фото пользователя
  const avatarUrl = user.photo_url || 'default_avatar.png'; // Фото по умолчанию

  return (
    <div>
      {/* Выводим данные о пользователе как строку */}
      <div style={{ marginBottom: '20px' }}>
        <pre>{JSON.stringify(user, null, 2)}</pre> {/* Показываем данные userData в формате JSON */}
      </div>

      {/* Отображение аватара */}
      <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
        <img 
          src={avatarUrl} 
          alt="User Avatar" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
    </div>
  );
};

export default UserAvatar;
