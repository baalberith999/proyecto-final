import { useState, useEffect } from "react";
import React from "react";
import getItems, { getItemsByType } from "../../services/mockAsyncServices";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  let { typeid } = useParams();

  useEffect(() => {
    if (typeid) {
      getItemsByType(typeid).then((respuesta) => {
        console.log(respuesta);
        setProducts(respuesta);
      });
    } else {
      getItems().then((respuesta) => {
        console.log(respuesta);
        setProducts(respuesta);
      });
    }
  }, [typeid]);
  return (
    <>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
