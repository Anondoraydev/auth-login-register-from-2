import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
const PrivetRoutes = ({ children }) => {
    const { user, lodding } = useContext(AuthContext);
    if (lodding) {
        return <span className="loading loading-spinner text-error"></span>;
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>;
};

export default PrivetRoutes;

PrivetRoutes.propTypes = {
    children: PropTypes.node
}