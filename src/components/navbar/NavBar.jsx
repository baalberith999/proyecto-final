import CartWidget from "../cartwidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="topnav" id="myTopnav">
      <Link to="/" className="active">
        CyberLife
      </Link>
      <Link to="/type/servicial">ROBOTS SERVICIALES</Link>
      <Link to="/type/domestico">ROBOTS DOMESTICOS</Link>
      <CartWidget />.
    </div>
  );
}

export default NavBar;
