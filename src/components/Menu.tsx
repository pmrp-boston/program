
import React from 'react';
import BackToTop from './BackToTop';
import { Link, useLocation } from 'react-router-dom';

interface MenuProps {
  setDarkTheme: () => void;
  darkTheme: boolean;
}

const Menu: React.FC<MenuProps> = ({ setDarkTheme, darkTheme }) => {
  const location = useLocation();
  const menu = document.querySelector('details');
  function closeMenu() {
    menu?.removeAttribute("open")
  }

  // const darkModeIcon = !darkTheme ? 'light_mode' : 'dark_mode';
  const darkModeText = darkTheme ? 'OFF' : 'ON';
  console.log(darkTheme)

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
                <img src="./smallLogo.png" alt="The Post Meridian Radio Players" />
              </div> :
              <div id="logo">
                <img src="./smallDarkLogo.png" alt="The Post Meridian Radio Players" />
              </div>
            }
            <i className="fa-solid fa-bars"></i>
          </summary>
          <ul className={`mainMenu`}>
            <li>
              <Link to={`/${location.search}`} onClick={() => closeMenu()}>Program</Link>
            </li>
            <li>
              <Link to={`/directions${location.search}`} onClick={() => closeMenu()}>Directions</Link>
            </li>
            <li>
              <Link to={`/information${location.search}`} onClick={() => closeMenu()}>Information and Accessibility</Link>
            </li>
          </ul>
          <ul className={`secondaryMenu`}>
            <li>
              <a href="https://www.pmrp.org" target="_blank" rel="noopener noreferrer">
                PMRP Main Website
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </li>
            <li>
              <a href="https://www.zazzle.com/store/postmeridianradio" target="_blank" rel="noopener noreferrer">
                Store
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </li>
            <li>
              <button className={`toggleDarkTheme toggleDarkTheme--${darkTheme ? 'light' : 'dark'}`} onClick={setDarkTheme} aria-pressed={darkTheme}>
                Turn Dark Mode {darkModeText}
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
                <Link to={`/${location.search}`}>Program</Link>
              </li>
              <li>
                <Link to={`/directions${location.search}`}>Directions</Link>
              </li>
              <li>
                <Link to={`/information${location.search}`}>Information and Accessibility</Link>
              </li>
            </ul>
            <ul className={`secondaryMenu`}>
              <li>
                <a href="https://www.pmrp.org" target="_blank" rel="noopener noreferrer">
                  PMRP Main Website
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>

              </li>
              <li>
                <a href="https://www.zazzle.com/store/postmeridianradio" target="_blank" rel="noopener noreferrer">
                  Store
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
              <li>
                <button className={`toggleDarkTheme toggleDarkTheme--${darkTheme ? 'light' : 'dark'}`} onClick={setDarkTheme}>
                  Turn Dark Mode {darkModeText}
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
