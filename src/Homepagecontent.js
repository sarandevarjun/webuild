import React from "react";

const Home = () => {
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
                <span>123 Street, New York, USA</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center border-start border-end py-3">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-envelope-open fs-1 text-primary me-3" />
              <div className="text-start">
                <h6 className="text-uppercase fw-bold">Email Us</h6>
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center py-3">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
              <div className="text-start">
                <h6 className="text-uppercase fw-bold">Call Us</h6>
                <span>+012 345 6789</span>
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
      {/* Carousel Start */}
      <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <i className="fa fa-home fa-4x text-primary mb-4 d-none d-sm-block" />
                  <h1 className="display-2 text-uppercase text-white mb-md-4">
                    Build Your Dream House With Us
                  </h1>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
                    Get A Quote
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <i className="fa fa-tools fa-4x text-primary mb-4 d-none d-sm-block" />
                  <h1 className="display-2 text-uppercase text-white mb-md-4">
                    We Are Trusted For Your Project
                  </h1>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}
      {/* About Start */}
      <div className="container-fluid py-6 px-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <h1 className="display-5 text-uppercase mb-4">
              We are <span className="text-primary">the Leader</span> in
              Construction Industry
            </h1>
            <h4 className="text-uppercase mb-3 text-body">
              Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum
              tempor sit diam amet diam et eos labore
            </h4>
            <p>
              Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
              dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam
              diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor
            </p>
            <div className="row gx-5 py-2">
              <div className="col-sm-6 mb-2">
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3" />
                  Perfect Planning
                </p>
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3" />
                  Professional Workers
                </p>
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3" />
                  First Working Process
                </p>
              </div>
              <div className="col-sm-6 mb-2">
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3" />
                  Perfect Planning
                </p>
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3" />
                  Professional Workers
                </p>
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3" />
                  First Working Process
                </p>
              </div>
            </div>
            <p className="mb-4">
              Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
              dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam
              diam amet diam et eos labore
            </p>
            <img src="img/signature.jpg" alt="" />
          </div>
          <div className="col-lg-5 pb-5" style={{ minHeight: 400 }}>
            <div className="position-relative bg-dark-radial h-100 ms-5">
              <img
                className="position-absolute w-100 h-100 mt-5 ms-n5"
                src="img/about.jpg"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Appointment Start */}
      <div className="container-fluid py-6 px-5">
        <div className="row gx-5">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="mb-4">
              <h1 className="display-5 text-uppercase mb-4">
                Request A <span className="text-primary">Call Back</span>
              </h1>
            </div>
            <p className="mb-5">
              Nonumy ipsum amet tempor takimata vero ea elitr. Diam diam ut et
              eos duo duo sed. Lorem elitr sadipscing eos et ut et stet justo,
              sit dolore et voluptua labore. Ipsum erat et ea ipsum magna
              sadipscing lorem. Sit lorem sea sanctus eos. Sanctus sit tempor
              dolores ipsum stet justo sit erat ea, sed diam sanctus takimata
              sit. Et at voluptua amet erat justo amet ea ipsum eos, eirmod
              accusam sea sed ipsum kasd ut.
            </p>
            <a className="btn btn-primary py-3 px-5" href="">
              Get A Quote
            </a>
          </div>
          <div className="col-lg-8">
            <div className="bg-light text-center p-5">
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Name"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Email"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control border-0 datetimepicker-input"
                        placeholder="Call Back Date"
                        data-target="#date"
                        data-toggle="datetimepicker"
                        style={{ height: 55 }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="time" id="time" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control border-0 datetimepicker-input"
                        placeholder="Call Back Time"
                        data-target="#time"
                        data-toggle="datetimepicker"
                        style={{ height: 55 }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-0"
                      rows={5}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Submit Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment End */}
      {/* Portfolio Start */}
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
              <ul className="list-inline mb-0" id="portfolio-flters">
                <li
                  className="btn btn-outline-primary bg-white p-2 active mx-2 mb-4"
                  data-filter="*"
                >
                  <img
                    src="img/portfolio-1.jpg"
                    style={{ width: 150, height: 100 }}
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
                    src="img/portfolio-2.jpg"
                    style={{ width: 150, height: 100 }}
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
                    src="img/portfolio-3.jpg"
                    style={{ width: 150, height: 100 }}
                  />
                  <div
                    className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center"
                    style={{ background: "rgba(4, 15, 40, .3)" }}
                  >
                    <h6 className="text-white text-uppercase m-0">
                      Renovation
                    </h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-5 portfolio-container">
          <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item first">
            <div className="position-relative portfolio-box">
              <img
                className="img-fluid w-100"
                src="img/portfolio-1.jpg"
                alt=""
              />
              <a className="portfolio-title shadow-sm" href="">
                <p className="h4 text-uppercase">Project Name</p>
                <span className="text-body">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  123 Street, New York, USA
                </span>
              </a>
              <a
                className="portfolio-btn"
                href="img/portfolio-1.jpg"
                data-lightbox="portfolio"
              >
                <i className="bi bi-plus text-white" />
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item second">
            <div className="position-relative portfolio-box">
              <img
                className="img-fluid w-100"
                src="img/portfolio-2.jpg"
                alt=""
              />
              <a className="portfolio-title shadow-sm" href="">
                <p className="h4 text-uppercase">Project Name</p>
                <span className="text-body">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  123 Street, New York, USA
                </span>
              </a>
              <a
                className="portfolio-btn"
                href="img/portfolio-2.jpg"
                data-lightbox="portfolio"
              >
                <i className="bi bi-plus text-white" />
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item first">
            <div className="position-relative portfolio-box">
              <img
                className="img-fluid w-100"
                src="img/portfolio-3.jpg"
                alt=""
              />
              <a className="portfolio-title shadow-sm" href="">
                <p className="h4 text-uppercase">Project Name</p>
                <span className="text-body">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  123 Street, New York, USA
                </span>
              </a>
              <a
                className="portfolio-btn"
                href="img/portfolio-3.jpg"
                data-lightbox="portfolio"
              >
                <i className="bi bi-plus text-white" />
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item second">
            <div className="position-relative portfolio-box">
              <img
                className="img-fluid w-100"
                src="img/portfolio-4.jpg"
                alt=""
              />
              <a className="portfolio-title shadow-sm" href="">
                <p className="h4 text-uppercase">Project Name</p>
                <span className="text-body">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  123 Street, New York, USA
                </span>
              </a>
              <a
                className="portfolio-btn"
                href="img/portfolio-4.jpg"
                data-lightbox="portfolio"
              >
                <i className="bi bi-plus text-white" />
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item first">
            <div className="position-relative portfolio-box">
              <img
                className="img-fluid w-100"
                src="img/portfolio-5.jpg"
                alt=""
              />
              <a className="portfolio-title shadow-sm" href="">
                <p className="h4 text-uppercase">Project Name</p>
                <span className="text-body">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  123 Street, New York, USA
                </span>
              </a>
              <a
                className="portfolio-btn"
                href="img/portfolio-5.jpg"
                data-lightbox="portfolio"
              >
                <i className="bi bi-plus text-white" />
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item second">
            <div className="position-relative portfolio-box">
              <img
                className="img-fluid w-100"
                src="img/portfolio-6.jpg"
                alt=""
              />
              <a className="portfolio-title shadow-sm" href="">
                <p className="h4 text-uppercase">Project Name</p>
                <span className="text-body">
                  <i className="fa fa-map-marker-alt text-primary me-2" />
                  123 Street, New York, USA
                </span>
              </a>
              <a
                className="portfolio-btn"
                href="img/portfolio-6.jpg"
                data-lightbox="portfolio"
              >
                <i className="bi bi-plus text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio End */}
      {/* Team Start */}
      <div className="container-fluid py-6 px-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
          <h1 className="display-5 text-uppercase mb-4">
            We Are{" "}
            <span className="text-primary">Professional &amp; Expert</span>{" "}
            Workers
          </h1>
        </div>
        <div className="row g-5">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="row g-0">
              <div className="col-10" style={{ minHeight: 300 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/team-1.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                  <a className="btn" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
              <div className="col-12">
                <div className="bg-light p-4">
                  <h4 className="text-uppercase">Adam Phillips</h4>
                  <span>CEO &amp; Founder</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="row g-0">
              <div className="col-10" style={{ minHeight: 300 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/team-2.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                  <a className="btn" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
              <div className="col-12">
                <div className="bg-light p-4">
                  <h4 className="text-uppercase">Dylan Adams</h4>
                  <span>Civil Engineer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="row g-0">
              <div className="col-10" style={{ minHeight: 300 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/team-3.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                  <a className="btn" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
              <div className="col-12">
                <div className="bg-light p-4">
                  <h4 className="text-uppercase">Jhon Doe</h4>
                  <span>Interior Designer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="row g-0">
              <div className="col-10" style={{ minHeight: 300 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/team-4.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                  <a className="btn" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
              <div className="col-12">
                <div className="bg-light p-4">
                  <h4 className="text-uppercase">Josh Dunn</h4>
                  <span>Painter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      {/* Testimonial Start */}
      <div className="container-fluid bg-light py-6 px-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
          <h1 className="display-5 text-uppercase mb-4">
            What Our <span className="text-primary">Happy Cleints</span> Say!!!
          </h1>
        </div>
        <div className="row gx-0 align-items-center">
          <div className="col-xl-4 col-lg-5 d-none d-lg-block">
            <img className="img-fluid w-100 h-100" src="img/testimonial.jpg" />
          </div>
          <div className="col-xl-8 col-lg-7 col-md-12">
            <div className="testimonial bg-light">
              <div className="owl-carousel testimonial-carousel">
                <div className="row gx-4 align-items-center">
                  <div className="col-xl-4 col-lg-5 col-md-5">
                    <img
                      className="img-fluid w-100 h-100 bg-light p-lg-3 mb-4 mb-md-0"
                      src="img/testimonial-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-xl-8 col-lg-7 col-md-7">
                    <h4 className="text-uppercase mb-0">Client Name</h4>
                    <p>Profession</p>
                    <p className="fs-5 mb-0">
                      <i className="fa fa-2x fa-quote-left text-primary me-2" />{" "}
                      Dolores sed duo clita tempor justo dolor et stet lorem
                      kasd labore dolore lorem ipsum. At lorem lorem magna ut
                      labore et tempor diam tempor erat. Erat dolor rebum sit
                      ipsum.
                    </p>
                  </div>
                </div>
                <div className="row gx-4 align-items-center">
                  <div className="col-xl-4 col-lg-5 col-md-5">
                    <img
                      className="img-fluid w-100 h-100 bg-light p-lg-3 mb-4 mb-md-0"
                      src="img/testimonial-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-xl-8 col-lg-7 col-md-7">
                    <h4 className="text-uppercase mb-0">Client Name</h4>
                    <p>Profession</p>
                    <p className="fs-5 mb-0">
                      <i className="fa fa-2x fa-quote-left text-primary me-2" />{" "}
                      Dolores sed duo clita tempor justo dolor et stet lorem
                      kasd labore dolore lorem ipsum. At lorem lorem magna ut
                      labore et tempor diam tempor erat. Erat dolor rebum sit
                      ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Blog Start */}
      <div className="container-fluid py-6 px-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
          <h1 className="display-5 text-uppercase mb-4">
            Latest <span className="text-primary">Articles</span> From Our Blog
            Post
          </h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="bg-light">
              <img className="img-fluid" src="img/blog-1.jpg" alt="" />
              <div className="p-4">
                <div className="d-flex justify-content-between mb-4">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle me-2"
                      src="img/user.jpg"
                      width={35}
                      height={35}
                      alt=""
                    />
                    <span>John Doe</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="ms-3">
                      <i className="far fa-calendar-alt text-primary me-2" />
                      01 Jan, 2045
                    </span>
                  </div>
                </div>
                <h4 className="text-uppercase mb-3">
                  Rebum diam clita lorem erat magna est erat
                </h4>
                <a className="text-uppercase fw-bold" href="">
                  Read More <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="bg-light">
              <img className="img-fluid" src="img/blog-2.jpg" alt="" />
              <div className="p-4">
                <div className="d-flex justify-content-between mb-4">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle me-2"
                      src="img/user.jpg"
                      width={35}
                      height={35}
                      alt=""
                    />
                    <span>John Doe</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="ms-3">
                      <i className="far fa-calendar-alt text-primary me-2" />
                      01 Jan, 2045
                    </span>
                  </div>
                </div>
                <h4 className="text-uppercase mb-3">
                  Rebum diam clita lorem erat magna est erat
                </h4>
                <a className="text-uppercase fw-bold" href="">
                  Read More <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="bg-light">
              <img className="img-fluid" src="img/blog-3.jpg" alt="" />
              <div className="p-4">
                <div className="d-flex justify-content-between mb-4">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle me-2"
                      src="img/user.jpg"
                      width={35}
                      height={35}
                      alt=""
                    />
                    <span>John Doe</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="ms-3">
                      <i className="far fa-calendar-alt text-primary me-2" />
                      01 Jan, 2045
                    </span>
                  </div>
                </div>
                <h4 className="text-uppercase mb-3">
                  Rebum diam clita lorem erat magna est erat
                </h4>
                <a className="text-uppercase fw-bold" href="">
                  Read More <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
      {/* Footer Start */}
      <div className="footer container-fluid position-relative bg-dark bg-light-radial text-white-50 py-6 px-5">
        <div className="row g-5">
          <div className="col-lg-6 pe-lg-5">
            <a href="index.html" className="navbar-brand">
              <h1 className="m-0 display-4 text-uppercase text-white">
                <i className="bi bi-building text-primary me-2" />
                WEBUILD
              </h1>
            </a>
            <p>
              Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem
              nonumy. Tempor sea ipsum diam sed clita dolore eos dolores magna
              erat dolore sed stet justo et dolor.
            </p>
            <p>
              <i className="fa fa-map-marker-alt me-2" />
              123 Street, New York, USA
            </p>
            <p>
              <i className="fa fa-phone-alt me-2" />
              +012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope me-2" />
              info@example.com
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a
                className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2"
                href="#"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2"
                href="#"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2"
                href="#"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-lg btn-primary btn-lg-square rounded-0"
                href="#"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <div className="row g-5">
              <div className="col-sm-6">
                <h4 className="text-white text-uppercase mb-4">Quick Links</h4>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white-50 mb-2" href="#">
                    <i className="fa fa-angle-right me-2" />
                    Home
                  </a>
                  <a className="text-white-50 mb-2" href="#">
                    <i className="fa fa-angle-right me-2" />
                    About Us
                  </a>
                  <a className="text-white-50 mb-2" href="#">
                    <i className="fa fa-angle-right me-2" />
                    Our Services
                  </a>
                  <a className="text-white-50 mb-2" href="#">
                    <i className="fa fa-angle-right me-2" />
                    Meet The Team
                  </a>
                  <a className="text-white-50" href="#">
                    <i className="fa fa-angle-right me-2" />
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <h4 className="text-white text-uppercase mb-4">
                  Popular Links
                </h4>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white-50 mb-2" href="#">
                    <i className="fa fa-angle-right me-2" />
                    Home
                  </a>
                  <a className="text-white-50 mb-2" href="#">
                    <i className="fa fa-angle-right me-2" />
                    About Us
                  </a>
                  <a className="text-white-50 mb-2" href="#">
                    <i className="fa fa-angle-right me-2" />
                    Our Services
                  </a>
                  <a className="text-white-50 mb-2" href="#">
                    <i className="fa fa-angle-right me-2" />
                    Meet The Team
                  </a>
                  <a className="text-white-50" href="#">
                    <i className="fa fa-angle-right me-2" />
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-sm-12">
                <h4 className="text-white text-uppercase mb-4">Newsletter</h4>
                <div className="w-100">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-light"
                      style={{ padding: "20px 30px" }}
                      placeholder="Your Email Address"
                    />
                    <button className="btn btn-primary px-4">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark bg-light-radial text-white border-top border-primary px-0">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="py-4 px-5 text-center text-md-start">
            <p className="mb-0">
              ©{" "}
              <a className="text-primary" href="#">
                Your Site Name
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="py-4 px-5 bg-primary footer-shape position-relative text-center text-md-end">
            <p className="mb-0">
              Designed by{" "}
              <a className="text-dark" href="#">
                Galaxy Digital Promotions
              </a>
            </p>
            <p className="mb-0">
              Distributed by{" "}
              <a className="text-dark" href="#">
                Galaxy Digital Promotions
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </>
  );
};

export default Home;
