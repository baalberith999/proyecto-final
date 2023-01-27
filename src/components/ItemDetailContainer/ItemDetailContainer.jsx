import { useState, useEffect } from "react";
import React from "react";
import { getSingleItems } from "../../services/mockAsyncServices";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  let { itemid } = useParams();

  useEffect(() => {
    getSingleItems(itemid).then((respuesta) => {
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
      </div>
    </>
  );
}

export default ItemDetailContainer;
