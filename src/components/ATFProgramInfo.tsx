import React from 'react';

interface ATFProgramInfoProps {
    // Define your props here
}

const ATFProgramInfo: React.FC<ATFProgramInfoProps> = ({ }) => {
    return (
        <div className="showInfo">
            <h3>Program</h3>
            <p>Welcome to the Post Meridian Players' Summer Mysteries, this year featuring two adaptations of classic Dashiell Hammett stories.</p>
            <p>You can expect the show to run for approximately 60 minutes and there will be a 10 minute intermission between plays. Bathrooms are located on the lower level of the church - when facing the front doors from inside, the stairs to the left lead to a bathroom with two urinals and one stall while the stairs on the right lead to a bathroom with two stalls.</p>
        </div>
    );
};

export default ATFProgramInfo;
