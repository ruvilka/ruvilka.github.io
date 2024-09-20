import './header.css';
import { HashRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Right_el from './Right_el';
import BackBttn from './back_bttn';


const Header = () => {
  
  return (
    <div className="header">
        <BackBttn />
      <Routes>
        <Route path="/:part1/:part2/feed" element={<p>Лента</p>} />
        <Route path="/:part1/:part2/feed" element={<p>Лента</p>} />
        <Route path="/:part1/:part2/menu" element={<p>Категории</p>} />
        <Route path="/:part1/:part2/cart" element={<p>Корзина</p>} />

        {/* <Route path="/:part1/:part2/*" element={<UserAvatar />} /> */}
      </Routes>
      <Right_el />
      
    </div>
  );
}

export default Header;
