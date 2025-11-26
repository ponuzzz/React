import React from 'react'
import { useContext } from 'react'
import { IoPersonCircle } from "react-icons/io5";
import { UserContext } from './UserContext';


const Profile = () => {
    const { Users, setUsers } = useContext(UserContext);

    const changeName = () => {
        setUsers((prev) => ({ ...prev, name: "shilpa" }));
    }
    return (
        <div>
            <h2><IoPersonCircle /> Profile</h2>
            <p>Name:{Users.name} </p>
            <p>Age:{Users.age}</p>
            <button onClick={changeName}> change name</button>
        </div>
    )
}

export default Profile
