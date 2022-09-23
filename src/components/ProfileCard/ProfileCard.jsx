import React from 'react';
import './ProfileCard.css';
import Cover from '../../img/cover.jpg'
import Zendaya from '../../img/profileImg.jpg'

export default function ProfileCard() {
  return (
    <div className='profileCard'>
      <div className="p-perfil">
        <img className='cover' src={ Cover } alt="" />
        <div className='zendaya'>
          <img src={ Zendaya } alt="" />
        </div>
      </div>
      <div className="datos">
        <span className='name'>Mireya Aza PR</span>
        <span>Senior UI/UX Designer</span>
          <div className="followerX">
            <hr style={{width: '230px'}} />
              <div className='f-data'>
                <div className='flow'>
                  <span className='name'>6,866</span>
                  <span>Followers</span>
                </div>
                <hr/>
                <div className='flow'>
                  <span className='name'>1</span>
                  <span>Following</span>
                </div>
              </div>
            <hr style={{width:'230px'}} />
          </div>
          <span className='myProfile'>My Profile</span>
      </div>
    
    </div>
  )
}
