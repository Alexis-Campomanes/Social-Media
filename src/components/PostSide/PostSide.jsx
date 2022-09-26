import React from 'react';
import PostShare from '../PostShare/PostShare';
import './PostSide.css';
import Postpic from '../../img/postpic1.jpg';
import PostCard from '../PostCard/PostCard';

const PostSide = () => {
    return (
        <div className='PostSide'>
          <PostShare />
        </div>
    );
}

export default PostSide;
