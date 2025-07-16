import React from 'react';

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
        </div>
    );
};

export default ATFProgramInfo;
