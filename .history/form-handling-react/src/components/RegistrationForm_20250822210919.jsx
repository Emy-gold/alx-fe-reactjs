import React from 'react';
import { useState } from 'react';

function RegistrationForm() {

    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className='w-full mx-auto h-screen flex items-center justify-center bg-gray-100'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center bg-green-700 p-6 rounded-lg w-80'>
                <label className='text-white mb-2'>username :</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className='mb-4 p-2 w-full rounded'
                />
                <label className='text-white mb-2'>email :</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='mb-4 p-2 w-full rounded'
                />
                <label className='text-white mb-2'>password :</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className='mb-4 p-2 w-full rounded'
                />
                <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded mt-4'>
                    Register
                </button>
            </form>
        </div>
    )
}

export default RegistrationForm;