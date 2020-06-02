import React from "react";
import "../../css/banner.scss";
import Slider from "react-slick";
import logo1 from "../../images/banner-2.png";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplaySpeed: 15000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="banner-wrapper">
      <div className="container">
        <Slider {...settings} className="homeslider">
          <div>
            <div className="banner-text">
              <p>
                Buy Bumpers
                <br />
                and Grilles
              </p>
              <p>Safe and secure shopping</p>
            </div>
            <img src={logo1} alt="banner" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
