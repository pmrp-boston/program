import React from 'react';

const Menu: React.FC = () => {
  return (
    <nav>
      <ul className="mainMenu">
        <li><a href="/">Cast and Crew</a></li>
        <li><a href="/directions">Directions</a></li>
        <li><a href="/infoaccess">Information and Accessibility</a></li>
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
