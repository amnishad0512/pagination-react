import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import ProductItem from "../components/ProductItem";
import "./style.css";
const Products = ({ loading, setLoading, products, setProducts }) => {
  const location = useLocation();
  let title =location.pathname.substring(1);
  title = title[0].toUpperCase()+title.substring(1);
  document.title = `Shopify : All ${title}`

  useEffect(() => {
    setLoading(true);
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10").then(
      (result) => {
        result.json().then((result) => {
          setLoading(false);
          setProducts(result);
        });
      }
    );
  }, []);

  return (
    <div className="product-container mt-5">
      {loading && <Loader />}
      {products &&
        products.map((productItem, i) => {
          return <ProductItem info={productItem} />;
        })}
    </div>
  );
};

export default Products;
