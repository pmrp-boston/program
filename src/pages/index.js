import React, { useRef, useEffect } from "react";
import CreditsBlock from "../components/CreditsBlock.js";
import Bios from "../components/Bios.js";
import ResponsiveHeroImage from "../components/ResponsiveHeroImage.js";
import AuditionFooter from "../components/AuditionFooter.js";
import {
  scroller,
} from "react-scroll";
import { data } from "../data.js";
import "../styles.scss";

const IndexPage = () => {
  const scrollToBio = (name) => scroller.scrollTo(name);

  return (
    <body>
      <header>
        <h4 className="preHeader">The Post Meridian Radio Players Present</h4>
        <ResponsiveHeroImage />
        {useWindowDimensions().width < 530 && (
          <h4 className="postHeader">
            Plus! The never before revealed to the public{" "}
            <span className="highlightText">
              "Plan 8 from the Outer Ether!"
            </span>{" "}
            by Brian Rust
          </h4>
        )}
      </header>
      <div className="content">
        <div className="credits">
          {/*<ATFProgramInfo />*/}
          <CreditsBlock show={data.scarlet} goToBio={scrollToBio} />
          <CreditsBlock show={data.crew} goToBio={scrollToBio} />
          {/*<BTFProgramInfo />*/}
        </div>
        <div>
          <Bios />
        </div>
      </div>

      <footer>{/*<SocialMediaLinks />*/}</footer>
    </body>
  );
};

export default IndexPage;
