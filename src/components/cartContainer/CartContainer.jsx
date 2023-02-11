import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../storage/cartContext";
import "./CartContainer.css";

function CartContainer() {
  const { cart, removeItem, getTotalPriceInCart } = useContext(cartContext);

  return (
    <div className="cart-container">
      <h1>Carrito</h1>
      <div>
        {cart.map((item) => (
          <div className="cart-item">
            <h3>Androide {item.model}</h3>
            <img src={item.imgurl} alt="img" />
            <p>{item.count} Unidad/es</p>
            <p>${item.price} c/u</p>
            <button className="btn-delete" onClick={removeItem}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <h2>{getTotalPriceInCart()}</h2>
      {cart.length === 0 ? (
        <></>
      ) : (
        <Link to="/checkout">
          <button className="btn-checkout">Ir a pagar</button>
        </Link>
      )}
    </div>
  );
}

export default CartContainer;
