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
        <div className='flex w-full mx-auto h-screen justify-center items-center'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-72 h-80 rounded-lg shadow-lg bg-green-50 p-10'>
                <input
                    type="text"
                    name="username"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='username'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm p-2 rounded-lg mb-5'
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm p-2 rounded-lg mb-5'
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm p-2 rounded-lg mb-5'
                />
                <button type='submit' className='bg-green-500 py-3 px-5'>submit</button>
            </form>
        </div>
    )
}

export default RegistrationForm