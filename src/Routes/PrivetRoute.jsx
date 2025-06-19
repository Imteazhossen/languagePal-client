import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {

    const {user} = use(AuthContext);
    const location = useLocation();

    if(!user){
        return <Navigate to='/login' state={location.pathname}></Navigate> ;
    }
    return children;
};

export default PrivetRoute;