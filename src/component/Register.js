
import './Register.css';
import { useState } from "react";

const Register = () => {

    const [name, setName] = useState("");
    // const [surname, setSurname] = useState("");
    // const [age, setAge] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [confirm, setConfirm] = useState("");
    // const [city,setCity] = useState("Pune");
    // const [gender,setGender] = useState(null);
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    
    const handleMobileChange = (e) =>{
        setMobile(e.target.value)
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }
    // const handleSurnameChange = (e) =>{
    //     setSurname(e.target.value)
    // }
    // const handleAgeChange = (e) =>{
    //     setAge(e.target.value)
    // }
    // const handleConfirmChange = (e) =>{
    //     setConfirm(e.target.value)
    // }

    // const handleCityChange = (e)=>{
    //     setCity( e.target.value);
    // }

    // const handleGenderSelection=(e)=>{
    //     setGender(e.target.value)
    // }


    const obj = {
        "name" : name , 
        "mobile": mobile,
        "email":email , 
        "password":password
        // "surname" : surname,
        // "age": age,
        // "city" : city,
        // "gender" : gender,
        // "confpassword" : confirm
    }
    
    const submitForm =(e)=>{
        e.preventDefault();
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
                            {/* <span>
                                <i class="fa fa-user pat-reg-lock"></i>
                                <input type="text" placeholder="Last Name" class="pat-reg-name" onChange={handleSurnameChange}/>
                            </span> */}
                        </div>

                        {/* <div class="pat-reg-input-name">
                            <i class="fa fa-user pat-reg-lock"></i>
                            <input type="number" placeholder="Enter Age" class="pat-reg-age" onChange={handleAgeChange}/>
                        </div> */}

                        {/* <div class="pat-reg-input-name">

                            <input type="radio" class="pat-reg-radio-button" name="gen" value = "male" onChange={handleGenderSelection}/>
                            <label class="pat-reg-label">Male</label>

                            <input type="radio" class="pat-reg-radio-button" name="gen" value = "female" onChange={handleGenderSelection}/>
                            <label class="pat-reg-label">Female</label>

                            <input type="radio" class="pat-reg-radio-button" name="gen"value = "other" onChange={handleGenderSelection} />
                            <label>Other</label>
                        </div> */}

                        <div class="pat-reg-input-name">
                            <i class="fa fa-mobile pat-reg-lock"></i>
                            <input type="number" placeholder="Enter Mobile Number" class="pat-reg-text-name"onChange={handleMobileChange} />
                        </div>

                        <div class="pat-reg-input-name">
                            <i class="fa fa-envelope pat-reg-email"></i>
                            <input type="email" placeholder="Email" class="pat-reg-text-name" onChange={handleEmailChange}/>
                        </div>

                        <div class="pat-reg-input-name">
                            <i class="fa fa-lock pat-reg-lock"></i>
                            <input type="password" placeholder="Password" class="pat-reg-text-name" onChange={handlePasswordChange}/>
                        </div>

                        {/* <div class="pat-reg-input-name">
                            <i class="fa fa-lock pat-reg-lock"></i>
                            <input type="password" placeholder="Confirm Password" class="pat-reg-text-name" onChange={handleConfirmChange}/>
                        </div> */}

                        {/* <div class="pat-reg-input-name" onChange={handleCityChange}>
                            <select class="pat-reg-country">
                                <option>Select a city</option>
                                <option>Pune</option>
                                <option>Satara</option>
                                <option>Mumbai</option>
                                <option>Nashik</option>
                            </select>
                            <div class="pat-reg-arrow"></div>
                        </div> */}

                        {/* <div class="pat-reg-input-name">
                            <input type="checkbox" class="check-button" />
                            <label class="pat-reg-check">I accept the terms and conditions</label>
                        </div> */}
                        <div class="pat-reg-input-name">
                            <input type="submit" class="pat-reg-button" value="Register" onClick={submitForm}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Register;