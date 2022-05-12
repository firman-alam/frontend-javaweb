import React from "react";
import "./Gallery.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InstagramIcon from "@mui/icons-material/Instagram";
import { images } from "../../constants";

const Gallery = () => {
  return (
    <div className="app__gallery">
      <div className="app__gallery-content">
        <h1>Photo Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="custom__button-gallery">View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container">
          {[
            images.gallery1,
            images.gallery2,
            images.gallery3,
            images.gallery4,
            images.gallery5,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery images" />
              <InstagramIcon className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <ArrowBackIcon className="gallery__arrow-icon" />
          <ArrowForwardIcon className="gallery__arrow-icon" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
