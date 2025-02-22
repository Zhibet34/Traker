import React, { useState } from "react";
import axios from 'axios';

function HomepageForm() {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        tour: ''
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send form data to the server
            const response = await axios.post('http://localhost:3000/', formData);
            console.log('Form submitted successfully:', response.data);

            // Clear the form after submission
            setFormData({
                name: '',
                tour: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            {/* Name Input */}
            <div className="flex flex-row items-center gap-2 w-full md:w-auto px-4 md:px-0">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 md:mt-0 block w-full md:w-64 lg:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                    required
                />
            </div>

            {/* Tour Select */}
            <div className="flex flex-row items-center gap-2 w-full md:w-auto px-4 md:px-0">
                <label htmlFor="tour" className="text-sm font-medium text-gray-700">
                    Tour:
                </label>
                <select
                    id="tour"
                    name="tour"
                    value={formData.tour}
                    onChange={handleInputChange}
                    className="mt-1 md:mt-0 block w-full md:w-48 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                >
                    <option value="">Select a tour</option>
                    <option value="7 X 3">7 X 3</option>
                    <option value="3 X 11">3 X 11</option>
                    <option value="11 X 7">11 X 7</option>
                </select>
            </div>

            {/* Submit Button */}
            <div className="flex flex-row items-center justify-center gap-2 w-full md:w-auto px-4 md:px-0">
                <button
                    type="submit"
                    className="md:w-auto bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default HomepageForm;