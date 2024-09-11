import React, { useEffect, useState, useCallback } from "react";
import Spinner from "./Spinner";


function List({ data, setData, setUpdateData }) {
    const [visibleCount, setVisibleCount] = useState(2); // Show 2 items initially
    const [loading, setLoading] = useState(false); // Spinner state
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data])

    // Function to load more countries
    const loadMore = useCallback(() => {
        setLoading(true); // Show spinner
        setTimeout(() => {
            setVisibleCount((prevCount) => prevCount + 2); // Load 2 more on click
            setLoading(false); // Hide spinner after loading
        }, 1000); // Simulating loading delay (1 second)
    }, []);
    const handleDeleteFn = (id) => {
        const filterData = data.filter(item => item.id !== id);
        setData(filterData)
    }
    const handleEditFn = (id) => {
        const record = data.find((item) => item.id == id ? item : '')

        setUpdateData(record)
    }
    return (

        <>
            {!data ? (<Spinner />) : (<ul className="space-y-2" id="task-list">
                {data.slice(0, visibleCount)?.map((item) => (

                    <li
                        key={item.id}
                        className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                    >
                        <span className="text-gray-800 text-lg">{item.task}</span>
                        <div className="flex space-x-2">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                                onClick={() => handleEditFn(item.id)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300"
                                onClick={() => handleDeleteFn(item.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>

                ))}
            </ul>

            )}
            {visibleCount < data?.length && (
                <div className="flex justify-center mt-5">
                    <button
                        onClick={loadMore}
                        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? "Loading..." : "Load More"}
                    </button>
                </div>
            )}

        </>)

}
export default List;