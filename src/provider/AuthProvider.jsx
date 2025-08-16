import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-toastify";


const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // user state
    const [user, setUser] = useState(null);
    // loading state
    const [loading, setLoading] = useState(false);
    // provider list
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // signin with google
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(res => {
            setUser(res.user)
            toast.success("Login Successfully ....!!")
        }).catch((err) => toast.error(err.message))
    };

    // sign in with github
    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then((res) => {
            setUser(res.user)
            toast.success("Login Successfully ....!!")
        }).catch(err => toast.error(err.message))
    };
    
    // register user using email and pass
    const userRegister = (email, pass) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, pass)
        .then((res) => {
            setUser(res.user);
            setLoading(false);
            toast.success("Register Successfully ....!!")
        }).catch((err) => toast.error(err.message))
    };

    // user sign in with gmail and pass
    const userLogin = (email, pass) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, pass)
        .then((res) => {
            setUser(res.user)
            setLoading(false)
            toast.success("Login Successfully ....!!")
        }).catch(err => toast.error(err.message))
    }

    // signout function
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser(null)
        }).catch(err => toast.error(err.message))
    };

    // context value
    const authInfo = {
        signInWithGoogle,
        signInWithGithub,
        userRegister,
        userLogin,
        logOut,
        loading,
        user
    };

    // user login observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    });
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };