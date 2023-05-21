
import './Register.css';
import axios from 'axios';
import { useState } from "react";

const Register = () => {

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleMobileChange = (e) => {
        setMobile(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }


    const obj = {
        "name": name,
        "phone": mobile,
        "email": email,
        "password": password
    }

    const submitForm = (e) => {
        e.preventDefault();
        axios.post("/user/register", obj)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })
        console.log(obj);
    }

    return (
        <div class="bodyy">
            <div class="pat-reg-back">
                <div class="pat-reg-container">
                    <h2>Registration Form</h2>
                    <div class="pat-reg-form-container">
                        <form>
                            <div class="pat-reg-input-name">
                                <i class="fa fa-user pat-reg-lock"></i>
                                <input type="text" placeholder="First Name" class="pat-reg-name" onChange={handleNameChange} />
                            </div>

                            <div class="pat-reg-input-name">
                                <i class="fa fa-mobile pat-reg-lock"></i>
                                <input type="number" placeholder="Enter Mobile Number" class="pat-reg-text-name" onChange={handleMobileChange} />
                            </div>

                            <div class="pat-reg-input-name">
                                <i class="fa fa-envelope pat-reg-email"></i>
                                <input type="email" placeholder="Email" class="pat-reg-text-name" onChange={handleEmailChange} />
                            </div>

                            <div class="pat-reg-input-name">
                                <i class="fa fa-lock pat-reg-lock"></i>
                                <input type="password" placeholder="Password" class="pat-reg-text-name" onChange={handlePasswordChange} />
                            </div>

                            <div class="pat-reg-input-name">
                                <input type="submit" class="pat-reg-button" value="Register" onClick={submitForm} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;