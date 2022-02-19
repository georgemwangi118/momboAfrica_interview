import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { fetchProducts } from "../redux/action/productActions";

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("Products: ", products);

  return (
    <div>
      <Product />
    </div>
  );
};

export default ProductList;
