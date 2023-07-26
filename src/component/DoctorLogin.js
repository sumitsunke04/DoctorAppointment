import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DoctorLogin = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate=useNavigate()

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    const LoginDoct = (e)=>{
        e.preventDefault();
        const loginObj = {
            "email":email,
            "password":password
        }

        axios.post('/admin/login/', loginObj).then((response)=>{
            if(response.status == 200){
                navigate("/appointments");
            }
        })
        console.log(loginObj);

    }
    return ( 
        <div class="bodyy">
        <div class="container ">
            <h2>DOCTOR LOGIN</h2>
            <div class="form-container">
                <form >

                    <div class="input-name">
                        <i class="fa fa-envelope email"></i>
                        <input type="email" placeholder="Email" class="text-name" onChange={handleEmailChange}/>
                    </div>

                    <div class="input-name">
                        <i class="fa fa-lock lock"></i>
                        <input type="password" placeholder="Password" class="text-name" onChange={handlePasswordChange}/>
                    </div>

                    <div class="input-name">
                        <input type="submit" class="button" value="Login" onClick={LoginDoct}/>
                    </div>

                    <div className="dont-have-account-doc">
                        <a href="/DoctorRegster" class ="dont-have-accnt-anchor-doc">Don't Have an Account ?</a>
                    </div>

                </form>
            </div>
        </div>
        </div>
    );
}
 
export default DoctorLogin;