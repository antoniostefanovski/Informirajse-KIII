import React from 'react'
import './RegistrationSuccess.scss';
import arrow_left from '../../assets/arrow_left.png';
import arrow_right from '../../assets/arrow_right.png';
import { HashLink } from 'react-router-hash-link';


function RegistrationSuccess() {
  return (
    <div className="registration-success-body">
        <div className="registration-success-body-container">
            <p className="registration-success-body-container-title">Успешна регистрација!</p>
            <div className="registration-success-body-container-content">
                <p className="registration-success-body-container-content-paragraph">
                    Вашата корисничка сметка е креирана, сега сте дел од <span className="registration-success-body-container-content-paragraph-accent">ИнформирајСе</span> !
                </p>
                <p className="registration-success-body-container-content-paragraph">
                    Топло ве советуваме да разгледате и да откриете што сè крие нашата платформа. Од тука може да продолжете со вашата авантура.
                </p>
                <p className="registration-success-body-container-content-paragraph">
                    Прочитајте што се е актуелно и ново во овој хаотичен ИТ свет, прочитајте што мислат другите за оваа тема и оставете коментар на нивниот блог.
                </p>
                <p className="registration-success-body-container-content-paragraph">
                    Вашето мислење нам ни е битно, па би сакале да го слушниме. Направете го тоа со пишување на блог на некоја тема која вам ви е интересна. 
                </p>
                <p className="registration-success-body-container-content-paragraph">
                    Доколку имате некакво прашање, контактирајте го тимот на ИнформирајСе преку <span className="registration-success-body-container-content-paragraph-accent">support@informirajse.mk</span>.
                </p>
            </div>
            <div className="registration-success-body-container-navigation">
                <HashLink to="/#" className="registration-success-body-container-navigation-home">
                    <img src={arrow_left} alt='arrow_left' className="registration-success-body-container-navigation-home-img"/>
                    <p className="registration-success-body-container-navigation-home-link">Почетна...</p>
                </HashLink>
                <HashLink to="/login#" className="registration-success-body-container-navigation-login">
                    <p className="registration-success-body-container-navigation-login-link">Најави се...</p>
                    <img src={arrow_right} alt='arrow_right' className="registration-success-body-container-navigation-login-img"/>
                </HashLink>
            </div>
        </div>
    </div>
  )
}

export default RegistrationSuccess