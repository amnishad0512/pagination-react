import React from "react";
import "../pages/style.css";
const Loader = () => {
  return (
    <div className="loader-position">
      {" "}
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
