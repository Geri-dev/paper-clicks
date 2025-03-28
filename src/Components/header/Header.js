import React from 'react';
import phoneIcon from './phone2.png';
import './header.css';

export const Header = () => {
  return (
    <header className='header-area'>
      <div className='logo'>
        K<span className='slash'></span>NET<span className='slash'></span>C
        <div className='logo-subtext'>moving people</div>
      </div>

      <div className='contact-info'>
        <p className='contact-title'>Talk to a Consolidation Specialist</p>
        <p className='number'>
          <img className='phone-icon' src={phoneIcon} alt="icon" width={19} height={19} />
          (888) 888-8888
        </p>
      </div>
    </header>
  );
};
