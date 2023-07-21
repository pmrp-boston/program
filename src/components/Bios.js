import React from "react";
import { data } from "../data.js";
import { Element } from "react-scroll";

const Bios = () => {
  const biosArray = data.bios;
  // let biosArray = [];
  // rawBiosData.forEach((bio) => {
  //   console.log(bio.bioText);
  //   let bioText =
  //     bio.bioText?.charAt(0).toUpperCase() + bio.bioText?.substring(1) || '';
  //   if (bioText.substring(0, 2) !== 'Is' && bioText.substring(0, 3) !== 'Has') {
  //     biosArray.push({
  //       firstName: bio.firstName,
  //       lastName: bio.lastName,
  //       bioText: bio.bioText,
  //       bioId: bio.timestamp,
  //     });
  //   } else {
  //     const bioString = bioText.charAt(0).toLowerCase() + bioText.substring(1);
  //     bioText = `${bio.firstName} ${bioString}`;
  //     biosArray.push({
  //       firstName: bio.firstName,
  //       lastName: bio.lastName,
  //       bioText,
  //       bioId: bio.timestamp,
  //     });
  //   }
  // });

  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
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
