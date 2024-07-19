import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "react-datepicker/dist/react-datepicker.css"; // React DatePicker CSS
import DatePicker from "react-datepicker";

const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, date, time, message });
  };

  return (
    <div className="container-fluid py-6 px-5">
      <div className="row gx-5">
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="mb-4">
            <h1 className="display-5 text-uppercase mb-4">
              Request A <span className="text-primary">Call Back</span>
            </h1>
          </div>
          <p className="mb-5">
            Nonumy ipsum amet tempor takimata vero ea elitr. Diam diam ut et eos
            duo duo sed. Lorem elitr sadipscing eos et ut et stet justo, sit
            dolore et voluptua labore. Ipsum erat et ea ipsum magna sadipscing
            lorem. Sit lorem sea sanctus eos. Sanctus sit tempor dolores ipsum
            stet justo sit erat ea, sed diam sanctus takimata sit. Et at
            voluptua amet erat justo amet ea ipsum eos, eirmod accusam sea sed
            ipsum kasd ut.
          </p>
          <a className="btn btn-primary py-3 px-5" href="">
            Get A Quote
          </a>
        </div>
        <div className="col-lg-8">
          <div className="bg-light text-center p-5">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Your Name"
                    style={{ height: 55 }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="Your Email"
                    style={{ height: 55 }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <DatePicker
                    className="form-control border-0"
                    placeholderText="Call Back Date"
                    selected={date}
                    onChange={(newDate) => setDate(newDate)}
                    dateFormat="MMMM d, yyyy"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <DatePicker
                    className="form-control border-0"
                    placeholderText="Call Back Time"
                    selected={time}
                    onChange={(newTime) => setTime(newTime)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control border-0"
                    rows={5}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Submit Request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
