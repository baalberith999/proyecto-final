import React from "react";
import Item from "../item/Item";

function ItemList(props) {
  return (
    <div>
      {props.products.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          model={item.model}
          details={item.details}
          price={item.price}
          imgurl={item.imgurl}
        />
      ))}
    </div>
  );
}

export default ItemList;
