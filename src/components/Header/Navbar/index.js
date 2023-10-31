/* Imports */
import {  Link } from "react-router-dom";

/* Navbar component */
const Navbar = () => {
    return (
        <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    )
}

export default Navbar;
