import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";


const Card = ({ val, ind, setSelectedType }) => {
    return (
        <div key={ind} className='m-4 w-full lg:w-[20%] lg:m-0 shadow-md p-4 min-h-[120px] cursor-pointer rounded-lg hover:shadow-lg relative'>
            <div className="flex items-center mt-4">
                <div
                    onClick={() => {
                        setSelectedType(val?.completed ? 'Update' : 'Complete', val)
                    }}
                    className='flex items-center justify-center w-6 h-6 border border-gray-200 rounded-full flex-shrink-0'
                >
                    {
                        val?.completed ? (
                            <FaCheck size={16} className='text-green-700' />
                        ) : (
                            <></>
                        )
                    }
                </div>
                <h3 className='ml-2'>{val?.todo}</h3>
            </div>

            <div onClick={() => {
                setSelectedType('Delete', val)
            }} className="absolute top-[6px] right-[12px]">
                <FaTrash size={14} className="text-red-700" />
            </div>
        </div>
    )
}

export default Card