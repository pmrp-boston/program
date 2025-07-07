import React from 'react';

interface ATFProgramInfoProps {
    intro: string;
    fullTitle: string;
}

const ATFProgramInfo: React.FC<ATFProgramInfoProps> = ({ intro, fullTitle }) => {
    return (
        <div className="showInfo">
            <h2 className="fullTitle">{fullTitle}</h2>
            <p>{intro}</p>

        </div>
    );
};

export default ATFProgramInfo;
