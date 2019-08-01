import * as React from 'react';
import ReactStopwatch from 'react-stopwatch';

const Stopwatch = () => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    limit="00:00:10"
    onChange={({ hours, minutes, seconds }) => {
      return {hours,minutes,seconds}
    }}
    onCallback={() => console.log('Finish')}
    render={({ formatted, hours, minutes, seconds }) => {
      return (
        <div>
          <p>{formatted}</p>
        </div>
      );
    }}
  />
);

export default Stopwatch;