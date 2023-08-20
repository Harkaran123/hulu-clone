import React from 'react';
import Button from './Button';

const Homecard = (props) => {

    return (
        <div className='text-center flex flex-col justify-between items-center'>
            <h1 className='text-[#18BB6C] md:text-[12px] text-[9px] font-[800] md:pb-6 pb-4'>DISNEY BUNDLE DUO BASIC</h1>
            <img className='md:w-[205px] md:h-[55px] w-[195px] h-[45px]' src={props.src} alt="" />
            <div className='text-[white] md:py-6 md:text-2xl md:font-[600] py-4 text-sm'>
                <h1>{props.desc}</h1>
                <h1>{props.price}</h1>
            </div>
            <Button name={props.button_name}/>
        </div>
    )
}

export default Homecard;



