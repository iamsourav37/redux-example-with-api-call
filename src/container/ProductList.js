import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import ProductComponent from "../container/ProductComponent";

import { setProducts } from "../redux/action/productAction";

function ProductList() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error: ", err);
      });
    console.log("Response: ", response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    console.log("in product list useEffect invoked");
    fetchProducts();
  }, []);

  console.log("Products in product list: ", products);

  return (
    <div className="p-5 m-3">
      <ProductComponent />
    </div>
  );
}

export default ProductList;
