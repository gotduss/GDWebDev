/* Imports */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../Main/Pages/Home";
import Projects from "../Main/Pages/Projects";
import Contact from "../Main/Pages/Contact";

/* Header component */
const Header = () => {
    return (
        <header>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact Component={Home} />
                    <Route path="/projects" Component={Projects} />
                    <Route path="/contact" Component={Contact} />
                </Routes>
            </Router>
        </header>
    )
}

export default Header;
