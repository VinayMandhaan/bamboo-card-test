import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

const Card = ({ val, ind }) => {
    return (
        <div key={ind} className='m-4 w-full lg:w-[20%] lg:m-0 shadow-md p-4 min-h-[120px] cursor-pointer rounded-lg hover:shadow-lg relative'>
            <h3 className='mt-[8px]'>{val?.todo}</h3>
            {
                val?.completed && (
                    <div className='absolute top-[6px] right-[12px]'>
                        <FaCheck size={16} className='text-green-700' />
                    </div>
                )
            }
            <div className="absolute bottom-[6px] right-[12px]">
                <FaTrash size={16} className="text-red-700"/>
            </div>
        </div>
    )
}

export default Card