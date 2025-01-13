import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from '../firebase/firebase.config'
export const AuthContext = createContext(null)

const googleProvite = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [lodding, setLodding] = useState(true);
    const createUser = (email, password) => {
        setLodding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singinUser = (email, password) => {
        setLodding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singInWithGoogle = () => {
        setLodding(true)
        return signInWithPopup(auth, googleProvite);
    }

    const logOut = () => {
        setLodding(true)
        return signOut(auth)

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLodding(false)
            console.log('ovegarving carrent user', currentUser);

        })

        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = { lodding, user, singInWithGoogle, createUser, singinUser, logOut };
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