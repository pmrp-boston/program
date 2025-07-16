
const Directions = ({ locations }: { locations: string[] }) => {

  return (
    <>
      {locations.length > 1 &&
        <ul className="locationsList">
          {locations.map((location, index) =>
            <li>
              <a href={`#${location}`} key={index}>{location}</a>
            </li>
          )}
        </ul>
      }
      {locations.includes('VFW') &&
        <div id="VFW">
          <h1>Directions to George Dilboy VFW Post 529</h1>
          <div className="transit">
            <h3>By Train</h3>
            <p>The nearest subway (or "T") station to the VFW is the <strong>Davis Square station</strong>. The VFW is 0.3 miles from the station or about 6 to 10 minutes by foot.</p>
            <ol>
              <li>
                Exit the station onto <strong>College Ave</strong> then turn left and walk straight until you meet <strong>Elm Street</strong>.
              </li>
              <li>
                Turn left and follow Elm Street until you pass <strong>Dragon Pizza</strong> on your left.
              </li>
              <li>
                Veer left onto <strong>Summer Street</strong>, passing the <strong>Winter Hill Bank</strong>. The VFW will be on your left.
              </li></ol>
            <h3>By Bus</h3>
            <p>The closest bus stop to the VFW is the <strong>87 stop</strong> at the <strong>intersection of Elm Street and Russel Street</strong>.</p>
            <ol>
              <li>
                Exit the Davis Square T station onto <strong>Holland Street</strong> to catch the 87 bus.
              </li>
              <li>The bus will let you off right in front of our usual venue, <strong>Guild Church</strong>. Face away from the church and cross Elm Street.</li>
              <li>Continue along Russel Street toward the <strong>Winter Hill Bank</strong> and <strong>Summer Street</strong>.</li>
              <li>
                Turn right onto Summer Street. The VFW will be on your left.
              </li>
            </ol>
          </div>
          <div className="driving">
            <h2>By Car</h2>
            <h3>From US-1 Northbound or Southbound</h3>
            <ol>
              <li>
                Take <strong>exit 31</strong> following signs for <strong>Route 16 East / Mystic Valley Parkway / Arlington / Everett</strong>.
              </li>
              <li>
                Merge onto <strong>Route 16 East</strong> (Mystic Valley Parkway) and continue toward I-93 North.
              </li>
              <li>
                Take the ramp to <strong>merge onto I-93 North toward Boston</strong>.
              </li>
              <li>
                Follow directions from I-93 below.
              </li>
            </ol>
            <h3>From I-93 Northbound or Southbound</h3>
            <ol>
              <li>
                Take <strong>Exit 29</strong> off of I-93 for MA-28 / MA-38 / Mystic Avenue / Somerville / Medford.
              </li>
              <li>
                Merge onto <strong>Mystic Avenue</strong> (MA-38 South). Follow Mystic Ave for about <strong>1 mile</strong>.
              </li>
              <li>
                Follow signs for <strong>McGrath Highway</strong> (MA-28 South) to continue onto McGrath Highway.
              </li>
              <li>
                Use the right lane to take the exit with signs for <strong>Medford Street/Broadway</strong>.
              </li>
              <li>
                You will come to a large roundabout, <strong>Powder House Circle</strong>. Take the <strong>second exit</strong> onto <strong>Holland Street</strong>.
              </li>
              <li>
                Holland Street will turn into <strong>Elm Street</strong> as you approach Davis Square. Veer <strong>left onto Summer Street</strong> after passing the Davis Square MBTA station.
              </li>
              <li>
                The VFW will be on your <strong>left</strong> at 371 Summer Street.
              </li>
            </ol>

          </div>
        </div>
      }
      {locations.includes('Guild Church') &&
        <div id="Guild Church">
          <h1>Directions to the Guild Church</h1>
          <div className="transit">
            <h3>By Train</h3>
            <p>The nearest subway (or "T") station to the church is the <strong>Davis Square station</strong>. The VFW is 0.3 miles from the station or about 6 to 10 minutes by foot.</p>
            <ol>
              <li>
                Exit the station onto <strong>College Ave</strong> then turn left and walk straight until you meet <strong>Elm Street</strong>.
              </li>
              <li>
                Turn left and follow Elm Street until you pass <strong>Dragon Pizza</strong> on your left.
              </li>
              <li>
                Keep right to stay on Elm Street until you cross Russell Street. The church is on the corner of Elm Street and Russell Street.
              </li></ol>
            <h3>By Bus</h3>
            <p>The <strong>87 bus stop</strong> at the <strong>intersection of Elm Street and Russel Street</strong> is directly in front of the Guild Church. Exit the Davis Square T station onto <strong>Holland Street</strong> to catch the 87 bus.</p>
          </div>
          <div className="driving">
            <h2>By Car</h2>
            <h3>From US-1 Northbound or Southbound</h3>
            <ol>
              <li>
                Take <strong>exit 31</strong> following signs for <strong>Route 16 East / Mystic Valley Parkway / Arlington / Everett</strong>.
              </li>
              <li>
                Merge onto <strong>Route 16 East</strong> (Mystic Valley Parkway) and continue toward I-93 North.
              </li>
              <li>
                Take the ramp to <strong>merge onto I-93 North toward Boston</strong>.
              </li>
              <li>
                Follow directions from I-93 below.
              </li>
            </ol>
            <h3>From I-93 Northbound or Southbound</h3>
            <ol>
              <li>
                Take <strong>Exit 29</strong> off of I-93 for MA-28 / MA-38 / Mystic Avenue / Somerville / Medford.
              </li>
              <li>
                Merge onto <strong>Mystic Avenue</strong> (MA-38 South). Follow Mystic Ave for about <strong>1 mile</strong>.
              </li>
              <li>
                Follow signs for <strong>McGrath Highway</strong> (MA-28 South) to continue onto McGrath Highway.
              </li>
              <li>
                Use the right lane to take the exit with signs for <strong>Medford Street/Broadway</strong>.
              </li>
              <li>
                You will come to a large roundabout, <strong>Powder House Circle</strong>. Take the <strong>second exit</strong> onto <strong>Holland Street</strong>.
              </li>
              <li>
                Holland Street will turn into <strong>Elm Street</strong> as you approach Davis Square. Keep <strong>right to stay on Elm Street</strong> after passing the Davis Square MBTA station.
              </li>
              <li>
                The church will be on your <strong>right</strong> at 52 Russel Street.
              </li>
            </ol>

          </div>
        </div>
      }
    </>
  );
};

export default Directions;
