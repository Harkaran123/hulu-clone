import React from 'react';
import { useState, useRef } from 'react';
import Homecard from './Homecard';
import { Link } from "react-router-dom";
import { AiOutlinePause } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const Home = () => {

  const [playPause, setPlayPause] = useState(false);
  const vid = useRef();

  console.log(vid);

  const handlClick = () => {

    setPlayPause(!playPause);

    if (playPause == false){
        vid.current.children[0].pause();
        vid.current.children[1].pause();
        vid.current.children[2].pause();
    }
    else{
      vid.current.children[0].play();
      vid.current.children[1].play();
      vid.current.children[2].play();
    }


  }

  return (
    <div className="w-full min-h-[100vh] bg-black">
      <div className='absolute bg-transparent z-[2] w-full h-[80px] flex justify-between items-center px-10'>
        <h1 className='text-[#18BB6C] text-[26px] font-bold'>hulu</h1>
        <h1 className='font-bold text-[#FFFFFF] text-[17px]'>LOG IN</h1>
      </div>

      <div className='absolute top-[27%] z-10 left-[2%]  flex justify-between md:gap-10 gap-5'>
        <Homecard src={"https://cnbl-cdn.bamgrid.com/assets/f1607ad0edca860aef966f4295fcb94be1af04de5aefcf855bc080b778448bef/original"} desc="Both with ads, for" price="$9.99/month." button_name="GET THEM BOTH" />
        <Homecard src={"https://www.hulu.com/static/hitch/s3/attachments/ckdz36xqi7zz019ym0b2seyqk-dplus-logo-0-1-2-0.full.png"} desc="All with ads, for" price="$12.99/month." button_name="GET ALL THREE" />
        <div className='text-[white] absolute top-[100%] md:left-[40%] left-[34%] pt-4 flex flex-col gap-4'>
          <a className='font-[400] underline decoration-1' href="">Terms apply</a>
          <a className='font-[400] underline decoration-1' href="">Sign up for Hulu only</a>
        </div>
      </div>

      <div className='absolute w-11 h-11 rounded-[50%] border-2 border-[white] flex justify-center items-center z-10 md:left-[94%] md:top-[86%] left-[85%] top-[88%] bg-black opacity-[0.8] hover:border-[3px]'>
        { playPause ?<FaPlay className='text-[white] text-xl font-[1000]' onClick={handlClick} /> :  <AiOutlinePause className='text-[white] text-2xl font-[1000]' onClick={handlClick}/> }
      </div>

      <div className='absolute w-full h-full bg-gradiant-to-r bg-gradient-to-r from-black'></div>

      <div ref={vid}>
        <video className='lg:w-full lg:h-[100%] w-0 h-0 z-[-1]' autoPlay loop muted>
          <source src={"https://cnbl-cdn.bamgrid.com/assets/030e0166402678eb92d29523224bfc0810299712bf0c80b7952f8a1e60e54547/original"} />
        </video>

        <video className='lg:hidden sm:w-full sm:h-[100%] w-0 h-0' autoPlay loop muted>
          <source src={"https://cnbl-cdn.bamgrid.com/assets/a5fc15eaa2a661438f674b06d9b66c6ce568d323a18003bcc3e245e375c2db75/original"} />
        </video>

        <video className='sm:hidden w-full h-[100%]' autoPlay loop muted >
          <source src={"https://cnbl-cdn.bamgrid.com/assets/fad6030a07b9a328b2e49ddd6b8d0b15fd021f886c45bee7a7379c2bc7d0fc02/original"} />
        </video>
      </div>
    </div>
  )
}

export default Home

// 