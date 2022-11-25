import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../context/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    
    if(loading) {
        return <Loading />
    }
    if(user) {
        return children
    }
    <Navigate to='/login' state={{from: location}} replace />
};

export default PrivetRoute;