import React from 'react';
import './YourInfo.css';
import { UilPen } from '@iconscout/react-unicons'

const YourInfo = () => {
    return (
        <div className='YourInfo'>
          <div className='y-pen'>
            <span><b>Your Info</b></span>
            <UilPen/>
          </div>
          <div className='y-status'>
            <span><b>Status</b> in Relationship</span>
            <span><b>Lives in</b> Multan</span>
            <span><b>Works at</b> Zainkeepscode inst.</span>
          </div>
          <div className='btn-y'>
            <button>Log Out</button>
          </div>
          
        </div>
    );
}

export default YourInfo;
