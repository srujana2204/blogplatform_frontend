import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
//client\src\assets\logo.png


/*function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/write">Write</Link>
      {/*<Link to="/login">Login</Link>
      <Link to="/register">Register</Link>}
    </nav>
  );
}

export default Navbar;*/

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="InkSpire Logo" style={{ height: "70px", marginRight: "10px" }}/>
        {/*<span className="navbar-title">InkSpire</span>*/}
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/explore">Explore</a></li>
        <li><a href="/write">Write</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
