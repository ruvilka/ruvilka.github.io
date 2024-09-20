import './App.css'
import React from 'react';
import { HashRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Header from './header';
import Nav from './nav';
import Tables from './tables';



const App = () => {

  
  
  return(

    <Router>
    <Header />
    <Routes>
      <Route path="/:part1/:part2/feed" element={<Tables />} />
    </Routes>
    <Nav />
  </Router>
  )
};

export default App;
