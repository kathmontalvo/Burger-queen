import React, { useState } from 'react';
import ReactStopwatch from 'react-stopwatch';

const Stopwatch = ({ now }) => {
  const [start, setStart] = useState(true)
  return (
    <ReactStopwatch
      seconds={0}
      minutes={0}
      hours={0}
      limit={now}
      autoStart={start}
      withLoop={false}
      onChange={({ hours, minutes, seconds }) => {
        return hours, minutes, seconds
      }}
      onCallback={() => {
        setStart(false)
        console.log('Finish')
      }}
      render={({ formatted, hours, minutes, seconds }) => {
        return (
          <div>
            <p>{formatted}</p>
          </div>
        );
      }}
    />)
};

export default Stopwatch;