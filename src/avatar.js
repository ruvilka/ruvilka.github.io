import React, { useEffect, useState } from 'react';

const UserAvatar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Проверяем, доступны ли Telegram API
    if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
      // Получение данных о пользователе
      const userData = window.Telegram.WebApp.initDataUnsafe.user;
      if (userData) {
        setUser(userData);
      }
    }
  }, []);

  // Проверяем, есть ли данные пользователя
  if (!user) {
    return <div>Загрузка...</div>;
  }

  // Получаем URL фото пользователя
  const avatarUrl = user.photo_url || 'default_avatar.png'; // Замените на URL по умолчанию

  return (
    <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
      <img 
        src={avatarUrl} 
        alt="User Avatar" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
    </div>
  );
};

export default UserAvatar;
