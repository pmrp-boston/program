import useWindowDimensions from "../useWindowDimensions.tsx";
import { Person, Show, ShowKeys } from '../data.js';

const CreditsBlock = ({ show, goToBio, crewBlock }: { show: Show, goToBio: (name: string) => void, crewBlock: boolean }) => {
  const { showName, writerCredit, adapterCredit, directorCredits, description, credits, foleyCredits } = show;


  return (
    <div className="programBlock">
      <div className="programBlock-header">
        {showName ? <h3>{showName}</h3> : <h3>Crew</h3>}

        <div className="programBlock-header--highlightCredits">

          {directorCredits.length > 0 && (
            <a onClick={() => goToBio(directorCredits[0].name)} className="highlightCredit">
              <h4 className="highlightCredit">Directed by {directorCredits[0].name}
                <span className="material-symbols-outlined">
                  history_edu
                </span></h4>

            </a>
          )}
          {directorCredits.length > 1 && (
            <a onClick={() => goToBio(directorCredits[1].name)} className="highlightCredit">
              <h4 className="highlightCredit">Assistant Directed by {directorCredits[1].name}
                <span className="material-symbols-outlined">
                  history_edu
                </span></h4>
            </a>
          )}
          {writerCredit && (
            <a onClick={() => goToBio(writerCredit?.name)} className="highlightCredit">
              <h4 className="highlightCredit">Written by {writerCredit?.name}
                <span className="material-symbols-outlined">
                  history_edu
                </span></h4>

            </a>
          )}
          {adapterCredit &&
            <h4 className="highlightCredit">Adapted by {adapterCredit.name}<span className="material-symbols-outlined">
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

const SingleCredit = ({ show, credit, goToBio }: { show: ShowKeys, credit: Person, goToBio: (name: string) => void }) => {
  const { name, roles } = credit;
  const { width } = useWindowDimensions();
  const roleString = roles[show].join(', ');
  const wrapFixRole = roleString.length > 10 && width < 400;
  const wrapFixName = name.length > 10 && width < 400;



  return (
    <div className="singleCredit">
      <span className={`singleCredit-role ${wrapFixRole ? "wrapFix" : "noFix"}`}>{roleString}</span>
      <span className="dots"></span>
      <a onClick={() => goToBio(name)} className={`singleCredit-name ${wrapFixName ? "wrapFix" : "noFix"}`}>
        {name}
        <span className="material-symbols-outlined">
          history_edu
        </span>
      </a>
    </div>
  );
};


export default CreditsBlock;
