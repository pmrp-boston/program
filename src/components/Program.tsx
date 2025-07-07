import CreditsBlock from "../components/CreditsBlock.js";
import Bios from "../components/Bios.js";
import ResponsiveHeroImage from "../components/ResponsiveHeroImage.js";
import ATFProgramInfo from "../components/ATFProgramInfo.js";
import { scroller } from "react-scroll";
import { Show, Bio } from "../data.js";
import "../App.scss";

const Program = ({ data, imgAlt, imgSrc, fullTitle, intro, bios }:
  {
    data: Show[],
    imgAlt: string,
    imgSrc: string,
    fullTitle: string,
    intro: string,
    showTheme: string,
    bios: Bio[]
  }) => {
  const biosExist = bios.length > 0;
  const scrollToBio = (name: string) => {
    scroller.scrollTo(name, {
      callback: () => {
        const element = document.getElementById(name);
        if (element) {
          element.focus();
        }
      }
    });
  };


  return (
    <div>
      <div className="credits">
        <header>
          <h4 className="preHeader">The Post Meridian Radio Players Present</h4>
          <ResponsiveHeroImage imgAlt={imgAlt} imgSrc={imgSrc} />
        </header>
        <ATFProgramInfo fullTitle={fullTitle} intro={intro} />
        {data.map((show) => (
          <CreditsBlock show={show} biosExist={biosExist} goToBio={scrollToBio} crewBlock={!show.showName} />
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
