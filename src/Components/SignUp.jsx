import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { BeansContext } from "../ContextAPI/Context";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "./firebaseconfig";
import './Login.css';

const SignUp = () => {
    const navigate = useNavigate();
    const { handleRegisterWithEmail } = useContext(BeansContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!name || !email || !password) {
            toast.error('Please fill in all fields');
            return;
        }

        const role = "customer";
        const user = { name, email, role };

        handleRegisterWithEmail(email, password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        fetch('http://localhost:5000/user', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(user)
                        })
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error('Network response was not ok');
                                }
                                return response.json();
                            })
                            .then(data => {
                                if (data.insertedId) {
                                    navigate('/dashboard');
                                    toast.success('Registration Successful!');
                                } else {
                                    toast.error('Registration Failed');
                                }
                            })
                            .catch((error) => {
                                toast.error('Error During Registration:' + error.message);
                            });
                    })
                    .catch((error) => {
                        toast.error(`Profile Update Failed: ${error.message}`)
                    });
            })
            .catch((error) => {
                toast.error("Account Already Existed!");
            });
    };

    return (
        <div className="login-sign-background">
            <div className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box mx-auto mt-36">
                <form onSubmit={handleRegister}>
                    <legend className="fieldset-legend text-3xl">SignUp</legend>
                    <label className="fieldset-label text-xl text-black">Name</label>
                    <input type="text" className="input" placeholder="Name" name='name' aria-label="Enter your full name" required />
                    <label className="fieldset-label text-xl text-black">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email' aria-label="Enter your email address" required />
                    <label className="fieldset-label text-xl text-black">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password' aria-describedby="password-help" required
                    />
                    <p id="password-help" className="text-sm text-gray-500" />
                    Password must be at least 8 characters long.
                    <button className="btn btn-neutral mt-4">Submit</button>
                </form>

                <p className="font-semibold text-size">Already Have An Account? <NavLink to='/Login' className="ml-5 btn text-black btn-soft btn-info">Login</NavLink></p>
            </div>
        </div>
    );
};

export default SignUp;