import { useContext, useState } from "react";
import { NavLink } from "react-router";
import { BeansContext } from "../ContextAPI/Context";

const SignUp = () => {
    const { handleRegisterWithEmail } = useContext(BeansContext)
    const [error, setError] = useState("");
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleRegisterWithEmail(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                setError("");
            })
            .catch((error) => {
                setError(error.message)
            });
    }
    return (
        <div>
            <div className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box mx-auto mt-36">
                <form onSubmit={handleRegister}>
                    <legend className="fieldset-legend text-3xl">SignUp</legend>
                    <label className="fieldset-label text-xl text-black">Name</label>
                    <input type="text" className="input" placeholder="Name" name='name' />
                    <label className="fieldset-label text-xl text-black">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email' />
                    <label className="fieldset-label text-xl text-black">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password' />

                    <button className="btn btn-neutral mt-4">Submit</button>
                </form>

                {error ? <p className="text-red-700">{error}</p> : <></>}

                <p className="font-semibold">Already Have An Account? <NavLink to='/Login' className="ml-5 btn text-black btn-soft btn-info">Login</NavLink></p>
            </div>
        </div>
    );
};

export default SignUp;