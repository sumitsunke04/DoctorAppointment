import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav class="middle">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/findDoctor">Find Doctor</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/Register">Register</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;