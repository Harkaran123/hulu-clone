import React, { useRef, useEffect } from 'react';
import Icon from './fourthpage-comp/Icon';
import { gsap } from 'gsap';

const Fourthpage = (props) => {

    const anim = useRef();

    useEffect(() => {

        let ctx = gsap.context(() => {
            gsap.from(".heading, .desc, .icons, .smtext", {
                y: 30,
                duration: 0.5,
                opacity:0,
                zIndex: 10,
            })
        }, anim)

    return () => ctx.revert();

    },[])

    return (
        <>
            <div className="relative w-full min-h-[110vh]">
                <div className='absolute w-full h-full bg-gradient-to-r from-[black] opacity-30 '></div>

                <div ref={anim} className='absolute text-[white] text-left flex flex-col justify-between gap-7 md:top-[35%] md:left-[15%] top-[20%] left-[8%]'>

                    <h1 className='heading text-lg md:text-5xl font-bold opacity-[0.9]'>{props.heading}</h1>
                    <p className='desc w-[300px] md:w-[490px] opacity-[0.9] text-sm'>{props.desc}</p>
                    <div className='icons flex justify-between w-[300px]'>
                        <Icon src={props.icon_1} />
                        <Icon src={props.icon_2} />
                        <Icon src={props.icon_3} />
                        <Icon src={props.icon_4} />
                    </div>
                    <h6 className='smtext text-[10px] opacity-[0.7] w-[300px]'>Live TV plan required. Regional restrictions, blackouts and additional terms apply. <a className='underline decoration-1' href="">See details</a></h6>
                </div>
            </div>
        </>
    )
}

export default Fourthpage;