
//  import './App.css'
//  import Fruits from './embedding-expression/Fruits';

// // //import CallingFunction from './embedding-expression/callingFunction'
// // //import Basic from './embedding-expression/basic'
// // //import Conditional from './embedding-expression/Conditional'
// // //import Sum from './embedding-expression/Sum'
// // //import Conditional from './embedding-expression/Conditional'

//  function App() {
//  return (
//   <>

//    <Fruits/>
//    {/* ---embedding - expression */}
//    {/* <Basic /> */}
//    {/* <Sum/> */}
//    {/* <Conditional/> */}
//    {/* <CallingFunction/> */}
//   </>
//   )
//  }

//  export default App

//---class- components----
 import React, { Component } from 'react'
 //import State from './class-components/State'
 import Props from './class-components/Props'
 //import Mount from './class-components/life-cycle-methods/Mount'
 //import BasicClass from './class-components/BasicClass'


 export default class App extends Component {

   render() {
     return (
       <>
          {/* <Mount/> */}
        {/* <State/>  */}
          {/* <BasicClass/> */}
         <Props name="adithya" passion="painting" />
          <Props name="Anandu" passion="reading" />
      </>
     )
   }
 }




