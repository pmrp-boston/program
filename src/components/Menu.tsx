
import React, { useState } from 'react';

interface MenuProps {
  setActive: (component: string) => void;
}

const Menu: React.FC<MenuProps> = ({ setActive }) => {
  const [expanded, setExpanded] = useState(false);
  const selectMenuItem = (component: string) => {
    setActive(component);
    setExpanded(false); // Collapse the menu after selection
  };

  return (
    <nav className={`topMenu ${expanded ? 'expanded' : ''}`}>
      <div className="topBar">
        <div id="logo">
          <a href="/" aria-label="Program Homepage">
            <picture>
              <source srcSet="./smallLogo.png" media="(max-width: 768px)" />
              <source srcSet="./logo.png" media="(min-width: 769px)" />
              <img src="./logo.png" alt="Post Meridian Radio Players Logo" />
            </picture>
          </a>
        </div>
        <div aria-role="button" className="menuBar" onClick={() => setExpanded(!expanded)}>
          ☰
        </div>
      </div>

      <div className={`menuItems ${expanded ? 'expanded' : ''}`}>
        <ul className={`mainMenu`}>
          <li>
            <a onClick={() => selectMenuItem('program')}>Cast and Crew</a>
          </li>
          <li>
            <a onClick={() => selectMenuItem('directions')}>Directions (Coming Soon!)</a>
          </li>
          <li>
            <a onClick={() => selectMenuItem('information')}>Information and Accessibility (Coming Soon!)</a>
          </li>
        </ul>
        <ul className={`secondaryMenu`}>
          <li>
            <a href="https://www.pmrp.org" target="_blank" rel="noopener noreferrer">
              PMRP Main Website
              <i className="fas fa-external-link-alt"></i>
            </a>
          </li>
          <li>
            <a href="https://www.zazzle.com/store/postmeridianradio" target="_blank" rel="noopener noreferrer">
              Store
              <i className="fas fa-external-link-alt"></i>
            </a>
          </li>
          <li>
            <a href="https://pmrppodcast.buzzsprout.com/" target="_blank" rel="noopener noreferrer">
              Podcast
              <i className="fas fa-external-link-alt"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
