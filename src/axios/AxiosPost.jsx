import axios from 'axios';
import React, { useState } from 'react'

const AxiosPost = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, SetMessage] = useState('');


    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!name || !email ){
            SetMessage('both fields are required ');
            return;
        }
        const userData = {name, email};

        try{
          const res = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
          console.log(res.data);
          SetMessage('user submitted successfully !');
          
        }catch(error){
            console.error(error);
            SetMessage("error submitting user")
            
        }

    }
  return (
    <div>
      <h2>Submit user</h2>
      <form onSubmit={handleSubmit}>
        <input type='text'
        placeholder='enter name'
        value={name}
        onChange={(e) => setName(e.target.value)}/><br/> <br/>

        <input type='email'
        placeholder='enter email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}/><br/> <br/>

        <button type='submit'>submit</button>


      </form>
      <p>{message}</p>
    </div>
  )
}

export default AxiosPost
