import { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ onAddToCart }) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSubstract() {
    setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <small>Agrega la cantidad deseada al carrito</small>
      <div className="itemcount_control">
        {count <= 1 ? (
          <button className="btn" disabled onClick={handleSubstract}>
            -
          </button>
        ) : (
          <button className="btn" onClick={handleSubstract}>
            -
          </button>
        )}
        <span className="itemcount_count">{count}</span>

        {count >= 5 ? (
          <button className="btn" disabled onClick={handleSubstract}>
            +
          </button>
        ) : (
          <button className="btn" onClick={handleAdd}>
            +
          </button>
        )}
      </div>

      <div className="itemcount_btns">
        <button className="btn-text" onClick={() => onAddToCart(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
