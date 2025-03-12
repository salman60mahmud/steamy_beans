import React, { useContext, useEffect, useState } from 'react';
import { BeansContext } from '../ContextAPI/Context';

const ManageUser = () => {
    const { url } = useContext(BeansContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${url}/users`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, [url]);

    return (
        <div>
            <h1 className='text-3xl text-center'>Manage User</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.role}</li>
                ))}
            </ul>
        </div>
    );
};

export default ManageUser; 