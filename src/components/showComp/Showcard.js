import React from "react";

const Showcard = (props) => {

    return (

        <div className="relative md:w-[300px] w-[180px] rounded-xl hover:outline outline-solid outline-4 outline-offset-0 outline-[#797D84] ease-in-out duration-150 py-1 px-1 cursor-pointer">

            <div className="absolute text-white top-6 left-5">
                <h3 className="md:text-[13px] text-[10px] font-[700]">{props.heading_one}</h3>
                <h1 className="text-xl font-[400] pt-2 text-left">{props.heading_two}</h1>
            </div>

            <div className="absolute w-full h-full bg-gradient-to-t from-[black] to-[black] opacity-[0.5]"></div>
          
            <img className="w-full rounded-xl " src={props.image} alt="" />

        </div>
    )
}

export default Showcard;