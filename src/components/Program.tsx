import CreditsBlock from "../components/CreditsBlock.js";
import Bios from "../components/Bios.js";
import ResponsiveHeroImage from "../components/ResponsiveHeroImage.js";
import ATFProgramInfo from "../components/ATFProgramInfo.js";
import { scroller } from "react-scroll";
import { Person, Show, groupPeopleByShow, ShowKeys } from "../data.js";
import "../App.scss";

const Program = ({ data, showTheme, biosExist }:
  {
    data: Person[],
    showTheme: string,
    biosExist: boolean
  }) => {
  const scrollToBio = (name: string) => scroller.scrollTo(name, {});
  const peopleByShow = groupPeopleByShow(data);

  const showInfo = [] as Show[];
  for (const show in peopleByShow) {
    const showName = show;
    const credits = peopleByShow[show as ShowKeys];
    const writerCredit = data.find((person) => person.shows.includes(show as ShowKeys) && person.roles.includes("Writer"))?.name;
    const directorCredits = data.filter((person) => person.shows.includes(show as ShowKeys) && person.roles.includes("Director"));
    const adapterCredit = data.find((person) => person.shows.includes(show as ShowKeys) && person.roles.match(/Adapted/i))?.name;
    const foleyCredits = data.filter((person) => person.shows.includes(show as ShowKeys) && person.roles.match(/Foley/i));
    const showData = {
      [show as ShowKeys]: {
        showName,
        writerCredit,
        adapterCredit,
        directorCredits,
        credits,
        foleyCredits
      },
    };
    showInfo.push(showData[show as ShowKeys]);
  }
  console.log(showInfo)
  // return showInfo


  return (
    <div>
      <header>
        <h4 className="preHeader">The Post Meridian Radio Players Present</h4>
        <ResponsiveHeroImage imgAlt="Two images on either side of the title - 'Bullets Over Boston'. On the left: an outline of a woman in a trenchcoat and fedora shrouded in shadow. On the right: a stylized drawing of a finely dressed man and woman in eveningwear with a small dog." imgSrc={`./${showTheme}banner.jpg`} />
      </header>
      <div className="content">
        <div className="credits">
          <ATFProgramInfo />
          {showInfo.map((show) => (
            <CreditsBlock show={show} goToBio={scrollToBio} crewBlock={!show.showName} />
          ))}
          {/*<BTFProgramInfo />*/}
        </div>
        {biosExist && (
          <div>
            <Bios credits={data} />
          </div>
        )}
      </div>

      <footer>{/* <AuditionFooter /> */}</footer>
    </div>
  );
};

export default Program;