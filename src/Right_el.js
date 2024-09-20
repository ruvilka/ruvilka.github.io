import './header.css';
import UserAvatar from './avatar';
import { HashRouter as Router, Route, Routes, useParams } from 'react-router-dom';

const Right_el = () => {
  
  return (
    <div className="header">

        <Routes>
          <Route path="/:part1/:part2/*" element={<UserAvatar />} />
        </Routes>
      
    </div>
  );
}

export default Right_el;
