import React from "react";


const Button = ({backgroundColor, title, onClick}) => {
    return (
        <button className={`${backgroundColor} w-[20%] rounded-lg shadow-md text-white text-16 pt-[4px] pb-[4px]`} onClick={onClick}>{title}</button>
    )
}

export default Button