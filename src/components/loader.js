import React from "react";
import { ClipLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className="absolute top-[50%] left-[50%]">
            <ClipLoader className="text-gray-200"/>
        </div>
    )
}

export default Loader