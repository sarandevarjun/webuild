import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox.min.js";

import portfolioImg1 from "./assets/img/portfolio-1.jpg";
import portfolioImg2 from "./assets/img/portfolio-2.jpg";
import portfolioImg3 from "./assets/img/portfolio-3.jpg";

import portfolioImg4 from "./assets/img/portfolio-4.jpg";
import portfolioImg5 from "./assets/img/portfolio-5.jpg";
import portfolioImg6 from "./assets/img/portfolio-6.jpg";

const Portfolio = () => {
  return (
    <div className="container-fluid bg-light py-6 px-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
        <h1 className="display-5 text-uppercase mb-4">
          Some Of Our <span className="text-primary">Popular</span> Dream
          Projects
        </h1>
      </div>
      <div className="row gx-5">
        <div className="col-12 text-center">
          <div className="d-inline-block bg-dark-radial text-center pt-4 px-5 mb-5">
            <ul className="list-inline mb-0" id="portfolio-filters">
              <li
                className="btn btn-outline-primary bg-white p-2 active mx-2 mb-4"
                data-filter="*"
              >
                <img
                  src={portfolioImg1}
                  style={{ width: 150, height: 100 }}
                  alt="Portfolio 1"
                />
                <div
                  className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center"
                  style={{ background: "rgba(4, 15, 40, .3)" }}
                >
                  <h6 className="text-white text-uppercase m-0">All</h6>
                </div>
              </li>
              <li
                className="btn btn-outline-primary bg-white p-2 mx-2 mb-4"
                data-filter=".first"
              >
                <img
                  src={portfolioImg2}
                  style={{ width: 150, height: 100 }}
                  alt="Portfolio 2"
                />
                <div
                  className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center"
                  style={{ background: "rgba(4, 15, 40, .3)" }}
                >
                  <h6 className="text-white text-uppercase m-0">
                    Construction
                  </h6>
                </div>
              </li>
              <li
                className="btn btn-outline-primary bg-white p-2 mx-2 mb-4"
                data-filter=".second"
              >
                <img
                  src={portfolioImg3}
                  style={{ width: 150, height: 100 }}
                  alt="Portfolio 3"
                />
                <div
                  className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center"
                  style={{ background: "rgba(4, 15, 40, .3)" }}
                >
                  <h6 className="text-white text-uppercase m-0">Renovation</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row g-5 portfolio-container">
        <PortfolioItem
          category="first"
          imgSrc={portfolioImg1}
          title="Kodaikanal"
          location="123 Street, Kodaikanal, Dindukal"
        />
        <PortfolioItem
          category="second"
          imgSrc={portfolioImg2}
          title="Trichy"
          location="323 Street, Thilllai Nagar, Trichy"
        />
        <PortfolioItem
          category="first"
          imgSrc={portfolioImg3}
          title="Karur"
          location="213 Street, Karur, Tamilnadu"
        />
        <PortfolioItem
          category="second"
          imgSrc={portfolioImg4}
          title="RR Resorts"
          location="321 Street, Pandicherry, India"
        />
        <PortfolioItem
          category="first"
          imgSrc={portfolioImg5}
          title="Kodaikanal"
          location="123 Street, Kodaikanal, Dindukal"
        />
        <PortfolioItem
          category="second"
          imgSrc={portfolioImg6}
          title="Trichy"
          location="323 Street, Thilllai Nagar, Trichy"
        />
      </div>
    </div>
  );
};

const PortfolioItem = ({ category, imgSrc, title, location }) => {
  return (
    <div className={`col-xl-4 col-lg-6 col-md-6 portfolio-item ${category}`}>
      <div className="position-relative portfolio-box">
        <img className="img-fluid w-100" src={imgSrc} alt={title} />
        <a className="portfolio-title shadow-sm" href="">
          <p className="h4 text-uppercase">{title}</p>
          <span className="text-body">
            <i className="fa fa-map-marker-alt text-primary me-2" />
            {location}
          </span>
        </a>
        <a className="portfolio-btn" href={imgSrc} data-lightbox="portfolio">
          <i className="bi bi-plus text-white" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
