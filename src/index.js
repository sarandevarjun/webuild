import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "./assets/lib/lightbox/css/lightbox.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
