import './styles.css'; 
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';


const Navbar =() => {
return (
<nav className="navbar navbar-expand-md navbar-dark branch -M main bg-primary main-nav">
<div className ="container-fluid">
<Link to="/" className="nav-logo-text">
<h4>ACOPTOUR</h4>
</Link>
<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#dscatalog-navbar"
aria-controls="dscatalog-navbar"
aria-expanded="false"
aria-label="Toggle navigation"
>
<span className="navbar-toggler-icon"></span>
</button>
<div className ="collapse navbar-collapse" id="dscatalog-navbar">
<ul className ="navbar-nav offset-md-2 main-menu">
<li>
<NavLink to="/">Home</NavLink>
</li>
<li>
<NavLink to="products">Turismo</NavLink>
</li>
<li>
<NavLink to="products2">Restaurantes</NavLink>
</li>
</ul>
</div>
</div>
</nav>
);
}
export default Navbar;