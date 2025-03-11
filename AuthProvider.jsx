import { useContext } from "react";
import { BeansContext } from "./src/ContextAPI/Context";
import { useNavigate } from "react-router";

const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const { newuser } = useContext(BeansContext);
    if (!newuser) {
        navigate('/')
    }
    return children;

};

export default AuthProvider;