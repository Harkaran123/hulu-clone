import React from 'react'

const Services = ({arr}) => {

  return (
    <div className='flex flex-col justify-between items-center gap-1'>
        {arr.map(item => {
            return <h1 className='text-[#5E6573] text-sm cursor-pointer'>{item}</h1>
        })}
    </div>
  )
}

export default Services
