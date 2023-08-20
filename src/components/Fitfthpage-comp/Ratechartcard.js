import React from 'react'

const Ratechartcard = (props) => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center border-b-[1px] border-white py-6'>
      <h1 className='text-[13px] w-[320px] md:text-left'>{props.value_1}</h1>
      <div className='w-[250px] md:mr-[60px] flex  flex-row justify-between items-center'>
        <h2 className=''>{props.value_2}</h2>
        <h3 className=''>{props.value_3}</h3>
      </div>
    </div>

  )
}

export default Ratechartcard
