import React from "react";
import serviceImg1 from "./assets/img/service-1.jpg";
import serviceImg2 from "./assets/img/service-2.jpg";
import serviceImg3 from "./assets/img/service-3.jpg";
import serviceImg4 from "./assets/img/service-4.jpg";
import serviceImg5 from "./assets/img/service-5.jpg";
import serviceImg6 from "./assets/img/service-6.jpg";
const services = [
  {
    img: serviceImg1,
    icon: "fa-building",
    title: "Building Construction",
    description:
      "Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo",
    link: "",
  },
  {
    img: serviceImg2,
    icon: "fa-home",
    title: "House Renovation",
    description:
      "Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo",
    link: "",
  },
  {
    img: serviceImg3,
    icon: "fa-drafting-compass",
    title: "Architecture Design",
    description:
      "Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo",
    link: "",
  },
  {
    img: serviceImg4,
    icon: "fa-palette",
    title: "Interior Design",
    description:
      "Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo",
    link: "",
  },
  {
    img: serviceImg5,
    icon: "fa-tools",
    title: "Fixing & Support",
    description:
      "Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo",
    link: "",
  },
  {
    img: serviceImg6,
    icon: "fa-paint-brush",
    title: "Painting",
    description:
      "Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo",
    link: "",
  },
];

const Services = () => {
  return (
    <div className="container-fluid bg-light py-6 px-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
        <h1 className="display-5 text-uppercase mb-4">
          We Provide <span className="text-primary">The Best</span> Construction
          Services
        </h1>
      </div>
      <div className="row g-5">
        {services.map((service, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
              <img
                className="img-fluid"
                src={service.img}
                alt={service.title}
              />
              <div className="service-icon bg-white">
                <i className={`fa fa-3x ${service.icon} text-primary`} />
              </div>
              <div className="px-4 pb-4">
                <h4 className="text-uppercase mb-3">{service.title}</h4>
                <p>{service.description}</p>
                <a className="btn text-primary" href={service.link}>
                  Read More <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
