import React from "react";
import "./CheckoutBuy.css";
import { cartContext } from "../storage/cartContext";
import { useContext } from "react";

function CheckoutBuy() {
  const { cart } = useContext(cartContext);
  return (
    <div>
      <div className="buy-thanks">
        <h1>Gracias por tu compra</h1>
        <p>En breve recibirás un mail con los detalles de tu compra.</p>
        {cart.map((item) => (
          <div className="buy-items">
            <img src={item.imgurl} alt="img" />

            <p>
              El ID unico de tu androide {item.model} y de tu compra es:{" "}
              {item.id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckoutBuy;
