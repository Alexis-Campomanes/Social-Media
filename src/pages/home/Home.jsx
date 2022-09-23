import React from 'react'
import Profile from '../../components/Profile/Profile'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className='profileSide'>
        <Profile />
      </div>
      <div className='postSide'>Post</div>
      <div className='rightSide'>RightSide</div>
    </div>
  )
}

export default Home
