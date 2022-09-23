import React from 'react';
import './LogoSearch.css';
import Twitter from '../../img/logo.png';
import { UilSearch } from '@iconscout/react-unicons'

const LogoSearch = () => {
    return (
        <div className='logoSearch'>
          <img src={ Twitter } alt="" />
          <div className="search">
            <input type="text" placeholder='#Explore' />
            <div className="s-icons">
              <UilSearch style={{color: 'white'}} />
            </div>
          </div>
        </div>
    );
}

export default LogoSearch;
