import React, { useState } from "react";
import './Register.scss';
import logo from '../../assets/login_logo.png';
import { RegisterService } from "../../services/RegisterService";
import { RegistrationError } from "../../enums/RegistrationError";
import { ValidationErrors, validateDate, validateEmail, validateFullname, validateGender, validateInputs, validatePassword, validateRepeatedPassword, validateUsername } from "./Register.policy";
import { RegisterInfo } from "../../models/RegisterInfo";

const initialErrors: ValidationErrors = {
    username: "",
    email: "",
    password: "",
    repeatedPassword: "",
    fullname: "",
    gender: "",
    date: ""
};

export default function Register() {

    const registerService = new RegisterService();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [fullName, setName] = useState("");
    const [date, setDate] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [validationErrors, setValidationErrors] = useState(initialErrors);

    const registerAccount = async () => {

        const registerInfo = new RegisterInfo(username, password, repeatedPassword, email, fullName, date, gender);

        const errors = validateInputs(registerInfo);

        if(Object.values(errors).filter(e => e.length > 0).length > 0) {
            setValidationErrors(errors);
            return;
        }
        
        const response = await registerService.register(username, password, repeatedPassword, email, fullName, date, gender);

        if(response.ok) {
            window.location.replace('http://localhost:3000/login');
        } else {
            errorTypeValidation(response.errorType ?? RegistrationError.InvalidModel);
        }
    }

    const errorTypeValidation = (responseType: RegistrationError) => {
        switch(responseType) {
            case RegistrationError.None:
                setError("");
                break;
            case RegistrationError.InvalidModel:
                setError("Invalid Credentials");
                break;
            case RegistrationError.UserExists:
                setError("Username already exists");
                break;
            default:
                break;
        }
    }


    return (
        <div className="register-form-main-content">
            <div className="register-main-content-second">
                <img src={logo} className="register-form-logo"></img>
                    <div className="register-form">
                        <div className="register-form-left">
                            <label className="register-name-label">Корисничко Име*</label><br></br>
                            <input type="text" className="register-name-input" onChange={(e) => setUsername(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, username: validateUsername(username)})}></input>
                            { validationErrors.username && <label className="invalid-username">{validationErrors.username}</label> }
                            <br></br>
                            <label className="register-surname-label">Име и Презиме*</label><br></br>
                            <input type="text" className="register-surname-input" onChange={(e) => setName(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, fullname: validateFullname(fullName)})}></input>
                            { validationErrors.fullname && <label className="invalid-username">{validationErrors.fullname}</label> }
                            <br></br>
                            <label className="register-date-label">Датум на раѓање*</label><br></br>
                            <input type="date" className="register-date-input" onChange={(e) => setDate(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, date: validateDate(date)})}></input>
                            { validationErrors.date && <label className="invalid-username">{validationErrors.date}</label> }
                            <br></br>
                            <label className="register-gender-label">Пол*</label><br></br>
                            <select className="register-gender-list" onChange={(e) => setGender(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, gender: validateGender(gender)})}>
                                <option value={""}>Choose</option>
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                            </select>
                            { validationErrors.gender && <label className="invalid-username">{validationErrors.gender}</label> }
                        </div>
                        <div className="register-form-right">
                            <label className="register-email-label">E-mail адреса*</label><br></br>
                            <input type="text" className="register-email-input" onChange={(e) => setEmail(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, email: validateEmail(email)})}></input>
                            { validationErrors.email && <label className="invalid-username">{validationErrors.email}</label> }
                            <br></br>
                            <label className="register-pw-label">Лозинка*</label><br></br>
                            <input type="password" className="register-pw-input" onChange={(e) => setPassword(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, password: validatePassword(password)})}></input>
                            { validationErrors.password && <label className="invalid-username">{validationErrors.password}</label> }
                            <br></br>
                            <label className="register-pw-repeat-label">Потврдете ја лозинката*</label><br></br>
                            <input type="text" className="register-pw-repeat-input" onChange={(e) => setRepeatedPassword(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, repeatedPassword: validateRepeatedPassword(repeatedPassword, password)})}></input>
                            { validationErrors.repeatedPassword && <label className="invalid-username">{validationErrors.repeatedPassword}</label> }
                            { error.length > 0 && <label className="invalid-username">{error}</label>}
                            <br></br>
                            <button className="register-submit-btn" onClick={registerAccount}>Регистрирај ме</button> 
                        </div>
                    </div>
            </div>
        </div>
        
    )
}