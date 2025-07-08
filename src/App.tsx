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
    bios: Bio[],
    ticketsLink?: string
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

  const setDarkTheme = () => {
    if (showTheme.endsWith('-dark')) {
      setShowTheme(showTheme.replace('-dark', ''));
      return;
    } else {
      setShowTheme(`${showTheme}-dark`);
    }
  }

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
            bios={data.bios}
            ticketsLink={data.ticketsLink} />
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
            bios={data.bios}
            ticketsLink={data.ticketsLink}
          />
        </div>
      );
    }
  };

  const darkTheme = showTheme.endsWith('-dark') ? true : false;

  return (
    <div className={showTheme}>
      <Menu setActive={setActiveComponentHandler} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div id="content">
        {renderComponent()}
      </div>
    </div>
  );
}
