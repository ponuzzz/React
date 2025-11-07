import React from 'react'

const CallingFunction = () => {
    function Greeting(name){
        return`hello, ${name}`
    }

    function GetGreeting(){
        return <h2>{Greeting("minnu")}</h2>
    }
  return (
    <div>
      <GetGreeting/>
    </div>
  )
}

export default CallingFunction
