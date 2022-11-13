import React, { useEffect } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";

import salePoster from "../images/sale-2.jpg";
import salePoster2 from "../images/sale-2.svg";
import salePoster3 from "../images/sale-3.svg";
import salePoster4 from "../images/sale.jpg";
import salePoster5 from "../images/sale.svg";
import salePoster6 from "../images/sale.webp";
const Home = () => {
  document.title = "Welcome to Shopify world";
  return (
    <div className="poster-container p-5">
      <img src={salePoster} alt="" />
      <img src={salePoster4} alt="" />
      <img src={salePoster6} alt="" />
      <img src={salePoster5} alt="" />
      <img src={salePoster3} alt="" />
      <img src={salePoster2} alt="" />
    </div>
  );
};

export default Home;
