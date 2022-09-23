import React from 'react';
import './Profile.css';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';
import FollowersCard from '../FollowersCards/FollowersCard';

const Profile = () => {
  return (
    <div>
        <LogoSearch />
        <ProfileCard />
        <FollowersCard />
    </div>
  )
}

export default Profile
