import React from 'react'
import '../Footer/Footer.scss';
import '../../assets/logo_footer.png'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo_footer.png';
import instagram from '../../assets/instagram_icon.png';
import facebook from '../../assets/facebook_icon.png';
import github from '../../assets/github_icon.png';
import college from '../../assets/college_icon.png';

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-container-ls">
            <div className="footer-container-ls-logo">
              <img src={logo} alt="informirajse_logo"/>
            </div>
            <div className="footer-container-ls-social">
              <a href="#" target='_blank' className="footer-container-ls-social-icon"><img src={instagram} alt="instagram"/></a>
              <a href="#" target='_blank' className="footer-container-ls-social-icon"><img src={facebook} alt="facebook"/></a>
              <a href="#" target='_blank' className="footer-container-ls-social-icon"><img src={github} alt="github"/></a>
              <a href="#" target='_blank' className="footer-container-ls-social-icon"><img src={college} alt="college"/></a>
            </div>
          </div>
          <div className="footer-container-menu">
            <span className='footer-container-menu-item'>Мени</span>
            <NavLink to="/" className={'footer-container-menu-item'}>Дома</NavLink>
            <NavLink to="/" className={'footer-container-menu-item'}>Блогови</NavLink>
            <NavLink to="/" className={'footer-container-menu-item'}>За нас</NavLink>
            <NavLink to="/" className={'footer-container-menu-item'}>Контакт</NavLink>
          </div>
          <div className="footer-container-wrapper">
              <div className="footer-container-menu2">
                <span className='footer-container-menu2-item'>Мени</span>
                <NavLink to="/" className={'footer-container-menu2-item'}>Дома</NavLink>
                <NavLink to="/" className={'footer-container-menu2-item'}>Блогови</NavLink>
                <NavLink to="/" className={'footer-container-menu2-item'}>За нас</NavLink>
                <NavLink to="/" className={'footer-container-menu2-item'}>Контакт</NavLink>
              </div>
              <div className="footer-container-support">
                <span className='footer-container-support-item'>Поддршка/Услови</span>
                <NavLink to="/" className={'footer-container-support-item'}>How to</NavLink>
                <NavLink to="/" className={'footer-container-support-item'}>Политика за користење</NavLink>
                <NavLink to="/" className={'footer-container-support-item'}>Приватност</NavLink>
                <NavLink to="/" className={'footer-container-support-item'}>FAQ</NavLink>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer