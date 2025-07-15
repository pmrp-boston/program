import CreditsBlock from "./CreditsBlock.js";
import Bios from "./Bios.js";
import ResponsiveHeroImage from "./ResponsiveHeroImage.js";
import ATFProgramInfo from "./ATFProgramInfo.js";
import { Production } from "../data.js";
import "../App.scss";

const Program = ({ shows, imgAlt, imgSrc, fullTitle, introduction, bios, ticketsLink = '', dates = [], locations = [] }:
  Production) => {
  const biosExist = bios.length > 0;

  return (
    <div>
      <div className="credits">
        <div className="programHeader">
          <h4 className="preHeader">The Post Meridian Radio Players Present</h4>
          <ResponsiveHeroImage imgAlt={imgAlt} imgSrc={imgSrc} />
        </div>
        <ATFProgramInfo fullTitle={fullTitle} intro={introduction} ticketLink={ticketsLink} dates={dates} locations={locations} />
        {shows.map((show, index) => (
          <CreditsBlock key={index} show={show} biosExist={biosExist} crewBlock={!show.showName} />
        ))}
        {/*<BTFProgramInfo />*/}
      </div>
      {biosExist && (
        <div>
          <Bios bios={bios} />
        </div>
      )}
    </div>
  );
};

export default Program;
