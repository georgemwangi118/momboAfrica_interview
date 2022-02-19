import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const {
      id,
      name,
      country,
      logo,
      slogan,
      head_quaters,
      website,
      established,
    } = product;
    return (
      <div className="container" key={id}>
        <Link to={`/${id}`}>
          <div className="card">
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
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default Product;
