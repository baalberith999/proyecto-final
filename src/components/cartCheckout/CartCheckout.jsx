import React from "react";
import { useContext } from "react";
import "./CartCheckout.css";
import { cartContext } from "../storage/cartContext";
import { Link } from "react-router-dom";

function CartCheckout() {
  const { cart, getTotalPriceInCart } = useContext(cartContext);
  return (
    <div className="checkout-form">
      <h1>Finalizar compra</h1>
      <div>
        {cart.map((item) => (
          <div className="cart-item-checkout">
            <h3>Androide {item.model}</h3>
            <img src={item.imgurl} alt="img" />
            <p>{item.count} Unidad/es</p>
          </div>
        ))}
      </div>
      <p>{getTotalPriceInCart()}</p>
      <div className="form">
        <form>
          <label htmlFor="name">Nombre y Apellido</label>
          <input type="text" name="name" id="name" required />
          <label htmlFor="email">Correo Electronico</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="email">Repetir Correo Electronico</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="phone">Telefono</label>
          <input type="tel" name="phone" id="phone" required />
          <Link to="/buy">
            <button className="btn-checkout">Comprar</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CartCheckout;
