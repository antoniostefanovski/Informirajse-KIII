import React, { useState } from 'react'
import './RegisterPage.scss';
import register_logo from '../../assets/login_logo.png';
import { HashLink } from 'react-router-hash-link';
import { ValidationErrors, validateDate, validateEmail, validateFullname, validateGender, validateInputs, validatePassword, validateRepeatedPassword, validateUsername } from './Register.policy';
import { RegisterService } from '../../services/RegisterService';
import { RegistrationError } from '../../enums/RegistrationError';
import { RegisterInfo } from '../../models/RegisterInfo';
import eye from '../../assets/eye.png';

const initialErrors: ValidationErrors = {
    username: "",
    email: "",
    password: "",
    repeatedPassword: "",
    fullname: "",
    gender: "",
    date: ""
};

function RegisterPage() {

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
    const [inputPassword, setInputPassword] = useState('password');

    const registerAccount = async () => {

        const registerInfo = new RegisterInfo(username, password, repeatedPassword, email, fullName, date, gender);

        const errors = validateInputs(registerInfo);

        if(Object.values(errors).filter(e => e.length > 0).length > 0) {
            setValidationErrors(errors);
            return;
        }
        
        const response = await registerService.register(username, password, repeatedPassword, email, fullName, date, gender);

        if(response.ok) {
            window.location.replace('http://localhost:3000/successful-registration');
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
                setError("Невалидни податоци. Обидете се повторно.");
                break;
            case RegistrationError.UserExists:
                setError("Корисничкото име веќе постои.");
                break;
            default:
                break;
        }
    }

    const toggleInputType = () => {
        setInputPassword(prevType => prevType === 'text' ? 'password' : 'text');
    }
    
    return (
        <div className='register-page-body'>
            <div className="register-page-body-container">
                <div className="register-page-body-container-first">
                    <div className="register-page-body-container-first-registration">
                        <div className="register-page-body-container-first-registration-container">
                            <p className="register-page-body-container-first-registration-container-title">Register</p>
                            <HashLink to="/login" className="register-page-body-container-first-registration-container-account">Имате акаунт ? <span className="register-page-body-container-first-registration-container-account-bold">Најавете се.</span></HashLink>
                        </div>
                    </div>
                    <div className="register-page-body-container-first-logo">
                        <img src={register_logo} alt='register_logo' className="register-page-body-container-first-logo-img"/>
                    </div>
                </div>
                <div className="register-page-body-container-form">
                    <div className="register-page-body-container-form-left">
                        <p className="register-page-body-container-form-left-username">Корисничко име<span className="register-page-body-container-form-left-username-asterisk">*</span></p>
                        <input type='text' className="register-page-body-container-form-left-input" onChange={(e) => setUsername(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, username: validateUsername(username)})}/>
                        { validationErrors.username && <p className="login-page-body-container-login-form-error">{validationErrors.username}</p> }
                        <p className="register-page-body-container-form-left-email">Email адреса<span className="register-page-body-container-form-left-username-asterisk">*</span></p>
                        <input type='text' className="register-page-body-container-form-left-input" onChange={(e) => setEmail(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, email: validateEmail(email)})}/>
                        { validationErrors.email && <p className="login-page-body-container-login-form-error">{validationErrors.email}</p> }
                        <p className="register-page-body-container-form-left-fullname">Име и презиме<span className="register-page-body-container-form-left-username-asterisk">*</span></p>
                        <input type='text' className="register-page-body-container-form-left-input" onChange={(e) => setName(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, fullname: validateFullname(email)})}/>
                        { validationErrors.fullname && <p className="login-page-body-container-login-form-error">{validationErrors.fullname}</p> }
                        <p className="register-page-body-container-form-left-date">Датум на раѓање<span className="register-page-body-container-form-left-username-asterisk">*</span></p>
                        <input type='date' className="register-page-body-container-form-left-input" onChange={(e) => setDate(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, date: validateDate(date)})}/>
                        { validationErrors.date && <p className="login-page-body-container-login-form-error">{validationErrors.date}</p> }
                    </div>
                    <div className="register-page-body-container-form-right">
                        <p className="register-page-body-container-form-right-password">Лозинка<span className="register-page-body-container-form-left-username-asterisk">*</span></p>
                        <div className='register-page-body-container-form-right-password-div'>
                            <input type={inputPassword} className="register-page-body-container-form-right-input" onChange={(e) => setPassword(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, password: validatePassword(password)})}/>
                            <img src={eye} className="register-page-body-container-form-right-password-div-img" onClick={toggleInputType}/>
                        </div>
                        { validationErrors.password && <p className="login-page-body-container-login-form-error">{validationErrors.password}</p> }
                        <p className="register-page-body-container-form-right-repeatedpassword">Потврдете ја лозинката<span className="register-page-body-container-form-left-username-asterisk">*</span></p>
                        <input type='password' className="register-page-body-container-form-right-input" onChange={(e) => setRepeatedPassword(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, repeatedPassword: validateRepeatedPassword(repeatedPassword, password)})}/>
                        { validationErrors.repeatedPassword && <p className="register-page-body-container-form-right-error">{validationErrors.repeatedPassword}</p> }
                        <p className="register-page-body-container-form-right-gender">Пол<span className="register-page-body-container-form-left-username-asterisk">*</span></p>
                        <select className="register-page-body-container-form-right-gender-list" onChange={(e) => setGender(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, gender: validateGender(gender)})}>
                                <option value={""}>Choose</option>
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                        </select>
                        { validationErrors.gender && <p className="register-page-body-container-form-right-error">{validationErrors.gender}</p> }
                        <button className="login-page-body-container-login-form-button" onClick={registerAccount}>Sign Up</button>
                        { error.length > 0 && <p className="register-page-body-container-form-right-error">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage