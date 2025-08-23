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
        <div>
            <form onSubmit={handleSubmit}>
                <label>username :</label>
                <input
                    type="text"
                    name="username"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label>email :</label>
                <label>password :</label>
            </form>
        </div>
    )
}

export default RegistrationForm