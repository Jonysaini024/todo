import React, { useContext, useState } from 'react';
import AuthContext from '../auth/AuthContext';

function EditProfile(props) {
    const{user}=useContext(AuthContext)
    

    const handleChange = (e) => { 
        
    }
    return (
        <div>
            <div className='container py-5'>
            <div className='bg-primary p-4'>
                <div className="container">
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="mb-6">
                            <label className='form-label'>Name</label>
                            <input type="text" className='form-control' name='name' value={user?.name}  onChange={handleChange}  />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>E.mail</label>
                            <input type="email" className='form-control' name='email' value={user?.email}  onChange={handleChange}  />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Profile image</label>
                            <input type="file" className='form-control' name='image'  onChange={handleChange}  />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>phn num</label>
                            <input type="number" className='form-control' name='number' onChange={handleChange}   />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>DOB</label>
                            <input type="datetime-local" className='form-control' name='date'   onChange={handleChange}  />
                                    </div>
                                    <button className='btn btn-warning'>Edit</button>
                                </form>
                            </div>
                            </div>
                    </div>
                    </div>
                </div>
        </div>
    );
}

export default EditProfile;