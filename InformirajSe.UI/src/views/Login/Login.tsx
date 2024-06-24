import React, { useState } from 'react'
import './Login.scss';
import logo_login from '../../assets/logo_login.png';
import { HashLink } from 'react-router-hash-link';
import eye from '../../assets/eye.png';
import { ValidationErrorsLogin, validateInputs, validatePassword, validateUsername } from './Login.policy';
import { LoginService } from '../../services/LoginService';
import { LoginInfo } from '../../models/LoginInfo';
import { Link } from 'react-router-dom';

const initialErrors: ValidationErrorsLogin = {
    username: "",
    password: ""
}

function Login() {

  const loginService = new LoginService();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState(initialErrors);
  const [error, setError] = useState("");
  const [inputPassword, setInputPassword] = useState('password');

  const onLoginSubmitNew = async () => {

    const loginInfo = new LoginInfo(username, password);

    const errors = validateInputs(loginInfo);

    if(Object.values(errors).filter(e => e.length > 0).length > 0) {
        setValidationErrors(errors);
        return;
    }
    
    const status = await loginService.login(username, password);

    if(status) {
        window.location.replace('http://localhost:3000/');
    } else {
        setError("Неправилно корисничко име или лозинка.");
    }

  }
  
  const toggleInputType = () => {
    setInputPassword(prevType => prevType === 'text' ? 'password' : 'text');
  }
    
  return (
    <div className='login-page-body'>
        <div className="login-page-body-container">
            <div className="login-page-body-container-login">
                <p className="login-page-body-container-login-title">Login</p>
                <HashLink to="/register" className="login-page-body-container-login-account">Немате акаунт ? <span className="login-page-body-container-login-bold">Регистрирајте се.</span></HashLink>
                <div className="login-page-body-container-login-form">
                    <p className="login-page-body-container-login-form-username">Корисничко име</p>
                    <input type='text' className="login-page-body-container-login-form-input" onChange={(e) => setUsername(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, username: validateUsername(username)})}/>
                    { validationErrors.username && <p className="login-page-body-container-login-form-error">Полето за корисничко име е задолжително.</p> }
                    <p className="login-page-body-container-login-form-password">Лозинка</p>
                    <div className="login-page-body-container-login-form-inputandeye">
                        <input type={inputPassword} className="login-page-body-container-login-form-inputandeye-input" onChange={(e) => setPassword(e.target.value)} onBlur={(e) => setValidationErrors({...validationErrors, password: validatePassword(password)})}/>
                        <img src={eye} className="login-page-body-container-login-form-inputandeye-img" onClick={toggleInputType}/>
                    </div>
                    { validationErrors.password && <p className="login-page-body-container-login-form-error">Полето за лозинка е задолжително.</p> }
                    { error && <p className="login-page-body-container-login-form-error">{error}</p>}
                    <button className="login-page-body-container-login-form-button" onClick={onLoginSubmitNew}>Sign In</button>
                </div>
            </div>
            <Link to="/" className="login-page-body-container-logo">
                <img src={logo_login} alt='logo_login' className="login-page-body-container-logo-img"/>
            </Link>
        </div>
    </div>
  )
}

export default Login