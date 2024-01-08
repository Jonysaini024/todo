import React from 'react';
import { useState } from 'react';

function Login1(props) {

    const [message, setMessage] = useState("");

    const [formData, setFormData] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev)=> ({
            ...prev,
            [name]:value
        }))
    }
   
    const submitForm =async (e) => {
        e.preventDefault();
        const response = await fetch(` http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
        const users = await response.json();
        if (users.length > 0) {
            setMessage("Login Sucessfully");
        } else {
            setMessage("Email/Password Incorrect");
        }
        // console.log(users);
    }



    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className='form-label'>Email</label>
                    <input type="text" name='email' className='form-control' onChange={handleChange} />
                </div>
            </form>
            <form>
                <div className="mb-3">
                    <label className='form-label'>Password</label>
                    <input type="password" name='password' className='form-control'  onChange={handleChange} />
                </div>
            </form>
            {message}
            <button className='btn btn-primary' onClick={submitForm}>Login</button>
        </div>
    );
}

export default Login1;