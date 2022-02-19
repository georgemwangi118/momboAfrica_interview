import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/action/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { name, country, logo, slogan, head_quaters, website, established } =
    product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...loading</div>
      ) : (
        <div className="detail">
          <div className="image">
            <img src={logo} alt={name} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
            <div className="slogan">{slogan}</div>
            <div className="country">{country}</div>
            <div className="hdqtrs">{head_quaters}</div>
            <div className="website">{website}</div>
            <div className="established">{established}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
