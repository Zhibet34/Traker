import React, { useEffect, useState } from "react";
import '../css/index.css';
import axios from 'axios';

function Displayheader() {
    const [name, setName] = useState();
    const [tour, setTour] = useState('');
    const [date, setDate] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/');
                const data = response.data;
                console.log("Data received:", data); 
                const {name, tour} = data[0]
                setName(name || 'No name available');
                setTour(tour || 'No tour available');
                 // Set today's date
                 const calender = new Date();
                 const month = calender.getMonth() + 1;
                 const year = calender.getFullYear();
                 const day = calender.getDate();
                 const todaysDate = `${month}/${day}/${year}`;
                 setDate(todaysDate);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="w-full md:w-7/12 lg:w-5/12 mx-auto flex justify-around mb-8">
            {/**how come the name and tour  is working */}
            <label>name: {name}</label>
            <label>tour: {tour}</label>
            <label>date: {date}</label>
        </div>
    );
}

export default Displayheader;