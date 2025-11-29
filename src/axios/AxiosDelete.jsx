
import axios from 'axios';
import React, { useState } from 'react'

const AxiosDelete = () => {
    const [userId, setUserId] = useState('');
    const [message, SetMessage] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
            console.log(response);
            SetMessage(` user Id ${userId} deleted successfully`)

        } catch (error) {
            console.error(error);
            SetMessage('failed deleting user');
        }
    }



return (
    <div>
        <h2>Delete user</h2>
        <form onSubmit={handleDelete}>
            <input type='text'
                placeholder='enter your  id'
                value={userId}
                onChange={(e) => setUserId(e.target.value)} /><br /> <br />

         <button type='submit'>Submit</button>
        </form>
        <p>{message}</p>
    </div>
)
}

export default AxiosDelete