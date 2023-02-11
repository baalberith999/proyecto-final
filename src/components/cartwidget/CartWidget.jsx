import "./CartWidget.css";
import { cartContext } from "../storage/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getTotalItems } = useContext(cartContext);
  return (
    <Link to="/cart">
      <span>🛒 {getTotalItems()}</span>
    </Link>
  );
}

export default CartWidget;
