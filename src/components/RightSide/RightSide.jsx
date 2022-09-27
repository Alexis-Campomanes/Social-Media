import React from 'react';
import './RightSide.css';
import Home from '../../img/home.png';
import Noti from '../../img/noti.png';
import Comment from '../../img/comment.png';
import { UilSetting } from '@iconscout/react-unicons';
import TrendCard from '../TrendCard/TrendCard';

const RightSide = () => {
    return (
        <div className='RightSide'>
          <div className="navIcons">
            <img src={Home} alt="" />
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
            <UilSetting />
          </div>
          <TrendCard />
          <button className='btn-r'>Share</button>
        </div>
    );
}

export default RightSide;
