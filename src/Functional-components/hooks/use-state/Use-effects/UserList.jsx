import React, { useEffect, useState } from 'react'
import { FaRegCircleUser } from "react-icons/fa6";

const UserList = () => {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, []);
    return (
        <div>
            <h2><FaRegCircleUser />user list</h2>
            <ul>
                {user.map(usr => (
                    <li key={usr.id}>{usr.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList
