import "./App.css";
import ReactPaginate from "react-paginate";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const handlePageChange = ({ selected }) => {
    setLoading(true);
    fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${selected}&limit=10`
    ).then((result) => {
      result.json().then((result) => {
        setLoading(false);
        setProducts(result);
      });
    });
  };
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home loading={loading} setLoading={setLoading} />}
        />
        <Route
          exact
          path="/products"
          element={
            <Products
              loading={loading}
              setLoading={setLoading}
              products={products}
              setProducts={setProducts}
            />
          }
        />
        <Route
          exact
          path="/categories/:name"
          element={
            <Categories
              loading={loading}
              setLoading={setLoading}
              products={products}
              setProducts={setProducts}
            />
          }
        />
        <Route exact path="/*" element={<Error />} />
      </Routes>

      {location.pathname === "/products" && (
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={5}
          breakLabel={"..."}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={"pagination pagination-container-position mt-5"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      )}
    </div>
  );
}

export default App;
