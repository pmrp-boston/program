import * as React from "react";
import { plan9, plan8, crew, data } from "../data.js";
import useWindowDimensions from "../utilities/useWindowDimensions.js";
import Scroll from "react-scroll";

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

  return (
    <div className="singleCredit">
      <span className="singleCredit-role">{role}</span>
      <span className="dots"></span>
      <span onClick={() => goToBio(name)} className="singleCredit-name">
        {name}
      </span>
    </div>
  );
};

export default CreditsBlock;
