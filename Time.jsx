import React, { useEffect, useState } from 'react';
import './Time.css';

export const Time = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = new Date('Jan 1, 2024 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdown - now;

      const newDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const newHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const newMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const newSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="h1">
        <h1>Happy New Year</h1>
      </div>
      <div className="countdown-container">
        <div className="countdown-values">
          <div className="countdown-value">
            <p className="big-text">{days}</p>
            <span className="span">days</span>
          </div>
          <div className="countdown-value">
            <p className="big-text">{hours}</p>
            <span className="span">hours</span>
          </div>
          <div className="countdown-value">
            <p className="big-text">{minutes}</p>
            <span className="span">minutes</span>
          </div>
          <div className="countdown-value">
            <p className="big-text">{seconds}</p>
            <span className="span">seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};
