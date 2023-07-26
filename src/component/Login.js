// import './Login.css';
import { useState} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navigate=useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    const url = "http://127.0.0.1:8080/user/login"
    const LoginUser = (e)=>{
        e.preventDefault();
        const loginObj = {
            "email":email,
            "password":password
        }
        console.log(loginObj);

        axios.post('/user/login/', loginObj).then((response)=>{
            if(response.status == 200){
                navigate("/findDoctor");
            }
            localStorage.setItem('isLogin', true);
        })

        
    }
    return ( 
        <div class="bodyy">
        <div class="container ">
            <h2>LOGIN</h2>
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
                        <input type="submit" class="button" value="Login" onClick={LoginUser}/>
                    </div>

                    <div className="dont-have-account">
                        <a href="/Register" class ="dont-have-accnt-anchor">Don't Have an Account ?</a>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Login;