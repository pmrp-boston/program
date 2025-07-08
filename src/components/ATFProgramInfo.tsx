import React from 'react';

interface ATFProgramInfoProps {
    intro: string;
    fullTitle: string;
    ticketLink?: string;
}

const ATFProgramInfo: React.FC<ATFProgramInfoProps> = ({ intro, fullTitle, ticketLink }) => {
    return (
        <div className="ATFshowInfo">
            <h2 className="fullTitle">{fullTitle}</h2>
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
