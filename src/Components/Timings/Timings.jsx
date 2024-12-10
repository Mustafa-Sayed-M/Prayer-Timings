import React from 'react';
import TimingCard from './Components/TimingCard';

function Timings({ timingsData }) {
  return (
    <div className="timings space-y-3">
      {
        timingsData.map((timing, index) => <TimingCard key={index} timingData={timing} />)
      }
    </div>
  )
}

export default Timings;