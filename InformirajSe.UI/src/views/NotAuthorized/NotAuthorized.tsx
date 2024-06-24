import React from "react";
import "./NotAuthorized.scss";
import rocket from '../../assets/Rocket Launch.gif';

export default function NotAuthorized() {
   
    return(

        <div className="main-content">
            <div className="left-side">
                <h1 className="text">Не сте авторизирани!</h1>
                <button className="back-button">Назад</button>
            </div>
            <div className="right-side">
                <img src={rocket} className="not-auth-gif"/>
            </div>
        </div>
            
    )
}