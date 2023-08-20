import React from "react";

const Button = (props) => {
    
    return (
        <div>
            <button className="bg-[#18BB6C] md:py-2 md:px-[100px] font-bold rounded-sm py-[4px] px-7 text-[15px] md:text-[18px]">{props.name}</button>
        </div>
    )
}

export default Button;