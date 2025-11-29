 import axios from 'axios';
import React, { useState } from 'react'

const AxiosPut = () => {
    const [userId, setUserId] = useState('');
    const [newName,setNewName] = useState('');
    const [newEmail, setNewEmail]=useState('');
    const [message, SetMessage]=useState('');

    const handleUpdate = async (e) =>{
         e.preventDefault();

         const updateData ={
            name:newName,
            email:newEmail,
         }
         try{
           const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, updateData);
           console.log(response.data);
           SetMessage('updated data successfully');
           
         }catch(error){
            console.error(error);
            SetMessage('error updating');
         }
    }

  return (
    <div>
      <h2>Update user</h2>
      <form onSubmit={handleUpdate}>
        <input type='text'
        placeholder='userId to update'
        value={userId}
        onChange={(e) => setUserId(e.target.value)}/><br/> <br/>

        <input type='text'
        placeholder='New name'
        value={newName}
        onChange={(e) => setNewName(e.target.value)}/><br/> <br/>

        
        <input type='email'
        placeholder='New Email'
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}/><br/> <br/>

        



        <button type='submit'>update</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

export default AxiosPut