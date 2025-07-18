import React from 'react';

const Feedback: React.FC = () => {
  return (
    <a href="https://forms.gle/TmGCVnxHsLcWDp7s6" className="feedback--link">
      <div className="feedback">
        <span>Leave Feedback</span>
        <i className="fa-solid fa-comment"></i>
      </div>
    </a>

  );
};

export default Feedback;