import React, { useEffect, useState } from "react";
import "./App.css";
import { Row, Col, Pagination } from "react-bootstrap";

import ProductCard from "./component/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [paginationCount, setPaginationCount] = useState(0);

  useEffect(() => {
    console.log("update called", paginationCount);
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setAllProducts(json);
        setProducts(json.slice(0, 3));
        setPaginationCount(Math.round(json.length / 3));
      });
    console.log("while mount");
  }, []);

  useEffect(() => {
    console.log("onProductsChange");
  }, [products]);

  const setPageSelectProducts = (index) => {
    setActivePage(index);
    let startIndex = (index - 1) * 3;
    setProducts(allProducts.slice(startIndex, startIndex + 3));
  };

  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {products.map((product, index) => {
          return (
            <Col key={index}>
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
      <Pagination className="pagination-items">
        {[...Array(paginationCount).keys()].map((item, index) => {
          return (
            <Pagination.Item
              key={item}
              active={item + 1 === activePage}
              onClick={() => setPageSelectProducts(item + 1)}
            >
              {item + 1}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
}

export default App;
