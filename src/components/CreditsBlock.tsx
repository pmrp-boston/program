import useWindowDimensions from "../useWindowDimensions.tsx";
import { Person, Show, ShowKeys } from '../data.js';

const CreditsBlock = ({ show, biosExist, goToBio, crewBlock }: { show: Show, biosExist: boolean, goToBio: (name: string) => void, crewBlock: boolean }) => {
  const { showName, writerCredit, adapterCredit, directorCredits, description, credits, foleyCredits } = show;
  return (
    <div className="programBlock">
      <div className="programBlock-header">
        {showName ? <h3>{showName}</h3> : <h3>Crew</h3>}

        <div className="programBlock-header--highlightCredits">

          {directorCredits.length > 0 && (
            <HighlightCredit name={directorCredits[0].name} defaultPhrase={`Directed by ${directorCredits[0].name}`} biosReady={biosExist} goToBio={goToBio} phrase={directorCredits[0].phrase} />
          )}
          {directorCredits.length > 1 && (
            <a aria-role="button" onClick={() => goToBio(directorCredits[1].name)} className={`highlightCredit${biosExist ? "" : "-noBios"}`}>
              <h4 className={`highlightCredit${biosExist ? "" : "-noBios"}`}>Assistant Directed by {directorCredits[1].name}
                <span className="material-symbols-outlined">
                  history_edu
                </span></h4>
            </a>
          )}
          {writerCredit && (
            <a aria-role="button" onClick={() => goToBio(writerCredit.name)} className={`highlightCredit${biosExist ? "" : "-noBios"}`}>
              <h4 className={`highlightCredit${biosExist ? "" : "-noBios"}`}>{writerCredit.phrase || `Written by ${writerCredit.name}`}
                <span className="material-symbols-outlined">
                  history_edu
                </span></h4>

            </a>
          )}
          {adapterCredit &&
            <h4 className={`highlightCredit${biosExist ? "" : "-noBios"}`}>{adapterCredit.phrase || `Adapted by ${adapterCredit}`}<span className="material-symbols-outlined">
              history_edu
            </span></h4>}

        </div>
      </div>
      {description && <p>{description}</p>}
      {credits.map((credit) => (
        <SingleCredit show={showName as ShowKeys} credit={credit} goToBio={goToBio} />
      ))}
      {foleyCredits.length > 0 && (
        <div>
          {!crewBlock && <div className="foleyDivider"></div>}
          {foleyCredits.map((credit) => (
            <SingleCredit show={showName as ShowKeys} credit={credit} goToBio={goToBio} />
          ))}
        </div>
      )}
    </div>
  );
};

const HighlightCredit = ({ name, defaultPhrase, biosReady, goToBio, phrase = "" }: { name: string, defaultPhrase: string, biosReady: boolean, goToBio: (name: string) => void, phrase?: string }) => {
  if (biosReady) {
    return (
      <a aria-role="button" onClick={() => goToBio(name)} className={`highlightCredit${biosReady ? "" : "-noBios"}`}>
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

const SingleCredit = ({ show, credit, goToBio, biosReady = false }: { show: ShowKeys, credit: Person, goToBio: (name: string) => void, biosReady?: boolean }) => {
  const { name, roles } = credit;
  console.log(`SingleCredit: ${name} - ${roles}`);
  const { width } = useWindowDimensions();
  // const roleString = roles.join(', ');
  const wrapFixRole = roles.length > 10 && width < 400;
  const wrapFixName = name.length > 10 && width < 400;



  return (
    <div className="singleCredit">
      <span className={`singleCredit-role ${wrapFixRole ? "wrapFix" : "noFix"}`}>{roles.join(', ')}</span>
      <span className="dots"></span>
      {biosReady && <a aria-role="button" onClick={() => goToBio(name)} className={`singleCredit-name ${wrapFixName ? "wrapFix" : "noFix"}`}>
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
