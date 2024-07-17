import * as React from "react";
import useWindowDimensions from "../utilities/useWindowDimensions.js";

const CreditsBlock = ({ show, goToBio }) => {
  const { showName, writerCredit, directorCredit, description, credits } = show;

  return (
    <div className="programBlock">
      <div className="programBlock-header">
        <h3>{showName}</h3>
        {writerCredit && <h4 className="highlightCredit">{writerCredit}</h4>}
        {directorCredit && (
          <h4 className="highlightCredit">{directorCredit}</h4>
        )}
      </div>
      {description && <p>{description}</p>}
      {credits.map((credit) => (
        <SingleCredit credit={credit} goToBio={goToBio} />
      ))}
    </div>
  );
};

const SingleCredit = ({ credit, goToBio }) => {
  const { name, role } = credit;
  const {width} = useWindowDimensions();
  const wrapFixRole = role.length > 16 && width < 400;
  const wrapFixName = name.length > 16 && width < 400;

  

  return (
    <div className="singleCredit">
      <span className={`singleCredit-role ${wrapFixRole ? "wrapFix" : "noFix"}`}>{role}</span>
      <span className="dots"></span>
      <a onClick={() => goToBio(name)} className={`singleCredit-name ${wrapFixName ? "wrapFix" : "noFix"}`}>
        {name}
      </a>
    </div>
  );
};

export default CreditsBlock;
