import React from "react";
import Historyform from "../components/Historyform";
import Historyinfo from "../components/Historyinfo";

function History(){
    return(
        <div className="flex flex-col mt-16">
            <Historyform/>
            <Historyinfo/>
        </div>
    )
}

export default History;