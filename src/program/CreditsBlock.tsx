import useWindowDimensions from "../useWindowDimensions.tsx";
import { Person, Show } from '../data.js';

const goToBio = (name: string) => {
  const element = document.getElementById(name);
  if (element) {
    element.focus();
  }
};

const CreditsBlock = ({ show, biosExist, crewBlock }: { show: Show, biosExist: boolean, crewBlock: boolean }) => {
  const { showName, writerCredit, adapterCredit, directorCredits, description, credits, foleyCredits } = show;
  return (
    <div className="programBlock">
      <div className="programBlock-header">
        {showName ? <h3>{showName}</h3> : <h3>Crew</h3>}

        <div className="programBlock-header--highlightCredits">

          {directorCredits && directorCredits.length > 0 && (
            <HighlightCredit name={directorCredits[0].name} defaultPhrase={`Directed by ${directorCredits[0].name}`} biosReady={biosExist} goToBio={goToBio} phrase={directorCredits[0].phrase} />
          )}
          {directorCredits && directorCredits.length > 1 && (
            <HighlightCredit name={directorCredits[1].name} defaultPhrase={`Assistant Directed by ${directorCredits[1].name}`} biosReady={biosExist} goToBio={goToBio} phrase={directorCredits[1].phrase} />
          )}
          {writerCredit && (
            <HighlightCredit name={writerCredit.name} defaultPhrase={`Written by ${writerCredit.name}`} biosReady={biosExist} goToBio={goToBio} phrase={writerCredit.phrase} />
          )}
          {adapterCredit &&
            <HighlightCredit name={adapterCredit.name} defaultPhrase={`Adapted by ${adapterCredit.name}`} biosReady={biosExist} goToBio={goToBio} phrase={adapterCredit.phrase} />
          }

        </div>
      </div>
      {description && <p>{description}</p>}
      {credits.map((credit) => (
        <SingleCredit credit={credit} goToBio={goToBio} biosReady={biosExist} />
      ))}
      {foleyCredits && foleyCredits.length > 0 && (
        <div>
          {!crewBlock && <div className="foleyDivider"></div>}
          {foleyCredits.map((credit) => (
            <SingleCredit credit={credit} goToBio={goToBio} biosReady={biosExist} />
          ))}
        </div>
      )}
    </div>
  );
};

const HighlightCredit = ({ name, defaultPhrase, biosReady, goToBio, phrase = "" }: { name: string, defaultPhrase: string, biosReady: boolean, goToBio: (name: string) => void, phrase?: string }) => {
  if (biosReady) {
    return (
      <a href={`#${name}`} onClick={() => goToBio(name)} className={`highlightCredit${biosReady ? "" : "-noBios"}`}>
        <h4 className={`highlightCredit${biosReady ? "" : "-noBios"}`}>{phrase || defaultPhrase}
          <span className="material-symbols-outlined">
            history_edu
          </span>
        </h4>
      </a>
    );
  } else {
    return (
      <h4 className={`highlightCredit${biosReady ? "" : "-noBios"}`}>
        {phrase || defaultPhrase}
      </h4>
    );
  }

};

const SingleCredit = ({ credit, goToBio, biosReady = false }: { credit: Person, goToBio: (name: string) => void, biosReady?: boolean }) => {
  const { name, roles } = credit;
  const { width } = useWindowDimensions();
  // const roleString = roles.join(', ');
  const wrapFixRole = roles.length > 10 && width < 400;
  const wrapFixName = name.length > 10 && width < 400;



  return (
    <div className="singleCredit">
      <span className={`singleCredit-role ${wrapFixRole ? "wrapFix" : "noFix"}`}>{roles.join(', ')}</span>
      <span className="dots"></span>
      {biosReady && <a href={`#${name}`} onClick={() => goToBio(name)} className={`singleCredit-name ${wrapFixName ? "wrapFix" : "noFix"}`}>
        {name}
        <span className="material-symbols-outlined">
          history_edu
        </span>
      </a>}
      {!biosReady && <span className={`singleCredit-name ${wrapFixName ? "wrapFix" : "noFix"}`}>{name}</span>}
    </div>
  );
};


export default CreditsBlock;
