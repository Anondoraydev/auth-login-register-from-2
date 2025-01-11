import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from '../firebase/firebase.config'
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { user, createUser, singinUser };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}