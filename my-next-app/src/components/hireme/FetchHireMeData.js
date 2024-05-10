import React, { useState, useEffect } from 'react'

function FetchHireMeData() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('./hireMeData.json')
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((error) => console.log(error))
    }, [])

    return (
        <div className="flex justify-center">
            <div className="mt-10 mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-6">
                {data.length > 0 ? (
                    <ul>
                        {data.map((item, index) => (
                            <li key={index} className="border-b last:border-b-0 py-4">
                                <h2 className="text-2xl font-semibold">{item.name}</h2>
                                <p className="text-lg text-gray-600">Email: {item.email}</p>
                                <p className="text-lg text-gray-600">Subject: {item.subject}</p>
                                <p className="text-xl text-gray-800">Message: {item.message}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-lg">No data available</p>
                )}
            </div>
        </div>
    )
}

export default FetchHireMeData
