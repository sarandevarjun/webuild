import React from "react";

const Header = () => {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid px-5 d-none d-lg-block">
        <div className="row gx-5">
          <div className="col-lg-4 text-center py-3">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-geo-alt fs-1 text-primary me-3" />
              <div className="text-start">
                <h6 className="text-uppercase fw-bold">Our Office</h6>
                <span>No, 123, Thillai Nagar, Trichy.</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center border-start border-end py-3">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-envelope-open fs-1 text-primary me-3" />
              <div className="text-start">
                <h6 className="text-uppercase fw-bold">Email Us</h6>
                <span>aruncivil@egmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center py-3">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
              <div className="text-start">
                <h6 className="text-uppercase fw-bold">Call Us</h6>
                <span>+91 7373178000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
        <nav className="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
          <a href="index.html" className="navbar-brand">
            <h1 className="m-0 display-4 text-uppercase text-white">
              <i className="bi bi-building text-primary me-2" />
              WEBUILD
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="service.html" className="nav-item nav-link">
                Service
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <a href="project.html" className="dropdown-item">
                    Our Project
                  </a>
                  <a href="team.html" className="dropdown-item">
                    The Team
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="blog.html" className="dropdown-item">
                    Blog Grid
                  </a>
                  <a href="detail.html" className="dropdown-item">
                    Blog Detail
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
              <a
                href=""
                className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block"
              >
                Get A Quote <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </>
  );
};

export default Header;
