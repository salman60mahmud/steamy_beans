import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../Components/firebaseconfig';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const BeansContext = createContext(null);
const Context = ({ children }) => {
    const navigate = useNavigate();
    const [newUser, setUser] = useState(null);

    useEffect(() => {
        const observer = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                setUser(user);
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
        return () => observer();
    }, [])

    const handleRegisterWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const processSignOut = () => {
        return signOut(auth).then(() => {
            setUser(null);
            navigate('/')

            toast.success('SignOut Successful!');
        }).catch((error) => {
            toast.error(error.message);
        });
    }

    const processLogin =(email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setUser(user);
          navigate('/dashboard')
          toast.success("Login Successful!")
        })
        .catch((error) => {
          toast.error(error.message)
        });
      
    }
    const data = {
        handleRegisterWithEmail,
        newUser,
        processSignOut,
        processLogin 
    }
    return (
        <BeansContext.Provider value={data}>
            {children}
        </BeansContext.Provider>

    );
};

export default Context;