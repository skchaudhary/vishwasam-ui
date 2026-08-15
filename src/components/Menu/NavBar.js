import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="topnav">
      <Link className="active" to="/">
        Home
      </Link>
      <Link to="/services">Services</Link>
      <Link to="/news">News</Link>
      <Link to="/contact-us">Contact</Link>
      <Link to="/about-us">About</Link>
      <Link to="/privacy-policy">Privacy</Link>
      <Link to="/terms">Terms</Link>
    </div>
  );
}

export default NavBar;
