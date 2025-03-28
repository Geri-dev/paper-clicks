import React, { useState } from 'react';
import './heroarea.css';
import arrowIcon from './right.png';

export const HeroArea = ({ onContinue }) => {

  const [selectedTime, setSelecetedTime] = useState("");

  

  const handlechange = (event) => {
    setSelecetedTime(event.target.value);
  };

  return (
    <div className='hero-area'>
      <p className='question'>What Is The Best Time To Reach You?</p>

      <select className="dropdown" value={selectedTime} onChange={handlechange}>

        <option value="">Choose Your Time</option>
        <option value="8 AM CST">8 AM CST</option>
        <option value="9 AM CST">9 AM CST</option>
        <option value="10 AM CST">10 AM CST</option>
        <option value="11 AM CST">11 AM CST</option>
        <option value="12 PM CST">12 PM CST</option>
        <option value="1 PM CST">1 PM CST</option>
        <option value="2 PM CST">2 PM CST</option>
        <option value="3 PM CST">3 PM CST</option>
        <option value="4 PM CST">4 PM CST</option>
        <option value="5 PM CST">5 PM CST</option>


      </select>

      <p className="p-info">(All times are in CST)</p>

      <button class="continue-btn" onClick={onContinue} disabled={!selectedTime}>
        CONTINUE <img src={arrowIcon} width={19} height={19} />
      </button>




    </div>
  )
}
