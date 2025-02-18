import React from "react";
import Homepageform from '../components/Homepageform'

function Homepage(){
    return(
        <div className="homepage-container">
            <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 flex justify-center flex-col md:flex-row gap-4">
                <Homepageform />
            </div>
         </div>
    )
}

export default Homepage;