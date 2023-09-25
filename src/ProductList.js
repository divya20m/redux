import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "./cartActions";
import Arrangement from "./Arrangement";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://64fdf829596493f7af7ecfd2.mockapi.io/Products")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response Data:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Arrangement product={product} />
          </li>
        ))}
      </ul>
      <ul>
        {props.cart.map((product) => (
          <li key={product.id}>
            <Arrangement product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart.cart,
});

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
