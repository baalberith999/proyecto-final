const { createContext, useState } = require("react");

export const cartContext = createContext();

export function CartContextProvider(props) {
  let [cart, setCart] = useState([]);
  let total = 0;

  function addItem(item) {
    const isInCart = cart.some((itemInCart) => itemInCart.id === item.id);

    if (isInCart) {
      let newCart = [...cart];
      let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
    } else {
      setCart([...cart, item]);
    }
  }

  function removeItem(id) {
    let newCart = [...cart];
    let index = cart.findIndex((itemInCart) => itemInCart.id === id);
    newCart.splice(index, 1);
    setCart(newCart);
  }

  function clear() {
    setCart([]);
  }

  function getTotalItems() {
    return cart.length;
  }

  function getTotalPriceInCart() {
    total = 0;
    if (cart.length === 0) {
      return "No se encontraron productos en tu carrito";
    }
    cart.forEach((item) => {
      total += item.price * item.count;
    });
    return `El total de tu compra es $${total}`;
  }

  const value = {
    cart,
    addItem,
    getTotalItems,
    getTotalPriceInCart,
    clear,
    removeItem,
  };
  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
}
