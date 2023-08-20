import React, { useState } from 'react';
import Rateplancardone from './Rateplancards/Rateplancardone';
import Rateplancardtwo from './Rateplancards/Rateplancardtwo';

const Rateplan = () => {
  const [btn, setBtn] = useState(false);

  console.log(btn);


  const hadleClick = () => {
    setBtn(!btn);
  }
  return (
    <div className=''>
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 border-y-[0.5px] border-[rgb(0, 0, 0)] py-5 md:py-8'>

        <div className='flex flex-row gap-3'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[13px] md:text-[14px] font-[600]'>BASE PLAN</h1>
            <img className='w-9 h-9' src="https://www.hulu.com/static/hitch/static/logos/hulu-logo.svg" alt="" />
          </div>

          <div className={btn ? 'w-[60px] h-[33px] bg-[#18BB6C] rounded-3xl flex justify-end' : 'w-[60px] h-[33px] bg-[#424957] rounded-3xl flex justify-start'}>
            <div onClick={hadleClick} className='w-[33px] h-[33px] rounded-[50%] bg-white cursor-pointer'></div>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[13px] md:text-[14px] font-[600]'>BUNDLE / SAVE</h1>
            <img className=' ' src="https://www.hulu.com/static/hitch/static/logos/bundles-dark.svg" alt="" />
          </div>
        </div>

        {btn ? <Rateplancardtwo /> : <Rateplancardone />}

      </div>




    </div>
  )
}

export default Rateplan
