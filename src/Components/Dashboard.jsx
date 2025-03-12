import { useContext, useEffect, useState } from "react";
import { BeansContext } from "../ContextAPI/Context";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    const { newUser, url } = useContext(BeansContext);
    const [user, setUser] = useState(null);
    const email = newUser?.email;
    console.log(email);

    useEffect(() => {
        fetch(`${url}/loginuser/${email}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, [newUser, url, email])

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-5">
                    {/* Page content here */}
                    <h1>Dashboard</h1>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">

                        {/* Sidebar content here */}
                        <Link to='/dashboard/profile'>Profile</Link>

                        {user?.role === 'admin' && <Link to='/dashboard/manageuser'>Manage User</Link>}
                        {(user?.role === 'admin' || user?.role === 'moderator') && <Link to='/dashboard/manageorder'>Manage Order</Link>}
                        {user?.role === 'customer' && <Link to='/dashboard/orders'>Orders</Link>}


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;