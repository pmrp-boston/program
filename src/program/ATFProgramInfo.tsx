import React from 'react';
import { Link } from 'react-router-dom';

interface ATFProgramInfoProps {
    intro: string;
    fullTitle: string;
    ticketLink?: string;
    dates?: string[];
    locations?: string[];
}


const ATFProgramInfo: React.FC<ATFProgramInfoProps> = ({ intro, fullTitle, ticketLink, dates = [], locations = [] }) => {
    const addresses: string[] = [];
    locations.map((location) => {
        if (location === 'VFW') {
            addresses.push("George Dilboy VFW Post 529\n351 Summer Street\nSomerville, MA 02144");
        }
    })
    return (
        <div className="ATFshowInfo">
            <h1 className="fullTitle">{fullTitle}</h1>
            <div className="dates">
                {dates.map((date, index) => (
                    <span key={index} className="date">
                        {date}
                    </span>
                ))}
            </div>
            <div className="locations">
                {addresses.map((location, index) => (
                    <a href="https://maps.app.goo.gl/QoExhbjdaC8NAGSH9" key={index} className="location">
                        {location}
                    </a>
                ))}
            </div>
            <p>{intro}</p>

            <div className="buttonsAndLinks">
                {ticketLink && (
                    <a href={ticketLink} target="_blank" className="ticketLink">
                        Reserve your seat
                    </a>
                )}
            </div>
            <p>Both alcoholic and non-alcoholic beverages will be available for purchase at the cash bar in the back of the performance space. Candy, snacks, and PMRP merchandise will also be on sale before the show.</p>
            <p>
                The show runs for approximately <strong>1 hour</strong> with <strong>no intermission</strong>. House doors open at <strong>7:30 PM</strong> to give time to buy or pick up reserved tickets, purchase refreshments, and find your seat before the show starts at <strong>8 PM</strong>.
            </p>
            <div className="buttonsAndLinks">
                <Link to={`/directions${location.search}`}>Directions</Link>
                <Link to={`/information${location.search}`}>Information and Accessibility</Link>
            </div>
        </div>
    );
};

export default ATFProgramInfo;
