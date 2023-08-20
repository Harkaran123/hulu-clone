import React from 'react'

const Rateplancardtwo = () => {
    return (
        <div className='flex flex-row justify-between items-center gap-2 md:gap-4'>
            <div className='flex flex-col justify-between items-center gap-3'>
                <img src="https://www.hulu.com/static/hitch/static/logos/bundles-dark.svg" alt="" />
                <div>
                    <h1 className='font-[600] text-[13px] md:text-[17px]'>Disney Bundle</h1>
                    <h2 className='font-[600] text-[13px] md:text-[17px]'>Trio Basic</h2>
                </div>
                <button className='py-2 px-6 md:py-3 md:px-9 bg-white text-black font-[600] text-[10px] md:text-[17px] rounded-sm'>$12.99 / MONTH</button>
            </div>

            <div className='flex flex-col justify-between items-center gap-3'>
                <img src="https://www.hulu.com/static/hitch/static/logos/bundles-dark.svg" alt="" />
                <div>
                    <h1 className='font-[600] text-[13px] md:text-[17px]'>Disney Bundle</h1>
                    <h2 className='font-[600] text-[13px] md:text-[17px]'>Trio Basic</h2>
                </div>
                <button className='py-2 px-5 bg-white text-black font-[600] text-[10px] md:text-[17px] rounded-sm'>$12.99 / MONTH</button>
            </div>

            <div className='flex flex-col justify-between items-center gap-3'>
                <img src="https://www.hulu.com/static/hitch/static/logos/bundles-dark.svg" alt="" />
                <div>
                    <h1 className='font-[600] text-[13px] md:text-[17px] text-black'>Disney Bundle</h1>
                    <h2 className='font-[600] text-[13px] md:text-[17px]'>Trio Premium</h2>
                </div>
                <button className='py-2 px-6 bg-white text-black font-[600] text-[10px] md:text-[17px] rounded-sm'>$12.99 / MONTH</button>
            </div>
        </div>
    )
}

export default Rateplancardtwo
