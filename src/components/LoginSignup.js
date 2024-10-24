import React, { useState } from 'react';
import './LoginSignup.css'; // Create a CSS file for styling

const LoginSignup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate signup/login
        if (username && password) {
            // Redirect to the specified URL after "successful" signup
            window.location.href = 'https://aditya5573.github.io/login-dashboard/';
        } else {
            setMessage('Please fill in all fields.');
        }
    };

    return (
        <div className="container">
            <h1>{isSignup ? 'Signup' : 'Login'}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
                <p onClick={() => setIsSignup(!isSignup)}>
                    {isSignup ? 'Already have an account? Login' : 'Do not have an account? Signup'}
                </p>
                {message && <div className="message">{message}</div>}
            </form>
        </div>
    );
};

export default LoginSignup;
