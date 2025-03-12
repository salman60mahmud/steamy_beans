import { useContext } from "react";
import { BeansContext } from "../ContextAPI/Context";


const ProtectedRoute = ({ children }) => {
    const { newUser } = useContext(BeansContext);
    return newUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;