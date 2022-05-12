import React from "react";
import "./HeroImage.scss";
import { useNavigate } from "react-router-dom";

const HeroImage = () => {
  const navigate = useNavigate();

  return (
    <div className="app__heroimage" id="Home">
      <div className="app__heroimage-text">
        <h2>Welcome to</h2>
        <h1>Budi Luhur Apartment</h1>
        <button
          className="custom__button button"
          onClick={() => navigate("/Booking")}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
