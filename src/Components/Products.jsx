import { useContext } from "react";
import { BeansContext } from "../ContextAPI/Context";


const Products = () => {
    const {quality} = useContext(BeansContext)

    return (
        <div>
            {quality}
        </div>
    );
};

export default Products;