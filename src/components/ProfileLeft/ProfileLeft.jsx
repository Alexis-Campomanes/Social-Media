import React from 'react';
import './ProfileLeft.css';
import LogoSearch from '../../components/LogoSearch/LogoSearch';
import YourInfo from '../YourInfo/YourInfo';
import FollowersCard from '../FollowersCards/FollowersCard'

const ProfileLeft = () => {
    return (
        <div className='ProfileLeft'>
            <LogoSearch />
            <YourInfo />
            <FollowersCard />
        </div>
    );
}

export default ProfileLeft;
