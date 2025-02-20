import React from "react";

function HistoryForm() {
    return (
        <form className="w-full md:w-7/12 xl:w-5/12 mx-auto p-6  grid grid-cols-1 md:grid-cols-2 gap-6 flex justify-around">
            <div className="w-full   flex flex-col md:flex-row items-center justify-around g-4">
                    <label htmlFor="date" className="text-sm font-medium text-gray-700 whitespace-nowrap mb-4 sm:mb-0">
                        Date:
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="block w-full sm:w-4/5 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
            </div>

            <div className="flex" >
                    <button
                        type="submit"
                        className="mx-auto md:m-0 sm:w-2/5 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                    >
                        search
                    </button>
            </div>
        </form>
    );
}

export default HistoryForm;