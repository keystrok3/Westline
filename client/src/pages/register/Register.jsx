

import { Link } from 'react-router-dom';
import './Register.css';
import { useEffect, useState } from 'react';

const Register = () => {

    const [ formData, setFormData ] = useState({
        user_id: "",
        email: "", 
        password: "",
        firstName: "",
        lastName: ""
    });

    const handleChangeId = (e) => {
        setFormData(prev => {
            return {
                user_id: e.target.value,
                email: prev.email, 
                password: prev.password,
                firstName: prev.firstName,
                lastName: prev.lastName
            }
        })
    };

    const handleChangeEmail = (e) => {
        setFormData(prev => {
            return {
                user_id: prev.user_id,
                email: e.target.value, 
                password: prev.password,
                firstName: prev.firstName,
                lastName: prev.lastName
            }
        })
    };

    const handleChangePassword = (e) => {
        setFormData(prev => {
            return {
                user_id: prev.user_id,
                email: prev.email, 
                password: e.target.value,
                firstName: prev.firstName,
                lastName: prev.lastName
            }
        })
    };

    const handleChangeFirstName = (e) => {
        setFormData(prev => {
            return {
                user_id: prev.user_id,
                email: prev.email, 
                password: prev.password,
                firstName: e.target.value,
                lastName: prev.lastName
            }
        })
    };

    const handleChangeLastName = (e) => {
        setFormData(prev => {
            return {
                user_id: prev.user_id,
                email: prev.email, 
                password: prev.password,
                firstName: prev.firstName,
                lastName: e.target.value
            }
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/auth/registeruser', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ ...formData })
            });

            if(!response.ok) {
                console.error(response.statusText)
                alert(response.statusText)
                return;
            }

            const data = await response.json()

            alert('Registered')
            console.log(data)
        } catch (error) {  
            console.error(error)
        }

    }

    return (
        <div className="register-page">
            <div className="register-form">
                <h1>Sign Up</h1>
                <div className="id" style={{ marginTop: '1.5em' }}>
                    <label htmlFor="id-field">ID or Passport Number</label>
                    <input onChange={handleChangeId} type="text" id='id-field' />
                </div>

                <div className="first-name">
                    <label htmlFor="first-name-field">First Name</label>
                    <input onChange={handleChangeFirstName} type="text" id="first-name-field" />
                </div>
                <div className="last-name">
                    <label htmlFor="last-name-field">Last Name</label>
                    <input onChange={handleChangeLastName} type="text" id="last-name-field" />
                </div>
                <div className="email">
                    <label htmlFor="email-field">Email</label>
                    <input onChange={handleChangeEmail} type="email" name="email" id="email-field" />
                </div>
                <div className="password">
                    <label htmlFor="password-field">Password</label>
                    <input onChange={handleChangePassword} type="password" id="password-field" />
                </div>

                <div className="submit">
                    <button onClick={handleSubmit} className="submit-btn">Log In</button>
                </div>

                <div className="already-signed">
                    <p>Already signed up?</p>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    )
};


export default Register;