import React from 'react'

const BasicFc = () => {

    const person ={
      name : 'athulya',
      age: 20,
      isStudents:'yes',
        
    }
    
  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>is students : {person.isStudents}</h3>
    </div>
  )
}

export default BasicFc
