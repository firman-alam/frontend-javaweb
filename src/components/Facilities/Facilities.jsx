import React from "react";
import "./Facilities.scss";
import { data } from "../../constants";

const Facilites = () => {
  return (
    <div className="app__services" id="Services">
      <div className="app__services-container">
        <div className="app__services-head">
          WHY CHOOSE BUDI LUHUR APARTMENT
        </div>
        <div className="app__service">
          {data.services.map((service, index) => (
            <div className="app__service_card" key={service.title + index}>
              <div className="app__service_card-title">{service.title}</div>
              <div className="app__service_card-desc">{service.service}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilites;
