import React from 'react';

const BackToTop: React.FC = () => {
  return (
    <div className="backToTop">
      <a href="#top" className="backToTop--link">
        <span>Back to Top</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
        </svg>
      </a>
    </div>
  );
};

export default BackToTop;
