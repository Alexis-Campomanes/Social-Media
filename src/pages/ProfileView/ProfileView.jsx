import React from 'react';
import './ProfileVIew.css';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import ProfileMedium from '../../components/ProfileMedium/ProfileMedium';
import ProfileRight from '../../components/ProfileRight/ProfileRight';


const ProfileView = () => {
    return (
        <div className='ProfileView'>
            <ProfileLeft />
            <ProfileMedium />
            <ProfileRight />
        </div>
    );
}

export default ProfileView;
