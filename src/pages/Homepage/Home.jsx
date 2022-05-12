import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import HeroImage from "../../components/HeroImage/HeroImage";
import Facilities from "../../components/Facilities/Facilities";
import Rooms from "../../components/Rooms/Rooms";
import Gallery from "../../components/Gallery/Gallery";

function Home() {
  return (
    <>
      <Navbar />
      <HeroImage />
      <Facilities />
      <Rooms />
      <Gallery />
      <Footer />
    </>
  );
}

export default Home;
