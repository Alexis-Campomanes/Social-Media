import React from 'react';
import './PostCard.css';
import { PostsData } from '../../Data/PostData'
import Post from '../Post/Post';




const PostCard = () => {
    return (
        <div className='postCard'>
          {PostsData.map((post, id)=>{
            return <Post post={post} key={post.name} />
          })}
        </div>
    );
}

export default PostCard;
