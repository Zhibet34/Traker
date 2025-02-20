import React from "react";
import Displayheader from "../components/Displayheader";
import Displayform from "../components/Displayform";

function Display(){
    return(
        <div className="mt-16 flex flex-col">
            <Displayheader/>
            <Displayform/>
            <div>
                <h1>the latest information from the database will appear here</h1>
            </div>
        </div>
    )
}

export default Display;