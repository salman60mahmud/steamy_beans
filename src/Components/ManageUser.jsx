import React, { useContext, useEffect, useState } from 'react';
import { BeansContext } from '../ContextAPI/Context';

const ManageUser = () => {
    const { url } = useContext(BeansContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${url}/alluser`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, [url]);

    return (
        <div>
            <h1 className='text-3xl mb-10 mt-8 text-center font-bold'>Users List</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users?.map(user => (

                                <tr key={user._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user?.name}</div>
                                                <div className="text-sm opacity-50">Bangladesh</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
 {user?.email}
                                    </td>
                                    <td>{user?.role}</td>
                                    <th>
                                        <button className="btn">Promote</button>
                                    </th>
                                </tr>
                        ))}
                        {/* row 1 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser; 