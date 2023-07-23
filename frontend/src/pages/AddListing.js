
import React, { useState } from 'react';


const AddListing = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        phoneNumber: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            image: file,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, for example, send data to the server or perform further actions
        console.log(formData);
    };

    return (
        <div>
            <div className="text-4xl shadow pb-7 text-center m-10">New Listing</div>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block mb-2 font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2 font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block mb-2 font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block mb-2 font-medium text-gray-700">
                        Image
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        name="image"
                        id="image"
                        onChange={handleImageChange}
                        required
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 mt-4 font-semibold text-white bg-indigo-500 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-opacity-50"
                >
                    Add Listing
                </button>
            </form>
        </div>
    );
};

export default AddListing;
