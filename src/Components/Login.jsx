import { NavLink } from "react-router-dom";
import './Login.css'
import { useContext } from "react";
import { BeansContext } from "../ContextAPI/Context";
const Login = () => {
    const { processLogin } = useContext(BeansContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        processLogin(email, password);
    }
    return (
        <>  <div className="login-sign-background">
            <div className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box mx-auto mt-36">
                <form onSubmit={handleLogin}>
                    <legend className="fieldset-legend text-3xl">Login</legend>

                    <label className="fieldset-label text-xl text-black">Email</label>
                    <input type="email" className="input" placeholder="Email" name="email" aria-label="Enter your email address" required />

                    <label className="fieldset-label text-xl text-black">Password</label>
                    <input type="password" className="input" placeholder="Password" name="password" aria-describedby="password-help" required />
                    <p id="password-help" className="text-sm text-gray-500" />
                    Password must be at least 8 characters long.
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>

                <p className="font-semibold mt-6 text-size">Forgot Password?</p>
                <p className="font-semibold text-size">Don't Have An Account? <NavLink to='/SignUp' className="ml-5 btn text-black btn-soft btn-success">Register</NavLink></p>
            </div></div></>
    );
};

export default Login;