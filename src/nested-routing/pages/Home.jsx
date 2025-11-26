import React from 'react'
import { IoIosHome } from "react-icons/io";

const Home = () => {

  return (
    <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h2><IoIosHome /> welcome to home page</h2>
        <p>this is the home page of our websites.</p>
    </div>
  )
}

export default Home
