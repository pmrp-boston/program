
import React from 'react';
import BackToTop from './BackToTop';
import { Link, useLocation } from 'react-router-dom';

interface MenuProps {
  setDarkTheme: () => void;
  darkTheme: boolean;
}

const Menu: React.FC<MenuProps> = ({ setDarkTheme, darkTheme }) => {
  const location = useLocation();

  return (
    <div className="pageHeader">
      <nav className="topMenu">
        <a href="#content" className="skipToContent">
          <span>Skip to Content</span>
        </a>
        <details className="mobileMenu">
          <summary className="menuBar">
            {!darkTheme ?
              <div id="logo">
                <picture>
                  <source srcSet="./smallLogo.png" media="(max-width: 768px)" />
                  <source srcSet="./logo.png" media="(min-width: 769px)" />
                  <img src="./logo.png" alt="The Post Meridian Radio Players" />
                </picture>
              </div> :
              <div id="logo">
                <picture>
                  <source srcSet="./smallDarkLogo.png" media="(max-width: 768px)" />
                  <source srcSet="./darkLogo.png" media="(min-width: 769px)" />
                  <img src="./darkLogo.png" alt="The Post Meridian Radio Players" />
                </picture>
              </div>
            }
            <span className="material-symbols-outlined">
              menu
            </span>
          </summary>
          <ul className={`mainMenu`}>
            <li>
              <Link to={`/${location.search}`}>Cast and Crew</Link>
            </li>
            <li>
              <Link to={`/directions${location.search}`}>Directions (Coming Soon!)</Link>
            </li>
            <li>
              <Link to={`/information${location.search}`}>Information and Accessibility (Coming Soon!)</Link>
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
        </details>
        <div className="desktopMenu">
          {!darkTheme ?
            <div id="logo">
              <img src="./logo.png" alt="The Post Meridian Radio Players" />
            </div> :
            <div id="logo">
              <img src="./darkLogo.png" alt="The Post Meridian Radio Players" />
            </div>
          }
          <div className="menuItems">
            <ul className={`mainMenu`}>
              <li>
                <Link to={`/${location.search}`}>Cast and Crew</Link>
              </li>
              <li>
                <Link to={`/directions${location.search}`}>Directions (Coming Soon!)</Link>
              </li>
              <li>
                <Link to={`/information${location.search}`}>Information and Accessibility (Coming Soon!)</Link>
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
        </div>
      </nav >
      <BackToTop />
    </div >
  );
};

export default Menu;
