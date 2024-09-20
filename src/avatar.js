import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import './avatar.css';
import Alt_ave from './sources/Ave.png';

const UserAvatar = () => {
  const { part1, part2 } = useParams(); // Извлекаем параметры из URL

  const TOKEN = '1628873665:AAER3rGcnclUHqNvvaD8fV3Z8OmqBvEEuq0';
  
  // Объединяем параметры для получения полного file_path
  const file_path = `${part1}/${part2}`;
  const decodedFilePath = decodeURIComponent(file_path); // Декодируем file_path

  // Состояние для замены изображения при ошибке загрузки
  const [imageSrc, setImageSrc] = useState(`https://api.telegram.org/file/bot${TOKEN}/${decodedFilePath}`);

  // Обработчик для события ошибки при загрузке изображения
  const handleImageError = () => {
    setImageSrc(Alt_ave); // Устанавливаем альтернативное изображение при ошибке
  };

  return (
    <div className='img_container'>
      <img 
        src={imageSrc} 
        alt="User Avatar" 
        onError={handleImageError} // Обработчик ошибки загрузки
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default UserAvatar;
