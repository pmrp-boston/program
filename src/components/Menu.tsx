import React from 'react';

interface MenuProps {
  setActive: (component: string) => void;
}

const Menu: React.FC<MenuProps> = ({ setActive }) => {
  return (
    <nav>
      <ul className="mainMenu">
        <li>
          <button onClick={() => setActive('program')}>Cast and Crew</button>
        </li>
        <li>
          <button onClick={() => setActive('other1')}>Directions</button>
        </li>
        <li>
          <button onClick={() => setActive('other2')}>Information and Accessibility</button>
        </li>
      </ul>
      <ul className="secondaryMenu">
        <li><a href="https://www.pmrp.org" target="_blank" rel="noopener noreferrer">PMRP Main Website</a></li>
        <li><a href="https://www.zazzle.com/store/postmeridianradio" target="_blank" rel="noopener noreferrer">Store</a></li>
        <li><a href="https://pmrppodcast.buzzsprout.com/" target="_blank" rel="noopener noreferrer">Podcast</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
