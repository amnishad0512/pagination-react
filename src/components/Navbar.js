import React from "react";
import { Link } from "react-router-dom";
import "../pages/style.css";
import logo from "../images/logo.png";
import "../pages/style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand fw-semibold" to="/">
          <img src={logo} alt="logo" className="logo" />
          Shopify
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-dark"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/categories/Clothes">
                    Clothes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categories/Electronics">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categories/Furniture">
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categories/Shoes">
                    Shoes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categories/Others">
                    Others
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex align-items-center me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary me-2" type="submit">
              Search
            </button>
            <button className="cart-container btn btn-outline-primary position-relative">
              <i class="fa-solid fa-cart-plus fa-lg">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                  0
                </span>
              </i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
