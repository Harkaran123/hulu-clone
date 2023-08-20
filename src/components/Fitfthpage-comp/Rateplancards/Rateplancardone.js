import React from 'react'
import Rateplancard from './Rateplancard';

const Rateplancardone = () => {
  return (
  
      <div className='flex flex-row justify-between items-center gap-4 '>
          <Rateplancard heading="MOST POPULAR" textOne="30 DAY FREE TRIAL" textTwo="Hulu (With Ads)"
            buttonText="$7.99 / Month" />
          <Rateplancard heading={false} textOne="30 DAY FREE TRIAL" textTwo="Hulu (No Ads)" buttonText="$14.99 / Month" />
          </div>

  )
}

export default Rateplancardone
