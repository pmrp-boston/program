import React from 'react';

const BackToTop: React.FC = () => {
  return (

    <a aria-label='Back to Top' href="#top" className="backToTop--link">
      <div className="backToTop">
        <i className="fa-solid fa-arrow-up"></i>
        <span>Top</span>
      </div>
    </a>

  );
};

export default BackToTop;
