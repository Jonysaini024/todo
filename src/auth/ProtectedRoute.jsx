import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState();
    useEffect(() => {
        const localUser = localStorage.getItem('todoUser');
        const userObj = JSON.parse(localUser);
        if (!userObj) {
            setIsLoggedIn(false);
            Navigate("/")
        } else {
            setIsLoggedIn(true);
        }
    },[])


    return (
        <div>
            <>
                {isLoggedIn ? children : null}
             </>
        </div>
    );
}

export default ProtectedRoute;