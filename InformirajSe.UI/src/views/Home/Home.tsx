import React from 'react'
import '../Home/Home.scss';
import homebody from '../../assets/home_body.jpg';
import { Link } from 'react-router-dom';
import mission from '../../assets/mission_icon.png';
import values from '../../assets/value_icon.png';
import community from '../../assets/community_icon.png';
import content from '../../assets/content_icon.png';
import goals from '../../assets/goals_icon.png';
import action from '../../assets/action_icon.png';
import content_img1 from '../../assets/home_content1.jpg';
import content_img2 from '../../assets/home_content2.jpg';
import content_img3 from '../../assets/home_content3.jpg';
import content_img4 from '../../assets/home_content4.jpg';
import emoji_cool from '../../assets/emoji_cool.png';
import emoji_devil from '../../assets/emoji_devil.png';
import emoji_lol from '../../assets/emoji_lol.png';
import emoji_wow from '../../assets/emoji_wow.png';

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-container-header">
          <div className="home-container-header-image">
            <img src={homebody} alt="home_background" className="home-container-header-image-img"/>
          </div>
          <div className="home-container-header-content">
            <p className='home-container-header-content-title'>Твоето мислење нам ни значи!</p>
            <Link to="/test" className="home-container-header-content-button">Започни</Link>
          </div>
        </div>
        <div className="home-container-content">
          <p className="home-container-content-title">Добредојдовте на <span className="home-container-content-colored">ИнформирајСе</span></p>
          <div className="home-container-content-horizontal"></div>
          <p className="home-container-content-text">
            Преку нашата страница вие ќе бидете во тек со сите случувања поврзани со ИТ сферата во Македонија и светот. 
            Дознајте кои се новостите, до каде е стигната вештачката интелегенција па потоа бидете креативни и кажете ни што мислите за некоја тема која вам ви е интересна. 
            Ние сме тука и секогаш сме заинтересирани за размена на мислења.
          </p>
          <img src={content_img1} alt='content1' className='home-container-content-image'/>
          <img src={content_img2} alt='content2' className='home-container-content-image'/>
        </div>
        <div className="home-container-content">
          <p className="home-container-content-title">Нашата <span className="home-container-content-colored">визија</span></p>
          <div className="home-container-content-horizontal"></div>
          <p className="home-container-content-text">
            Нашата визија е да бидеме главна дестинација за ИТ професионалци, ентузијасти и ученици кои бараат сигурна и привлечна содржина.
            Секогаш сме први со пласирање на новостите кои се случуваат во ИТ светот.
          </p>
          <div className="home-container-content-vision">
            <div className="home-container-content-vision-card">
                <img src={mission} alt='mission_icon'/>
                <p className='home-container-content-vision-card-title'>Мисија</p>
                <p className='home-container-content-vision-card-description'>Ние сме посветени на доставување точни и навремени вести, анализи и упатства кои ги охрабруваат нашите читатели да останат 
                  информирани, да ги подобрат своите вештини и да се движат низ пејзажот на технологи јата кој постојано се менува.</p>
            </div>
            <div className="home-container-content-vision-card">
                <img src={values} alt='mission_icon'/>
                <p className='home-container-content-vision-card-title'>Вредности</p>
                <p className='home-container-content-vision-card-description'>Интегритетот, точноста, инклузивноста и иновативноста се во сржта на сè што правиме. 
                  Посветени сме на поттикнување на заедница со почит и добредојде каде што се вреднуваат и слават различните перспективи.</p>
            </div>
            <div className="home-container-content-vision-card">
                <img src={community} alt='mission_icon'/>
                <p className='home-container-content-vision-card-title'>Заедница</p>
                <p className='home-container-content-vision-card-description'>Ние веруваме во моќта на заедницата и активно ги охрабруваме нашите читатели да го споделат своето знаење, 
                  да поставуваат прашања и да се вклучат во значајни дискусии. Вашиот глас е важен, а ние сме тука да слушаме.</p>
            </div>
          </div>
          <div className="home-container-content-vision">
            <div className="home-container-content-vision-card">
                <img src={content} alt='mission_icon'/>
                <p className='home-container-content-vision-card-title'>Содржина</p>
                <p className='home-container-content-vision-card-description'>Од најновите трендови во индустријата до детални упатства и мислења кои предизвикуваат размислување, нашата содржина опфаќа широк опсег на ИТ теми. 
                Нашиот тим од се грижи секогаш да ги добиете најрелевантните и најразбирливите информации.</p>
            </div>
            <div className="home-container-content-vision-card">
                <img src={goals} alt='mission_icon'/>
                <p className='home-container-content-vision-card-title'>Цели</p>
                <p className='home-container-content-vision-card-description'>Како што продолжуваме да растеме, нашата цел е да станеме вистински извор за ИТ професионалците ширум светот. Ние се стремиме да изградиме енергична и 
                просперитетна заедница каде што се споделува знаењето, се создаваат врски и цветаат иновациите.</p>
            </div>
            <div className="home-container-content-vision-card">
                <img src={action} alt='mission_icon'/>
                <p className='home-container-content-vision-card-title'>Повик до вас</p>
                <p className='home-container-content-vision-card-description'>Придружете се на нашата заедница, следете не на социјалните мрежи и придонесете со вашата експертиза
                во нашата растечка заедница. Заедно можеме повеќе, заедно до подобра иднина.</p>
            </div>
          </div>
          <div className="home-container-content-statistics">
            <img src={content_img3} alt='content3' className='home-container-content-statistics-image'/>
            <div className="home-container-content-statistics-wrapper">
              <p className="home-container-content-statistics-wrapper-title">Што треба да знаете за нашата <span className="home-container-content-statistics-wrapper-colored">ИТ заедница</span> ?</p>
              <p className="home-container-content-statistics-wrapper-text">Преку <span className="home-container-content-statistics-wrapper-colored">20000+</span> програмери.</p>
              <p className="home-container-content-statistics-wrapper-text">Преку <span className="home-container-content-statistics-wrapper-colored">50+</span> врвни ИТ компании.</p>
              <p className="home-container-content-statistics-wrapper-text">Во <span className="home-container-content-statistics-wrapper-colored">голем</span> подем.</p>
            </div>
          </div>
          <div className="home-container-content-facts">
            <div className="home-container-content-facts-wrapper">
              <p className="home-container-content-facts-wrapper-title">Факти за технологијата кои можеби <span className="home-container-content-facts-wrapper-colored">ги промашивте</span>.</p>
              <p className="home-container-content-facts-wrapper-text">Интернетот на <span className="home-container-content-facts-wrapper-colored">NASA</span> има брзина од <span className="home-container-content-facts-wrapper-colored">91 GB/s</span>. <img src={emoji_wow}/></p>
              <p className="home-container-content-facts-wrapper-text">Логото на <span className="home-container-content-facts-wrapper-colored">Firefox</span> не е лисица туку <span className="home-container-content-facts-wrapper-colored">црвена панда</span>! <img src={emoji_cool}/></p>
              <p className="home-container-content-facts-wrapper-text">Твојот <span className="home-container-content-facts-wrapper-colored">телефон</span> те слуша што зборуваш и ти <span className="home-container-content-facts-wrapper-colored">по(од)мага</span>. <img src={emoji_devil}/></p>
              <p className="home-container-content-facts-wrapper-text">Програмскиот јазик <span className="home-container-content-facts-wrapper-colored">Python</span> не е крстен по змијата туку по <span className="home-container-content-facts-wrapper-colored">Monty Python</span>. <img src={emoji_lol}/></p>
            </div>
            <img src={content_img4} alt='content4' className='home-container-content-facts-image'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;