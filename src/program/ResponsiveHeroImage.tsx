const ResponsiveHeroImage = ({ imgAlt, imgSrc = './DangerousBannerSimple.png' }: { imgAlt: string, imgSrc?: string }) => {
  return (
    <div className='heroBannerImg'>
      <img src={imgSrc} alt={imgAlt} className="heroBannerImage" />
    </div>
  );
};

export default ResponsiveHeroImage;
