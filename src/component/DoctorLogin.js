import { useState } from "react"

const DoctorLogin = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

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
                </form>
            </div>
        </div>
        </div>
    );
}
 
export default DoctorLogin;