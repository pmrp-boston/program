
import React, { useState } from 'react';
import BackToTop from './BackToTop';

interface MenuProps {
  setActive: (component: string) => void;
  setDarkTheme: () => void;
  darkTheme: boolean;
}

const Menu: React.FC<MenuProps> = ({ setActive, setDarkTheme, darkTheme }) => {
  const [expanded, setExpanded] = useState(false);
  const selectMenuItem = (component: string) => {
    setActive(component);
    setExpanded(false); // Collapse the menu after selection
  };

  return (
    <div>
      <nav className={`topMenu ${expanded ? 'expanded' : ''}`}>
        <div className="topBar">
          {!darkTheme ?
            <div id="logo">
              <a href="/" aria-label="Program Homepage">
                <picture>
                  <source srcSet="./smallLogo.png" media="(max-width: 768px)" />
                  <source srcSet="./logo.png" media="(min-width: 769px)" />
                  <img src="./logo.png" alt="Post Meridian Radio Players Logo" />
                </picture>
              </a>
            </div> :
            <div id="logo">
              <a href="/" aria-label="Program Homepage">
                <picture>
                  <source srcSet="./smallDarkLogo.png" media="(max-width: 768px)" />
                  <source srcSet="./darkLogo.png" media="(min-width: 769px)" />
                  <img src="./darkLogo.png" alt="Post Meridian Radio Players Logo" />
                </picture>
              </a>
            </div>
          }
          <div className="skipToContent">
            <a href="#content" className="skipToContent--link" tabIndex={0}>
              <span>Skip to Content</span>
            </a>
            <button onClick={setDarkTheme}>
              Toggle Dark Theme
            </button>
          </div>
          <div aria-role="button" className="menuBar" onClick={() => setExpanded(!expanded)}>
            ☰
          </div>
        </div>

        <div className={`menuItems ${expanded ? 'expanded' : ''}`}>
          <ul className={`mainMenu`}>
            <li>
              <a onClick={() => selectMenuItem('program')} tabIndex={0}>Cast and Crew</a>
            </li>
            <li>
              <a onClick={() => selectMenuItem('directions')} tabIndex={0}>Directions (Coming Soon!)</a>
            </li>
            <li>
              <a onClick={() => selectMenuItem('information')} tabIndex={0}>Information and Accessibility (Coming Soon!)</a>
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
      <BackToTop />
    </div>
  );
};

export default Menu;
