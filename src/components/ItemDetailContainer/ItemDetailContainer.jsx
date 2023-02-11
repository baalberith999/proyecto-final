import { useState, useEffect, useContext } from "react";
import React from "react";
import { getSingleItem } from "../../services/firebase";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { cartContext } from "../storage/cartContext";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [isInCart, setIsInCart] = useState(false);

  let { itemid } = useParams();

  const { addItem, clear } = useContext(cartContext);

  function handleAddToCart(count) {
    if (isInCart) {
      alert(`El producto ya se encuentra en el carrito`);
      product.count = count;
      addItem(product);
      return;
    } else setIsInCart(true);
    alert(`Agregaste ${count} de ${product.model} al carrito`);
    product.count = count;
    addItem(product);
  }

  useEffect(() => {
    getSingleItem(itemid).then((respuesta) => {
      console.log(respuesta);
      setProduct(respuesta);
    });
  }, []);
  return (
    <>
      <div className="cardd">
        <h3>{product.model}</h3>
        <img src={product.imgurl} alt="imagen" />
        <p>{product.details}</p>
        <h2>${product.price}</h2>
        <ItemCount onAddToCart={handleAddToCart} />
        <Link to="/cart">
          <button className="btn-text">Ir al carrito</button>
        </Link>
        <button className="btn-text" onClick={clear}>
          Vaciar Carrito
        </button>
      </div>
    </>
  );
}

export default ItemDetailContainer;
