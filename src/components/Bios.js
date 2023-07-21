import React from "react";
import { data } from "../data.js";
import { Element } from "react-scroll";

const Bios = () => {
  const biosArray = data.bios;

  const compare = (a, b) => {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  };

  biosArray.sort(compare);

  return (
    <div className="biosBlock">
      <h3 className="biosBlock-title">Cast & Crew Bios</h3>
      <div className="biosBlock-wrapper">
        {biosArray.map((bio) => {
          return <SingleBio name={bio.name} bioText={bio.bioText} />;
        })}
      </div>
    </div>
  );
};

const SingleBio = ({ name, bioText }) => {
  return (
    <Element name={name}>
      <div className="biosBlock-singleBio" id={name}>
        <h4 className="biosBlock-singleBio--title">{name}</h4>
        <div className="biosBlock-singleBio--copyText">{bioText}</div>
      </div>
    </Element>
  );
};

// const SingleBioWithScroll = ScrollElement(SingleBio);

export default Bios;
