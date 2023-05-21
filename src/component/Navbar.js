import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
    const userLogout=(e)=>{
        axios.get('/user/logout').then((response)=>(console.log(response)))
    
    }
    return (
        <nav class="middle">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                {/* <li><Link to="/contact">Contact Us</Link></li> */}
                <li><Link to="/findDoctor">Find Doctor</Link></li>
                <li><Link to="/login">UserLogin</Link></li>
                <li><Link to="/DoctorLogin">DoctorLogin</Link></li>
                <li onClick={userLogout}><Link to="/login">Logout</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;