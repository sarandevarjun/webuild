import React from "react";
import About from "./About";
import AppointmentForm from "./AppointmentForm";
import Carousel from "./Carousel";
import Services from "./Services";
import Portfolio from "./Portfolio";
const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Services />
      <AppointmentForm />
      <Portfolio />
    </>
  );
};

export default Home;
