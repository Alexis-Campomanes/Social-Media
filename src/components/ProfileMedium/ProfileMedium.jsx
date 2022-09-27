import React from 'react';
import PostCard from '../PostCard/PostCard';
import PostShare from '../PostShare/PostShare';
import ProfileCard from '../ProfileCard/ProfileCard';
import './ProfileMedium.css'

const ProfileMedium = () => {
    return (
        <div>
            <ProfileCard />
            <PostShare />
            <PostCard />
        </div>
    );
}

export default ProfileMedium;
