import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Empty from "../components/Empty";
import Loader from "../components/Loader";
import ProductItem from "../components/ProductItem";
const Categories = ({ loading, setLoading, products, setProducts }) => {
  let { name } = useParams();
  const location = useLocation();
  let title = location.pathname.substring(1);
  title = title[0].toUpperCase() + title.substring(1);
  title = title.replace("/", " ");
  document.title = `Shopify : ${title}`;

  // setProducts([]);
  function filter(product) {
    console.log("loading...", name);
    let final = product.filter((product) => {
      return product.category.name === name;
    });
    final = final.filter((product, i) => {
      if (i < 10) {
        return product;
      }
    });
    setProducts(final);
  }
  useEffect(() => {
    setLoading(true);
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=65").then(
      (result) => {
        result.json().then((result) => {
          setLoading(false);
          filter(result);
        });
      }
    );
  }, [name]);
  return (
    <div className="product-container mt-5">
      {loading && <Loader />}
      {products ? (
        products.map((productItem, i) => {
          return <ProductItem info={productItem} />;
        })
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Categories;
