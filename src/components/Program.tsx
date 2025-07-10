import CreditsBlock from "../components/CreditsBlock.js";
import Bios from "../components/Bios.js";
import ResponsiveHeroImage from "../components/ResponsiveHeroImage.js";
import ATFProgramInfo from "../components/ATFProgramInfo.js";
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
        {shows.map((show) => (
          <CreditsBlock show={show} biosExist={biosExist} crewBlock={!show.showName} />
        ))}
        {/*<BTFProgramInfo />*/}
      </div>
      {biosExist && (
        <div>
          <Bios bios={bios} />
        </div>
      )}

      <footer>{/* <AuditionFooter /> */}</footer>
    </div>
  );
};

export default Program;
