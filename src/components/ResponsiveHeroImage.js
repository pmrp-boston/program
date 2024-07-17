import React from "react";
import useWindowDimensions from "../utilities/useWindowDimensions.js";

const ResponsiveHeroImage = () => {
  const imgSrc =
    "https://snackney.nyc3.cdn.digitaloceanspaces.com/PMRP/Scarlet/Scarlet9MODBANNERv2.jpg";
  return (
    <div className="heroBannerImg">
      <img src={imgSrc} />
    </div>
  );
};

export default ResponsiveHeroImage;
