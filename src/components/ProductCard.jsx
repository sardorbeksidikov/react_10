import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      className="card"
      style={{ width: "18rem", height: "25rem" }}>
      <div className="cart-box"></div>
      <div className="card-body">
        <img src={product.url} />
        <p>{product.title}</p>
        <p>{product.description}</p>
        <Link to={`/products/${product.id}`} className="btn btn-dark btn-sm">
          See details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
