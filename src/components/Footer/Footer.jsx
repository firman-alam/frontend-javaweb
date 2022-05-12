import React from "react";
import "./Footer.scss";
import { images } from "../../constants";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer_top">
        <h1>Good Living for a good life</h1>
        <h3>Choose now!</h3>
        <button className="custom__button">Get the discons</button>
      </div>
      <div className="app__footer_bottom">
        <div className="app__footer-mode">
          <div className="app__footer_logo">
            <img src={images.logo2} alt="logo" />
          </div>

          <div className="app__footer_contact">
            <h1>FOLLOW US</h1>
            <div className="app__footer-icons">
              <InstagramIcon />
              <TwitterIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="app__footer-copyright">
        <p>Copyright © 2022 BudiLuhur Apartment</p>
      </div>
    </div>
  );
};

export default Footer;
