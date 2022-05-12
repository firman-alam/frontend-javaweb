import React from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img
          src={images.logo2}
          alt="budi luhur"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="navbar__right">
        <ul className="navbar__links">
          <li>
            <a href="" onClick={() => navigate("/")}>
              Home
            </a>
          </li>
          <li>
            <a href="" onClick={() => navigate("/Booking")}>
              Booking
            </a>
          </li>
          <li>
            <a href="" onClick={() => navigate("/Profile")}>
              Account
            </a>
          </li>
          <li>
            <a href="" onClick={() => navigate("/")}>
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
