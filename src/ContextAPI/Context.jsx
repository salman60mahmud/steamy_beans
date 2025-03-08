import { createContext } from 'react';

export const BeansContext = createContext(null);

const Context = ({children}) => {
    const data = {
        quality: "good"
    }
    return (
        <BeansContext.Provider value={data}>
            {children}
        </BeansContext.Provider>

    );
};

export default Context;