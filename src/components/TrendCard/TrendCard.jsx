import React from 'react';
import './TrendCard.css';
import { TrendData } from '../../Data/TrendCard';

export default function TrendCard() {
  return (
    <div className='TrendCard'>
        <h3>Trends for you</h3>
        {TrendData.map((trend) =>{
          return(
            <div className="trend">
              <span><b>#{trend.name}</b></span>
              <span className='shares'>{trend.shares}k shares</span>
            </div>
          )
        })}
    </div>
  )
}
