import React from 'react'

const Icon = (props) => {
  
  return (
    <div className='w-[50px] h-[50px] rounded-[50%] bg-white flex justify-center items-center'>
       <img src={props.src} alt="" />
    </div>
  )
}

export default Icon
