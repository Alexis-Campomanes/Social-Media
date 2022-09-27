import React from 'react';
import PostShare from '../PostShare/PostShare';
import PostCard from '../PostCard/PostCard';
import './PostSide.css';



const PostSide = () => {
    return (
        <div className='PostSide'>
          <PostShare />
          <PostCard />
        </div>
    );
}

export default PostSide;
