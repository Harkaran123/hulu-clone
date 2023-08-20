import React from 'react'

const Rateplancard = (props) => {

  return (
    <div className='flex flex-col justify-between items-center gap-5'>
      <h1 className={props.heading ? 'py-1 px-5 md:py-2 md:px-8 bg-[#18BB6C] rounded-3xl text-[10px] text-black' : "py-[15px] px-10 opacity-0"}>{props.heading}</h1>
      <div>
        <h2 className='text-[#B8BDC2] text-[13px] md:text-[16px]'>{props.textOne}</h2>
        <h2 className='text-sm md:text-xl font-[600]'>{props.textTwo}</h2>
      </div>
      <button className='py-2 px-10 md:py-4 md:px-24 bg-white text-black text-[13px] md:text-sm font-[600] rounded-sm'>{props.buttonText}</button>
    </div>
  )
}

export default Rateplancard
