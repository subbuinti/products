import React, { Fragment, useState } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import "./ProductCard.css";
import ReactStars from "react-rating-stars-component";

function ProductCard(props) {
  const { product } = props;
  const [readMore, setReadMore] = useState(true);

  return (
    <Fragment>
      <Container>
        <div key={product.id} className="product-card">
          <div className="product-tumb">
            <img src={product.image} alt="" />
          </div>
          <div className="product-details">
            <a>{product.title}</a>
            <p>
              {readMore
                ? product.description.substring(0, 100)
                : product.description}
              {readMore ? (
                <span
                  onClick={(e) => {
                    setReadMore(false);
                  }}
                  className="font-change"
                >
                  ...Read More
                </span>
              ) : (
                <span
                  onClick={(e) => {
                    setReadMore(true);
                  }}
                  className="font-change"
                >
                  Read Less
                </span>
              )}
            </p>

            <div className="product-price">
              ₹ {product.price}
              <div className="gap">
                <ReactStars
                  value={product.rating.rate}
                  count={5}
                  edit={false}
                  size={20}
                  activeColor="#ffd700"
                />

                <p style={{ padding: "5px" }}>{product.rating.count}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default ProductCard;
