import React, { useState } from "react";
import "./LoginForm.scss";
import logo from '../../assets/login_logo.png';
import { LoginService } from "../../services/LoginService";

export default function LoginForm(){

    const loginService = new LoginService();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [invalidUsername, setInvalidUsername] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [incorrectCredentials, setIncorrectCredentials] = useState(false);

    const onLoginSubmit = async () => {

        if(invalidUsername || invalidPassword) {
            return;
        }

        const status = await loginService.login(username, password);

        if(status) {
            window.location.replace('http://localhost:3000/');
        } else {
            setIncorrectCredentials(true);
        }
    }

    const validateUsername = (value: string) => {
        
        setUsername(value);
        setIncorrectCredentials(false);

        if(value === "" || value === null) {
            setInvalidUsername(true);
        }
        else {
            setInvalidUsername(false);
        }
    }

    const validatePassword = (value: string) => {

        setPassword(value);
        setIncorrectCredentials(false);

        if(value === "" || value === null) {
            setInvalidPassword(true);
        } else {
            setInvalidPassword(false);
        }
    }

    return(
        <div className="login-background">
            <div className="main-content1">
                <img src={logo} className="login-logo"></img>
                {/* <h3 className="text">Внесете ги вашите податоци за пристап до вашиот профил.</h3> */}
                <div className="login-form">
                    <label className="username-label">Корисничко име</label><br></br>
                    <input type="text" className="username-input" onChange={(e) => validateUsername(e.target.value)}></input>
                    { invalidUsername && <label className="invalid-username">Внесете корисничко име.</label> }
                    <br></br>
                    <label className="password-label">Лозинка</label><br></br>
                    <input type="password" className="password-input" onChange={(e) => validatePassword(e.target.value)}></input>
                    { invalidPassword && <label className="invalid-username">Внесете лозинка.</label>}
                    { incorrectCredentials && <label className="invalid-username">Погрешно корисничко име или лозинка.</label>}
                    <br></br>
                    <button className="login-button" onClick={onLoginSubmit}>Најави се</button>
                </div>
            </div>
        </div>
        
    )
}

