import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../logofinal.jpg"

const Navbar = () => {

    //const isLogin = localStorage.getItem('isLogin')

    const userLogout=(e)=>{
        axios.get('/user/logout').then((response)=>{
            console.log(response)
            //localStorage.removeItem('isLogin')
        })
    }

    return (
        <nav class="middle fixed-top" >

            <ul>
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/appointments">Appointments</Link></li> */}
                {/* <li><Link to="/findDoctor">Find Doctor</Link></li> */}
                <li><Link to="/login">UserLogin</Link></li>
                <li><Link to="/DoctorLogin">DoctorLogin</Link></li>
                <li><Link to="/findDoctor">Find Doctors</Link></li>
                <li><Link to="/Aboutus">About us</Link></li>
                <li onClick={userLogout}><Link to="/login">Logout</Link></li>
             {/* <img style={{position:"relative",border:"3px solid rgb(40 47 84)",borderRadius:"10px",width: "100px"}} src={logo}alt=""/> */}
            </ul>
        </nav>
    );
}

export default Navbar;