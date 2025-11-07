import React from 'react'

const Fruits = () => {
  const fruitslist =["apple","orange","grapes"];

  return (
    <div>
      <ul>
        {fruitslist.map((fruits,index)=>(
          <li key={index}>{fruits}</li>
        )
        )}
      </ul>
    </div>
  )
}

export default Fruits

