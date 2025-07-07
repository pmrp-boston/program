import { useState, useEffect, useCallback } from 'react';
import './App.scss';
import Program from './components/Program';
import { ProdKeys, PROD_KEYS, showInfo, Show, Bio } from './data';
import Menu from './components/Menu';
import Directions from './components/Directions';
import Information from './components/Information';

export default function App() {
  const [data, setData] = useState<{
    shows: Show[],
    fullTitle: string,
    imgSrc: string,
    imgAlt: string,
    introduction: string,
    bios: Bio[]
  }>({ shows: [], fullTitle: '', imgSrc: '', imgAlt: '', introduction: '', bios: [] });
  const [showTheme, setShowTheme] = useState<string>('');
  const [activeComponent, setActiveComponent] = useState<string>('program');

  const readData = useCallback(async (show: ProdKeys) => {
    try {
      const module = await import(`./assets/${show}.json`);
      const showData = module.default;
      setData(showData);
    } catch (error) {
      console.error('Error reading data from JSON:', error);
    }
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const showParam = urlParams.get('show');

    if (urlParams.has('show') && showParam && Object.values(PROD_KEYS).includes(showParam)) {
      const validShowParam = showParam as ProdKeys;
      console.log('show param exists, reading data for', validShowParam)
      readData(validShowParam);
      setShowTheme(validShowParam)
    } else {
      console.log('no show param exists')
    }
    document.title = `Current Page: ${activeComponent}`;
  }, [activeComponent, readData, showInfo]);

  const setActiveComponentHandler = (component: string) => {
    setActiveComponent(component);
  };

  const renderComponent = () => {
    if (activeComponent === 'program') {
      return (
        <div aria-live="polite" className="content">
          <Program
            data={data.shows}
            imgAlt={data.imgAlt}
            imgSrc={data.imgSrc}
            fullTitle={data.fullTitle}
            intro={data.introduction}
            showTheme={showTheme}
            bios={data.bios} />
        </div>
      );
    } else if (activeComponent === 'directions') {
      return (
        <div aria-live="polite" className="content">
          <Directions />
        </div>
      );
    } else if (activeComponent === 'information') {
      return (
        <div aria-live="polite" className="content">
          <Information />
        </div>
      );
    }
    else {
      return (
        <div aria-live="polite" className="content">
          <Program
            data={data.shows}
            imgAlt={data.imgAlt}
            imgSrc={data.imgSrc}
            fullTitle={data.fullTitle}
            intro={data.introduction}
            showTheme={showTheme}
            bios={data.bios} />
        </div>
      );
    }
  };

  return (
    <div className={showTheme}>
      <Menu setActive={setActiveComponentHandler} />
      {renderComponent()}
      <a href="#top" className="backToTop--link">
        <div className="backToTop">
          <span>Back to Top</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
          </svg>
        </div>
      </a>
    </div>
  );
}
