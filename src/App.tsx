import { useState, useEffect, useCallback } from 'react';
import './App.scss';
import Program from './program/Program';
import { ProdKeys, PROD_KEYS, showInfo, Production } from './data';
import Menu from './components/Menu';
import Directions from './directions/Directions';
import Information from './information/Information';
import { Routes, Route, useSearchParams } from 'react-router-dom';

export default function App() {
  const [data, setData] = useState<Production>({ shows: [], fullTitle: '', imgSrc: '', imgAlt: '', introduction: '', bios: [], ticketsLink: '', dates: [] });
  const [showTheme, setShowTheme] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();

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
    const showParam = searchParams.get('show');

    if (searchParams.has('show') && showParam && Object.values(PROD_KEYS).includes(showParam)) {
      const validShowParam = showParam as ProdKeys;
      readData(validShowParam);
      if (showTheme == '') {
        setShowTheme(validShowParam);
      }
    }
  }, [searchParams, readData, showInfo]);

  const setDarkTheme = () => {
    if (showTheme.endsWith('-dark')) {
      setShowTheme(showTheme.replace('-dark', ''));
      return;
    } else {
      setShowTheme(`${showTheme}-dark`);
    }
  }

  const darkTheme = showTheme.endsWith('-dark') ? true : false;

  return (
    <div className={showTheme}>
      <Menu darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div id="content">
        <Routes>
          <Route path="/" element={<Program
            shows={data.shows}
            imgAlt={data.imgAlt}
            imgSrc={data.imgSrc}
            fullTitle={data.fullTitle}
            introduction={data.introduction}
            bios={data.bios}
            ticketsLink={data.ticketsLink}
            dates={data.dates}
            locations={data.locations} />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </div>
    </div>
  );
}
