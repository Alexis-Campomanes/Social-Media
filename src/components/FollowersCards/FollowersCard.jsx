import React from 'react';
import './FollowersCards.css'
import { Followers } from '../../Data/FollowersData';

const FollowersCard = () => {
  return (
    <div className='followersCard'>
      <span className='fTitle'>Who is following you</span>

      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div className='f-name'>
              <img src={follower.img} alt="" />
              <div className='fUsername'>
                <span className='uName'>{follower.name}</span>
                <span>{follower.username}</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
        )
      })}
        <span className='myProfile show'>Show more</span>
    </div>
  )
}

export default FollowersCard
