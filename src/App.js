import "./App.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./components/storage/cartContext";
import CartContainer from "./components/cartContainer/CartContainer";
import CartCheckout from "./components/cartCheckout/CartCheckout";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/type/:typeid" element={<ItemListContainer />} />
          <Route path="/item/:itemid" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<CartCheckout />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
