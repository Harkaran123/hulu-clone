import React from 'react'
import Services from './Fifthpage-comp/Services';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagramSquare } from 'react-icons/fa';

const Finalpage = () => {

  const footer_text = ["© 2023 Hulu, LLC",
    "About Ads",
    "Subscriber Agreement",
    "Privacy Policy",
    "Do Not Sell My Personal Information",
    "Your California Privacy Rights",
    "TV Parental Guidelines",
    "Sitemap"
  ]
  const Box = [];
  for (let i = 0; i < 5; i++) {
    Box.push(<Services arr={["BROWSE", "Streaming Library", "Live TV", "Live News", "Live Sports"]} />)
  }

  return (
    <div className='bg-white'>

      <div className='flex flex-col justify-evenly items-center gap-[100px] m-auto pt-20'>
        <div className='flex flex-col md:flex-row justify-evenly items-center gap-[10vw]'>
          {Box}
        </div>

        <div className='flex flex-col justify-evenly items-center md:items-start gap-10 py-5'>

          <hr className='bg-black w-[80vw] m-auto h-[1.5px] opacity-[0.2]' />

          <div className='flex flex-row justify-between items-center gap-5'>
            <FaFacebookF size={22} color='#5E6573' />
            <FaTwitter size={22} color='#5E6573' />
            <FaYoutube size={22} color='#5E6573' />
            <FaInstagramSquare size={22} color='#5E6573' />
          </div>

          <div className='flex flex-col md:flex-row justify-evenly items-center gap-10'>
            {footer_text.map((item) => {
              return <h2 className='text-[12px] text-[#5E6573] cursor-pointer'>{item}</h2>
            })}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Finalpage
