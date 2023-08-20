import React from 'react'
import Rateplan from './Fitfthpage-comp/Rateplan';
import Ratechart from './Fitfthpage-comp/Ratechart';

const Fifthpage = () => {
  return (
    <div>
        <div className='flex flex-col justify-between items-center gap-6 text-[white] py-[70px]'>
            <h1 className='text-3xl md:text-5xl font-[600]'>Select Your Plan</h1>
            <p className='text-sm md:text-lg'>No hidden fees, equipment rentals, or installation appointments.<br />
               <span className='font-[600]'>Switch plans or cancel anytime.**</span></p>

            
            <Ratechart />

        </div>

        
        

    </div>
    
  )
}

export default Fifthpage
