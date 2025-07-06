import { useState, useEffect, useCallback } from 'react';
import './App.scss';
import Program from './components/Program';
import { Person, ProdKeys, PROD_KEYS, ShowKeys, showInfo } from './data';
import jsonData from './assets/showData.json';
import Menu from './components/Menu';

function OtherComponent1() {
  return (
    <div>
      <h2>This is component 1!</h2>
      <p>It can be swapped with the Program component.</p>
    </div>
  );
}

function OtherComponent2() {
  return (
    <div>
      <h2>This is component 2!</h2>
      <p>It can also be swapped with the Program component.</p>
    </div>
  );
}

export default function App() {
  const [data, setData] = useState<Person[]>([]);
  const [showTheme, setShowTheme] = useState<string>('');
  const [biosExist, setBiosExist] = useState<boolean>(false);
  const [activeComponent, setActiveComponent] = useState<string>('program');

  const readData = useCallback((show: ProdKeys) => {
    try {
      const extractedData = processJsonData((jsonData as any)[show]);
      console.log('Parsed JSON Data:', extractedData);
      setData(extractedData);
    } catch (error) {
      console.error('Error reading data from JSON:', error);
    }
  }, []);

  const processJsonData = useCallback((jsonData: any[]): Person[] => {
    console.log(`JSON data:`, jsonData);
    return jsonData.map((row: any) => ({
      name: row["Full Name"],
      shows: Object.keys(row.Roles) as ShowKeys[], // Assuming Roles is an object with show keys
      roles: row.Roles,
      bio: row.Bio,
    })).filter((person: Person) => person.name);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const showParam = urlParams.get('show');

    if (urlParams.has('show') && showParam && Object.values(PROD_KEYS).includes(showParam)) {
      const validShowParam = showParam as ProdKeys;
      console.log('show param exists, reading data for', validShowParam)
      setBiosExist(showInfo[validShowParam as ProdKeys].biosExist);
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
          <Program data={data} showTheme={showTheme} biosExist={biosExist} />
        </div>
      );
    } else if (activeComponent === 'other1') {
      return (
        <div aria-live="polite" className="content">
          <OtherComponent1 />
        </div>
      );
    } else {
      return (
        <div aria-live="polite" className="content">
          <OtherComponent2 />
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
