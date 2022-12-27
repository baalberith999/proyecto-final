import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import CartWidget from './components/cartwidget/CartWidget';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <CartWidget />
    <ItemListContainer greeting="Bienvenido a CyberLife, Vea nuestros productos mas recientes"/>
    </>
  );
}

export default App;
