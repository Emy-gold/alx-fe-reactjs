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
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-60 h-60 rounded-lg shadow-lg'>
                <input
                    type="text"
                    name="username"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='username'
                    className='bg-gray-100 text-400 p-2 rounded-xl'
                />
                <label>email :</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label>password :</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default RegistrationForm