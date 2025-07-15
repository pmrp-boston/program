
import React, { useState } from 'react';
import BackToTop from './BackToTop';
import { Link, useLocation } from 'react-router-dom';

interface MenuProps {
  setDarkTheme: () => void;
  darkTheme: boolean;
}

const Menu: React.FC<MenuProps> = ({ setDarkTheme, darkTheme }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  return (
    <div>
      <nav className={`topMenu ${expanded ? 'expanded' : ''}`}>
        <div className="topBar">
          {!darkTheme ?
            <div id="logo">
              <picture>
                <source srcSet="./smallLogo.png" media="(max-width: 768px)" />
                <source srcSet="./logo.png" media="(min-width: 769px)" />
                <img src="./logo.png" alt="Post Meridian Radio Players Logo" />
              </picture>
            </div> :
            <div id="logo">
              <picture>
                <source srcSet="./smallDarkLogo.png" media="(max-width: 768px)" />
                <source srcSet="./darkLogo.png" media="(min-width: 769px)" />
                <img src="./darkLogo.png" alt="Post Meridian Radio Players Logo" />
              </picture>
            </div>
          }
          <a href="#content" className="skipToContent" tabIndex={0}>
            <span>Skip to Content</span>
          </a>

          <div role="button" className="menuBar" onClick={() => setExpanded(!expanded)}>
            ☰
          </div>
        </div>

        <div className={`menuItems ${expanded ? 'expanded' : ''}`}>
          <ul className={`mainMenu`}>
            <li>
              <Link to={`/${location.search}`} onClick={() => setExpanded(false)} tabIndex={0}>Cast and Crew</Link>
            </li>
            <li>
              <Link to={`/directions${location.search}`} onClick={() => setExpanded(false)} tabIndex={0}>Directions (Coming Soon!)</Link>
            </li>
            <li>
              <Link to={`/information${location.search}`} onClick={() => setExpanded(false)} tabIndex={0}>Information and Accessibility (Coming Soon!)</Link>
            </li>
          </ul>
          <ul className={`secondaryMenu`}>
            <li>
              <a href="https://www.pmrp.org" target="_blank" rel="noopener noreferrer">
                PMRP Main Website
                <span className="material-symbols-outlined">
                  open_in_new
                </span>
              </a>

            </li>
            <li>
              <a href="https://www.zazzle.com/store/postmeridianradio" target="_blank" rel="noopener noreferrer">
                Store
                <span className="material-symbols-outlined">
                  open_in_new
                </span>
              </a>
            </li>
            <li>
              <button className={`toggleDarkTheme toggleDarkTheme--${darkTheme ? 'light' : 'dark'}`} onClick={setDarkTheme}>
                Toggle Dark Mode
                <span className="material-symbols-outlined">
                  {darkTheme ? 'clear_day' : 'dark_mode'}
                </span>
              </button>
            </li>
          </ul>
        </div>

      </nav>
      <BackToTop />
    </div>
  );
};

export default Menu;
