import React, { useState } from 'react';
import './avatar.css';
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';


const BackBttn = () => {
    const url = window.location.hash; // Получаем хеш (#) из URL
    const segments = url.split('/'); // Разбиваем URL на части по символу "/"

    // Извлекаем нужные части из URL, например, photos и file_477.jpg
    const part1 = segments[1]; // photos
    const part2 = segments[2]; // file_477.jpg

    // Динамически формируем базовую часть URL
    const basePath = `/${part1}/${part2}`;

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Вернуться на предыдущую страницу
    };
  return (
      <div className='svg_container'>
          <Routes>
              <Route path={`${basePath}/feed`} element={<div></div>} />
              <Route path={`${basePath}/menu`} element={<div></div>} />
              <Route path={`${basePath}/cart`} element={<div></div>} />
              <Route path={`${basePath}/*`} element={
                  <button onClick={handleGoBack}>
                      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3334 15.0416C31.1389 15.847 31.1389 17.153 30.3334 17.9584L23.5418 24.75L30.3334 31.5416C31.1389 32.347 31.1389 33.653 30.3334 34.4584C29.528 35.2639 28.222 35.2639 27.4166 34.4584L19.1666 26.2084C18.7798 25.8216 18.5625 25.297 18.5625 24.75C18.5625 24.203 18.7798 23.6784 19.1666 23.2916L27.4166 15.0416C28.222 14.2361 29.528 14.2361 30.3334 15.0416Z" />
                      </svg>
                  </button>
              } />
          </Routes>
      </div>
  );    
};

export default BackBttn;
