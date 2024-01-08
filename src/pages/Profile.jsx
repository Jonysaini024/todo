import React, { useContext } from 'react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import AuthContext from '../auth/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
// import illustration from '../assets/illustration.png'

function Profile(props) {
    const [image, setImage] = useState(null);
    const{user}=useContext(AuthContext)
     const navigate = useNavigate()
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleChange = async (e) => {
        let file = e.target.files[0];
        let baseImage = await convertBase64(file);
        setImage(baseImage);
    }
    const edit = () => {
        navigate('/editprofile')
    }
    
    return (
        <div className='container py-5'>
            <div className='bg-primary p-4'>
                <div className="container">
                <div>
            <label htmlFor="upload">Upload</label>
            <input type="file" onChange={handleChange} />
              <img  src={image} alt="" width={200} height={200} className='rounded-circle' />
           
        </div>
                    <div className="col-sm-8 offset-sm-8">
                        <h2 className='text-white'>{user?.name}</h2>
                    </div>    
                    <div className="col-sm-8 offset-sm-8">
                        <p className='text-white'>{user?.email}</p>
                    </div>
                    <div className="col-sm-8 offset-sm-8">
                        <p className='text-white'>9996121160</p>
                    </div>
                    <div className="col-sm-8 offset-sm-8">
                        <p className='text-white'>10-03-2002</p>
                    </div>
                    <div className="col-sm-8 offset-sm-8">
                    <button className='btn btn-info ms-auto'onClick={edit}>Edit</button>
                    </div>
                </div>
            </div>
            </div>
    );
}

export default Profile;