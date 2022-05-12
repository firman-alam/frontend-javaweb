import React from "react";
import "./Rooms.scss";
import { images } from "../../constants";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const navigate = useNavigate();

  return (
    <div className="app__rooms" id="Rooms">
      <div className="app__rooms-heading">Choose your dream unit type</div>
      <div className="app__rooms-cards">
        <div className="app__rooms-card">
          <h1>BL-TOWER1</h1>
          <h3>Type 1 Bedroom (21 m²)</h3>
          <img src={images.room3} alt="unit-1" />
          <button
            className="custom__button"
            onClick={() => navigate("/booking")}
          >
            tap here
          </button>
        </div>
        <div className="app__rooms-card">
          <h1>BL-TOWER2</h1>
          <h3>Type 2 Bedroom (33 m²)</h3>
          <img src={images.room4} alt="unit-2" />
          <button
            className="custom__button"
            onClick={() => navigate("/booking")}
          >
            tap here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
