import React from "react";

function Displayform() {
    return (
        <form className=" w-full md:w-7/12 lg:w-7/12 mx-auto p-6">
            {/**add a justify around */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-around">
                <div className="flex flex-col">
                    <label htmlFor="plate" className="text-sm font-medium text-gray-700 mb-1">
                        Plate #:
                    </label>
                    <input
                        type="text"
                        id="plate"
                        name="plate"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        maxLength={10}
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
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        maxLength={10}
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
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        maxLength={5}
                    />
                </div>
                
                <div className="flex items-end">
                    <button
                        type="submit"
                        className="text-center w-1/2 md:w-1/2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mx-auto md:ml-0"
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Displayform;