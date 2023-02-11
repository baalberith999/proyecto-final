import React from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

function Item({ id, model, imgurl, details, price }) {
  const urlDetail = `/item/${id}`;

  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <h3>{model}</h3>
          <img src={imgurl} alt="imagen" />
          <p>{details}</p>
          <h2>${price}</h2>
          <Link to={urlDetail}>
            <button className="button-item-detail">Ver Detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
