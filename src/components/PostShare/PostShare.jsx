import React from 'react';
import './PostShare.css';
import Profile from '../../img/profileImg.jpg';
import { UilImage } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import { useState } from 'react';
import { useRef } from 'react';

const PostShare = () => {

  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (e) => {
    if(e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  }

    return (
        <div className='postShare'>
          <div className="happening">
            <div className='h-img'>
              <img src={ Profile } alt="" />
            </div>
            <input type="text" placeholder='What´s happening?' />
          </div>
          <div className='share'>
            <div className='p-icons' style={{
                color:'var(--photo)'
              }} 
              onClick={()=>imageRef.current.click()}
              >
              <UilImage />
              <span>Photo</span>
            </div>
            <div className='p-icons' style={{
                color:'var(--video)'
              }}>
              <UilPlayCircle />
              <span>Video</span>
            </div>
            <div className='p-icons' style={{
                color:'var(--location)'
              }}>
              <UilLocationPoint  />
              <span>Location</span>
            </div>
            <div className='p-icons' style={{
                color:'var(--shedule)'
              }}>
              <UilCalendarAlt  />
              <span>Shedule</span>
            </div>
            <button>Share</button>
            <div style={{
              display:'none'
            }}>
              <input 
              type="file" 
              name='myImage' 
              ref={imageRef} 
              onChange={onImageChange} 
              />
            </div>
          </div>
          {image && (

            <div className="previewImage">
              <UilTimes onClick={() => setImage(null)} />
              <img src={image.image} alt="" />
            </div>

          )}
        </div>
    );
}

export default PostShare;
