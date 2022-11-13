import React from "react";
import "../pages/style.css";
const ProductItem = ({ info}) => {

  if (info.description === "new description") {
    info.description =
      "The Nagasaki Lander is the trademarked name of several series";
  }
  if (info.title === "New title") {
    info.title = "Awesome Rubber Salad";
  }

  return (
    <div className="card mb-3">
      <img src={info.images[2]} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{info.title}</h5>
        <p className="card-text product-description">{info.description}</p>
        <div className="d-flex">
          <a href="#" className="btn btn-primary me-2">
            Add to cart
          </a>
          <button
            className="btn btn-outline-primary disabled fw-bold"
            style={{ display: "inline-block" }}
          >
            ₹{info.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
