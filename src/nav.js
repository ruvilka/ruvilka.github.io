import { NavLink } from 'react-router-dom';
import './nav.css';

function Nav() {
  
    // Извлекаем URL
  const url = window.location.hash; // Получаем хеш (#) из URL
  const segments = url.split('/'); // Разбиваем URL на части по символу "/"
  
  // Извлекаем нужные части из URL, например, photos и file_477.jpg
  const part1 = segments[1]; // photos
  const part2 = segments[2]; // file_477.jpg

  // Динамически формируем базовую часть URL
  const basePath = `/${part1}/${part2}`;

  return (
    <div className="nav">
      {/* Используем относительные пути для изменения только последней части */}
      <NavLink className={'bttn_cont'} to={`${basePath}/feed`}>
      
          <svg width="51" height="45" viewBox="0 0 51 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="36.5" y="32.2647" width="14" height="12.2353" rx="4.5"  />
            <rect x="36.5" y="0.5" width="14" height="12.2353" rx="4.5"  />
            <rect x="0.5" y="0.5" width="14" height="12.2353" rx="4.5"  />
            <rect x="0.5" y="32.2647" width="14" height="12.2353" rx="4.5"  />
            <rect x="0.5" y="16.3824" width="14" height="12.2353" rx="4.5"  />
            <rect x="36.5" y="16.3824" width="14" height="12.2353" rx="4.5"  />
          </svg>

      
      </NavLink>

      <NavLink className={'bttn_cont'} to={`${basePath}/menu`}>
        <svg width="51" height="45" viewBox="0 0 51 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="14" height="12.2353" rx="4.5"  />
          <rect x="0.5" y="32.2647" width="14" height="12.2353" rx="4.5"  />
          <rect x="0.5" y="16.3824" width="14" height="12.2353" rx="4.5"  />
          <rect x="18.5" y="0.5" width="32" height="12.2353" rx="4.5"  />
          <rect x="18.5" y="16.3824" width="32" height="12.2353" rx="4.5"  />
          <rect x="18.5" y="32.2647" width="32" height="12.2353" rx="4.5"  />
        </svg>


      </NavLink>

      <NavLink className={'bttn_cont'} to={`${basePath}/cart`}>
      <svg width="51" height="45" viewBox="0 0 51 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8H41.8091C44.945 8 47.1194 11.1271 46.0275 14.0668L43.2418 21.5668C42.5869 23.3301 40.9043 24.5 39.0234 24.5H14.7026C13.8547 24.5 13.3916 23.5111 13.9343 22.8598C14.1243 22.6318 14.4058 22.5 14.7026 22.5H36.5874C38.8514 22.5 40.8842 21.1126 41.7092 19.0042L42.2961 17.5042C43.7076 13.8971 41.0477 10 37.1743 10H18C17.4477 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8Z"  />
        <rect x="1" y="34.5" width="10" height="10" rx="4.5"  />
        <path d="M49.7145 31.5H8.78022C5.76047 31.5 3.59773 28.5845 4.4737 25.6946L10.3452 6.32387C10.6094 5.45236 10.0424 4.54843 9.14275 4.40696L1.9727 3.27943C1.3663 3.18407 0.893023 2.70435 0.805866 2.09672C0.68501 1.25415 1.33871 0.5 2.1899 0.5H11.478C14.3122 0.5 16.3405 3.23844 15.5143 5.94949L15.9926 6.09524L15.5114 5.95953L9.90784 25.8298C9.46491 27.4005 10.6211 28.9675 12.2525 29.0076L49.7339 29.9293C50.16 29.9398 50.5 30.2883 50.5 30.7146C50.5 31.1483 50.1483 31.5 49.7145 31.5Z"  />
        <path d="M39.5 34.5H40.5C42.9853 34.5 45 36.5147 45 39V40C45 42.4853 42.9853 44.5 40.5 44.5H39.5C37.0147 44.5 35 42.4853 35 40V39C35 36.5147 37.0147 34.5 39.5 34.5Z"  />
      </svg>

      </NavLink>
    </div>
  );
  
}

export default Nav;
