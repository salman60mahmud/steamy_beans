import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import "./PasswordInput.css"

const PasswordInput = () => {
    // State to track if the password is visible or not
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div>
            <label className="fieldset-label text-xl text-black">Password</label>
            <div className="input-wrapper">
                <input type={isPasswordVisible ? 'text' : 'password'}
                    // Toggle between text and password //
                    id="password" placeholder="Password" className="input" name='password' aria-describedby="password-help" required
                />
                <p id="password-help" className="text-sm text-gray-500" />

                {/* Eye icon to show or hide password */}
                <button type="button" onClick={togglePasswordVisibility} className="eye-icon">
                    {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
        </div>
    );
};

export default PasswordInput;
