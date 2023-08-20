import React, { useRef, useEffect} from "react";
import { IoIosArrowDown } from "react-icons/io";
import { gsap } from "gsap";


const Thirdpage = () => {

    const icon = useRef();
    
    useEffect(() => {
        
        gsap.to(icon.current, {
            y: 10,
            duration: 1.5,
            repeat: -1,
        })
    }, [])

    return (

        <div className="">
            <div className="text-[white] flex flex-col justify-center items-center gap-6 py-[160px]">
                <h3 className="text-[#18BB6C] text-[12px] md:text-[15px] font-[600]">HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+, ALL WITH ADS</h3>
                <h1 className="text-2xl md:text-5xl font-[700]">Live TV Makes It Better</h1>
                <p className="text-[14px] md:text-[17px] font-[500]">Make the switch from cable. Get 90+ top channels on Hulu (With Ads) + Live TV with your favorite live sports, <br />news, and events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV recordings <br /> for up to nine months and fast-forward through your DVR  Access endless entertainment with Disney+ and live sports <br />with ESPN+. </p>
                <p className="text-[9px] md:text-[11px] text-[#777879]">Regional restrictions, blackouts and Live TV terms apply. Access content from each service separately. Location data required to watch certain content. <br />Unlimited DVR recording is not available for on-demand shows.</p>
                <a className="font-[700] underline decoration-1 text-[#B9B9BA]" href="">VIEW CHANNELS IN YOUR AREA →</a>
                <div ref={icon} className="pt-5">
                <IoIosArrowDown size={30} className="cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Thirdpage;