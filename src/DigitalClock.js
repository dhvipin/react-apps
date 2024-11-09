//import React from 'react'
import './DigitalClock.css'
import React, { useState, useEffect } from 'react';
const Digitalc=()=>{
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        // Update time every second
        const intervalId = setInterval(() => {
          setTime(new Date());
        }, 1000);
        // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
}, []);

const formatTime = (value) => (value < 10 ? `0${value}` : value);

const hours = formatTime(time.getHours());
const minutes = formatTime(time.getMinutes());
const seconds = formatTime(time.getSeconds());
let session="AM"
if (hours<12)
{
    session="AM";
}
else{
session="PM";
    }


return (
  <div className="digital-clock">
    <h2>{`${time.toLocaleDateString()}`}</h2>
    <h1>{`${hours}:${minutes}:${seconds}${session}`}</h1>
  </div>
);
};


const DigitalClock = () => {
  return (
    
      <div className="DApp">
      <header className="DApp-header">
        <h1>Digital Clock App</h1>
        <Digitalc />
      </header>
    </div>

  )
}

export default DigitalClock
