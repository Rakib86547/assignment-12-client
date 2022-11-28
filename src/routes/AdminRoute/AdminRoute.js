import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin/useAdmin';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, adminLoading] = useAdmin(user?.email);

    if(loading || adminLoading ) {
        return <Loading></Loading>
    };
    if(user && isAdmin) {
        return children
    };
    <Navigate to='/login' state={{from: location}} replace />
};

export default AdminRoute;