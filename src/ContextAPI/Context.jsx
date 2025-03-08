import { createContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../Components/firebaseconfig';


export const BeansContext = createContext(null);
const Context = ({ children }) => {


    const handleRegisterWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const data = {
        handleRegisterWithEmail
    }
    return (
        <BeansContext.Provider value={data}>
            {children}
        </BeansContext.Provider>

    );
};

export default Context;