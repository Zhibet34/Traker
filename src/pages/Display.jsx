import React from "react";
import Displayheader from "../components/Displayheader";
import Displayform from "../components/Displayform";

function Display(){
    return(
        <div className="mt-16 flex flex-col">
            <Displayheader/>
            <Displayform/>
            <div className="border w-full md:w-4/5 lg:w-2/5 mx-auto">
                <div className="border border-cyan-500 flex justify-around">
                    <label>plate</label>
                    <label>Reason</label>
                    <label>apt</label>
                </div>
                <h1 className="text-center mt-4">the latest information from the database will appear here</h1>
            </div>
        </div>
    )
}

export default Display;