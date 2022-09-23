import React from 'react';
import './ProfileCard.css';
import Cover from '../../img/cover.jpg'
import Zendaya from '../../img/profileImg.jpg'

export default function ProfileCard() {
  return (
    <div className='profileCard'>
      <div className="p-perfil">
        <img className='cover' src={ Cover } alt="" />
        <div>
          <img src={ Zendaya } alt="" />
        </div>
      </div>
      <div className="datos">
        <span>Mireya PR</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <hr />
      <div className='data-followers'>
        <div>
          <span>6,866</span>
          <span>Followers</span>
        </div>
        <div>
          <hr />
        </div>
        <div>
          <span>1</span>
          <span>Following</span>
        </div>
      </div>
      <span>My Profile</span>
    </div>
  )
}
