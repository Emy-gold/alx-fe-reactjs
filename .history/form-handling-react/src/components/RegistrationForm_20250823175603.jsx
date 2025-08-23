import React from 'react';
import { useState } from 'react';

function RegistrationForm() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!username) newErrors.username = "Username is required";
        if (!email) newErrors.email = "Email is required";
        if (!password) newErrors.password = "Password is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log({ username, email, password });
            alert("Form submitted successfully");
        }
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
                {errors.username && <p className='text-red-500 text-sm mb-3'>{errors.username}</p>}
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm p-2 rounded-lg mb-5'
                />
                {errors.email && <p className='text-red-500 text-sm mb-3'>{errors.email}</p>}
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder='password'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm p-2 rounded-lg mb-5'
                />
                {errors.password && <p className='text-red-500 text-sm '>{errors.password}</p>}
                <button type='submit' className='bg-green-500 py-3 px-6 text-white text-md font-semibold rounded-xl hover:bg-green-600 duration-300'>Submit</button>
            </form>
        </div>
    )
}

export default RegistrationForm