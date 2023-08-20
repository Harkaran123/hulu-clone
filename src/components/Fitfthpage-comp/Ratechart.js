import React from 'react';
import Ratechartcard from './Ratechartcard';
import Rateplan from './Rateplan';
import { TiTick } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { StickyContainer, Sticky } from 'react-sticky';
const Ratechart = () => {
  return (
    <div>
      
      <div className='sticky top-0 bg-black'>
      <Rateplan />
      </div>
      
     

      <Ratechartcard value_1="Monthly price" value_2="$7.99/mo." value_3="$14.99/mo." />
      <Ratechartcard value_1="Streaming Library with tons of TV episodes and movies" value_2={<TiTick />} value_3={<TiTick />} />
      <Ratechartcard value_1="Streaming Library with tons of TV episodes and movies" value_2={<TiTick />} value_3={<TiTick />} />
      <Ratechartcard value_1="Most new episodes the day after they air†" value_2={<TiTick />} value_3={<TiTick />} />
      <Ratechartcard value_1="Watch on your favorite devices, including TV, laptop, phone, or tablet" value_2={<TiTick />} value_3={<TiTick />} />
      <Ratechartcard value_1="Up to 6 user profilesUp to 6 user profiles" value_2={<TiTick />} value_3={<TiTick />} />
      <Ratechartcard value_1="Watch on 2 different screens at the same time" value_2={<TiTick />} value_3={<TiTick />} />
      <Ratechartcard value_1="No ads in streaming library" value_2={<TiTick />} value_3={<TiTick />} />
      <Ratechartcard value_1="Download and watch" value_2={<TiTick />} value_3={<TiTick />} />
      <Ratechartcard value_1="Access to award-winning Hulu Originals" value_2={<TiTick />} value_3={<TiTick />} />

      <div className='text-left text-[10px] pt-2 pb-12 border-b-[1px] border-white'>
        <p>†For current-season shows in the streaming library only <br />
          **Switches from Live TV to Hulu take effect as of the next billing cycl</p>
      </div>

      <div className='flex flex-row justify-center items-center gap-2 py-5 border-b-[1px] border-white'>
        <h1>Show-Add-ons </h1>
        <IoIosArrowDown size={30} className="cursor-pointer" />
      </div>
    </div>
  )
}

export default Ratechart
