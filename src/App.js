import React from 'react';
import Header from './header';
import Nav from './nav';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';


const HomePage = () => {
  const { file_path } = useParams(); // Извлекаем file_path из URL
  const TOKEN = '1628873665:AAER3rGcnclUHqNvvaD8fV3Z8OmqBvEEuq0';
  return (
    <div>
      <h1>Home Page</h1>
      <p>File path: {file_path}</p>
      {/* Здесь можно использовать file_path для отображения аватара */}
      <img 
        src={`https://api.telegram.org/file/bot${TOKEN}/${file_path}`} 
        alt="User Avatar" 
        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
      />
    </div>
  );
};

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/:file_path/home" element={<HomePage />} />
    </Routes>



    <Nav />
  </Router>
);

export default App;


   
