import { NavLink } from "react-router";
const Login = () => {
    return (
        <>
            <div className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box mx-auto mt-36">
                <form>
                    <legend className="fieldset-legend text-3xl">Login</legend>

                    <label className="fieldset-label text-xl text-black">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="fieldset-label text-xl text-black">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p className="font-semibold mt-6">Forgot Password?</p>
                <p className="font-semibold">Don't Have An Account? <NavLink to='/SignUp' className="ml-5 btn text-black btn-soft btn-success">Register</NavLink></p>
            </div></>
    );
};

export default Login;