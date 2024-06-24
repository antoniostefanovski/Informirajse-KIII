import React from 'react'
import '../ProfilePreview/ProfilePreview.scss';
import avatar from '../../assets/profile_avatar.png';

function ProfilePreview() {
  return (
    <div>
        <div className="profile-container">
            <div className="profile-container-title">
                <p className="profile-container-title-text">Информации за профилот</p>
                <div className="profile-container-title-horizontal"></div>
            </div>
            <div className="profile-container-information">
                <div className="profile-container-information-avatar">
                    <img src={avatar} alt='profile_avatar'/>
                </div>
                <div className="profile-container-information-data">
                    <div className='profile-container-information-data-wrapper'>
                        <div className='profile-container-information-data-wrapper-element'>
                            <p className='profile-container-information-data-wrapper-element-info'>Корисничко име</p>
                            <p>admin</p>
                        </div>
                        <div className='profile-container-information-data-wrapper-element'>
                            <p className='profile-container-information-data-wrapper-element-info'>Email адреса</p>
                            <p>admin@informirajse.mk</p>
                        </div>
                        <div className='profile-container-information-data-wrapper-element'>
                            <p className='profile-container-information-data-wrapper-element-info'>Датум регистрација</p>
                            <p>08-02-2024</p>
                        </div>
                    </div>
                    <div className='profile-container-information-data-wrapper'>
                        <div className='profile-container-information-data-wrapper-element'>
                            <p className='profile-container-information-data-wrapper-element-info'>Датум на раѓање</p>
                            <p>08-02-2002</p>
                        </div>
                        <div className='profile-container-information-data-wrapper-element'>
                            <p className='profile-container-information-data-wrapper-element-info'>Земја на потекло</p>
                            <p>Македонија</p>
                        </div>
                        <div className='profile-container-information-data-wrapper-element'>
                            <p className="profile-container-information-data-wrapper-element-btn">
                                <a href="#" className="profile-container-information-data-wrapper-element-btn-link">Измени профил</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-container-activity">
                <p className="profile-container-activity-text">Активности на корисникот</p>
                <div className="profile-container-activity-horizontal"></div>
            </div>
            <div className="profile-container-user-blogs">
                <div className="profile-container-user-blogs-noinfo">
                    <p>Корисникот нема напишано блогови.</p>
                </div>
                <div className="profile-container-user-blogs-card">
                    <p className='profile-container-user-blogs-card-title'>OpenAI и нивните цели</p>
                    <div className='profile-container-user-blogs-card-crud'>
                        <a href="#" className='profile-container-user-blogs-card-crud-deledit'>Измени</a>
                        <p>|</p>
                        <a href="#" className='profile-container-user-blogs-card-crud-deledit'>Избриши</a>
                    </div>
                </div>
                <div className="profile-container-user-blogs-card">
                    <p className='profile-container-user-blogs-card-title'>Balkanization е иднината</p>
                    <div className='profile-container-user-blogs-card-crud'>
                        <a href="#" className='profile-container-user-blogs-card-crud-deledit'>Измени</a>
                        <p>|</p>
                        <a href="#" className='profile-container-user-blogs-card-crud-deledit'>Избриши</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePreview;