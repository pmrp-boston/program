const ResponsiveHeroImage = ({ imgSrc = './DangerousBannerSimple.png' }: { imgSrc?: string }) => {
  return (
    <div className='heroBannerImg'>
      <img src={imgSrc} alt="The Post Meridian Radio Players Presents: Dangerous Adventures!" className="heroBannerImage" />
    </div>
  );
};

export default ResponsiveHeroImage;
