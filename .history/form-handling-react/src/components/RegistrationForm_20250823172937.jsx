import React from 'react';
import { useState } from 'react';

function RegistrationForm() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (email === 'email') setEmail(value);
        if (password === 'password') setPassword(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, email, password });
    }

    return (
        <div className='flex w-full mx-auto h-screen justify-center items-center'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-72 h-80 rounded-lg shadow-lg bg-green-50 p-10'>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    placeholder='username'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm p-2 rounded-lg mb-5'
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm p-2 rounded-lg mb-5'
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm p-2 rounded-lg mb-5'
                />
                <button type='submit' className='bg-green-500 py-3 px-6 text-white text-md font-semibold rounded-xl hover:bg-green-600 duration-300'>Submit</button>
            </form>
        </div>
    )
}

export default RegistrationForm