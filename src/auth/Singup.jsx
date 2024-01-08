import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';


function Singup(props) {
        
    const {login, message, setMessage} = useContext(AuthContext);

    const [formData, setFormData] = useState();

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev)=> ({
            ...prev,
            [name]: value
        }))
    }
   
    const submitForm=(e)=>{
        e.preventDefault();
        login(formData);
    }

    useEffect(() => {
        setMessage("");
    },[])


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
            <button className='btn btn-primary' onClick={submitForm}>Singup</button>
        </div>
    );
}

export default Singup;