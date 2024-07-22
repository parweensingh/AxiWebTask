import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Account = () => {
    const [countries, setCountries] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        countryOfResidence: '',
        mobileNumber: '',
        email: ''
    });
    const [result, setResult] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('/api/country');
                console.log('Fetched countries:', response.data); // Log fetched data
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    useEffect(() => {
        console.log('Updated countries state:', countries); // Log state update
    }, [countries]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/account/submit', formData)
            .then(response => setResult(response.data.result))
            .catch(error => console.error('Error submitting application:', error));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                <select
                    name="countryOfResidence"
                    value={formData.countryOfResidence}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Country</option>
                    {countries.map(country => (
                        <option key={country.countryCode} value={country.countryName}>
                            {country.countryName}
                        </option>
                    ))}
                    </select>
                <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Mobile Number" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <button type="submit">Submit</button>
            </form>
            {result && <p>Application Result: {result}</p>}
        </div>
    );
};

export default Account;
