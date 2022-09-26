import React from 'react';
import './PostCard.css';
import Like from '../../img/like.png';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png'



const PostCard = ({image, numeroLikes, name, description }) => {
    return (
        <div className='postCard'>
          <img src={ image } alt="" style={{
            width:'760px',
            padding:'1rem'
          }} />
          <div className='likesFollowers'>
            <img src={Like} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
          </div>
          <span className='likes'>{numeroLikes} likes</span>
          <span className='description'>{name} {description}</span>
        </div>
    );
}

export default PostCard;
