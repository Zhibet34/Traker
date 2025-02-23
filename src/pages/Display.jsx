import React from "react";
import Displayheader from "../components/Displayheader";
import Displayform from "../components/Displayform";
import axios from "axios";
import { useEffect, useState } from "react";

function Display() {
    const [information, setInformation] = useState([]);

    // Function to fetch data from the server
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/display');
            const data = response.data;
            setInformation(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        // web socket tomorow
        setInterval(fetchData,5000)
    }, []);

    // Map over the information array to display data
    let dataInformation = information.map((info, id) => {
        return (
            <div key={id} className="border w-full md:w-10/12 xl:w-2/5 mx-auto">
                <ul className="flex flex-row justify-around">
                    <li>{info.plate}</li>
                    <li>{info.reason}</li>
                    <li>{info.apt}</li>
                    <li>{info.time}</li>
                </ul>
            </div>
        );
    });

    return (
        <div className="mt-16 flex flex-col">
            <Displayheader />
            {/* Pass the handleNewData function as a prop to Displayform */}
            <Displayform/>
            {dataInformation}
        </div>
    );
}

export default Display;