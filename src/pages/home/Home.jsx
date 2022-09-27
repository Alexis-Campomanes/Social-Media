import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import Profile from '../../components/Profile/Profile'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className='profileSide'>
        <Profile />
      </div>
      <div className='postSide'>
        <PostSide />
      </div>
      <div className='rightSide'>
        <RightSide />
      </div>
    </div>
  )
}

export default Home
