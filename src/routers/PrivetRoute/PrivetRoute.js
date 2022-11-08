import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <div className='mt-5 d-flex align-itmes-center justify-content-center'>
            <progress className="progress progress-error w-56 "></progress>
        </div>

    }

    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }

    return children
};

export default PrivetRoute;