import React from "react";

import { useSelector } from "react-redux";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  console.log("all products: ", products);
  return (
    <div className="row">
      {products.map((product) => (
        <div
          className="card m-3 shadow"
          style={{ width: "30%" }}
          key={product.id}
        >
          <img
            src={product.image}
            className="card-img-top"
            alt="product"
            style={{
              height: "300px",
              width: "400px",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <h6 className="">Category: {product.category}</h6>
            <p className="card-text">{product.description}</p>
            <h3>Price: ${product.price}</h3>
            <a href="#." className="btn btn-primary">
              Buy Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductComponent;
