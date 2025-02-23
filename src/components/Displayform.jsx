import React, { useState, useEffect } from "react";
import axios from 'axios';

function Displayform() {
    const options = {
        timeZone: 'America/New_York', // Eastern Time
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // Use 12-hour format (AM/PM)
    };

    const [formData, setFormData] = useState({
        plate: '',
        reason: '',
        apt: '',
        time: '' // Initialize as empty
    });

    const [error, setError] = useState('');

    // Update time on component mount and before submission
    const updateTime = () => {
        const currentTime = new Date().toLocaleString('en-us', options);
        setFormData((prevData) => ({
            ...prevData,
            time: currentTime
        }));
    };

    useEffect(() => {
        updateTime();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateTime(); // Ensure the time is updated before submission

        // Basic input validation
        if (!/^\d+$/.test(formData.plate)) {
            setError('Plate number should only contain numbers.');
            return;
        }
        if (!/^[A-Za-z]+$/.test(formData.reason)) {
            setError('Reason should only contain letters.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/display', formData);
            console.log('Response:', response.data);

            // Reset the form after successful submission
            setFormData({
                plate: '',
                reason: '',
                apt: '',
                time: new Date().toLocaleString('en-us', options)
            });
            setError(''); // Clear any previous errors
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to submit the form. Please try again.'); // Set error message
        }
    };

    return (
        <form className="w-full md:w-7/12 lg:w-7/12 mx-auto p-6" onSubmit={handleSubmit}>
            {error && (
                <div className="mb-4 text-red-500 text-sm">
                    {error}
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-around">
                <div className="flex flex-col">
                    <label htmlFor="plate" className="text-sm font-medium text-gray-700 mb-1">
                        Plate #:
                    </label>
                    <input
                        type="text"
                        id="plate"
                        name="plate"
                        value={formData.plate}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        maxLength={10}
                        pattern="\d*"
                        title="Please enter only numbers."
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="reason" className="text-sm font-medium text-gray-700 mb-1">
                        Reason:
                    </label>
                    <input
                        type="text"
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        maxLength={10}
                        pattern="[A-Za-z]+"
                        title="Please enter only letters."
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="apt" className="text-sm font-medium text-gray-700 mb-1">
                        Apt:
                    </label>
                    <input
                        type="text"
                        id="apt"
                        name="apt"
                        value={formData.apt}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        maxLength={5}
                    />
                </div>

                <div className="flex items-end">
                    <button
                        type="submit"
                        className="text-center w-1/2 md:w-1/2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mx-auto lg:ml-0"
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Displayform;