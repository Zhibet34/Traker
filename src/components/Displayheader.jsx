import React from "react";
import '../css/index.css'

function Displayheader(){
    return(
        <div className="w-full md:w-3/4 lg:w-4/12 mx-auto
        flex justify-around mb-8">
            <label>name: </label>
            <label>tour: </label>
            <label>date: </label>
        </div>
    )
}

export default Displayheader;