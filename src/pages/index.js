import React, { useRef, useEffect } from "react";
import CreditsBlock from "../components/CreditsBlock.js";
import Bios from "../components/Bios.js";
import ResponsiveHeroImage from "../components/ResponsiveHeroImage.js";
import { scroller } from "react-scroll";
import { data } from "../data.js";
import "../styles.scss";
import AuditionFooter from "../components/AuditionFooter.js";

const IndexPage = () => {
  const scrollToBio = (name) => scroller.scrollTo(name);

  return (
    <body>
      <header>
        <h4 className="preHeader">The Post Meridian Radio Players Present</h4>
        <ResponsiveHeroImage />
      </header>
      <div className="content">
        <div className="credits">
          {/*<ATFProgramInfo />*/}
          {data.shows.map((show) => {
            <CreditsBlock show={show} goToBio={scrollToBio} />;
          })}
          <CreditsBlock show={data.crew} goToBio={scrollToBio} />
          {/*<BTFProgramInfo />*/}
        </div>
        <div>
          <Bios />
        </div>
      </div>

      <footer>{/* <AuditionFooter /> */}</footer>
    </body>
  );
};

export default IndexPage;
