import React, { useState, useEffect, useRef } from 'react'
import Fourone from './fourthpage-comp/Fourone';
import Fourtwo from './fourthpage-comp/Fourtwo';
import Fourthree from './fourthpage-comp/Fourthree';
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { gsap } from "gsap";

const Fourthpagemain = () => {

  const [btnOne, setBtnOne] = useState(true);
  const [btnTwo, setBtnTwo] = useState(false);
  const [btnThree, setbtnThree] = useState(false);
  const line = useRef();
  const b1 = useRef();
  const b2 = useRef();
  const b3 = useRef(); 
  

  useEffect(() => {
      let lft = b1.current.getBoundingClientRect().left;
      let wid1 = b1.current.offsetWidth;
      line.current.style.left = lft+"px";
      line.current.style.width = wid1+"px";
      line.current.style.transition = "all 0.3s";
  }, []);


  const hadleClickOne = () => {
    setBtnOne(true);
    setBtnTwo(false);
    setbtnThree(false);

    let lft = b1.current.getBoundingClientRect().left;
    let wid1 = b1.current.offsetWidth;
    line.current.style.width = wid1+"px";
    line.current.style.left = lft+"px";
    line.current.style.transition = "all 0.3s"
    }

  const handleClickTwo = () => {
    setBtnOne(false);
    setBtnTwo(true);
    setbtnThree(false);

    let lft = b2.current.getBoundingClientRect().left;
    let wid2 = b2.current.offsetWidth;
    line.current.style.width = wid2+"px";
    line.current.style.left = lft+"px";
    line.current.style.transition = "all 0.3s"
  }

  const handleClickThree = () => {
    setBtnOne(false);
    setBtnTwo(false);
    setbtnThree(true);

    let lft = b3.current.getBoundingClientRect().left;
    let wid3 = b3.current.offsetWidth;
    line.current.style.width = wid3+"px";
    line.current.style.left = lft+"px";
    line.current.style.transition = "all 0.3s"
  }

    


  return (

    <div className='relative'>

    
        <div className='absolute text-[white] flex flex-row justify-between gap-9 z-10 md:left-[15%] md:top-[24%] top-[2%] left-[4%]'>
          <h2 ref={b1} onClick={hadleClickOne} className={ btnOne ? 'text-[12px] cursor-pointer font-[700]  hover:opacity-30': 'text-[12px] opacity-40 cursor-pointer font-[700] hover:opacity-30'}>LIVE SPORTS</h2>
          <h2 ref={b2} onClick={handleClickTwo} className={ btnTwo ? 'text-[12px] cursor-pointer font-[700] hover:opacity-30': 'text-[12px] opacity-40 cursor-pointer font-[700] hover:opacity-30'}>BREAKING NEWS</h2>
          <h2 ref={b3} onClick={handleClickThree} className={ btnThree ? 'text-[12px] cursor-pointer font-[700] hover:opacity-30': 'text-[12px] opacity-40 cursor-pointer font-[700] hover:opacity-30'}>BIGGEST EVENTS</h2>
       </div>
        <div ref={line} className='absolute md:top-[29%] md:left-[15%] top-[10%] left-[7%] w-[0px] h-[4px] bg-white z-10'></div>
      

      {btnOne && <Fourone />}
      {btnTwo && <Fourtwo />}
      {btnThree && <Fourthree />}

    </div>

  )
}

export default Fourthpagemain;
