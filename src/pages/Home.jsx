import React from 'react';
import illustration from '../assets/illustration.png'
import { NavLink, Outlet } from 'react-router-dom';



function Home(props) {
    return (
        <div className='container-fluid h-100'>
            <div className='row h-100'>
                <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center h-100 bg-primary"><h1 className='title'>An App to
                    <br />Make Your Life <br /> <span className='display-1'>Easy</span></h1>
                <img className='img-fluid' src={illustration} alt="" /></div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center h-100">
                    <div className="card w-50 ">
                        <div className="card-header d-flex">
                            <NavLink to='/Singup' className='w-50 py-2 text-center'>Singup</NavLink>
                            <NavLink  to='/Register' className='w-50 py-2 text-center'>Register</NavLink>
                        </div>
                        <div className="card-body">
                           <Outlet />
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Home;