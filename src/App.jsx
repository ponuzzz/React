
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Crud from './local-Storage/Crud';
//import Billing from './Form-validation/Billing';
//import NormalForm from './Form-validation/NormalForm';
//import HomeP from './project/HomeP';
//import Navbar from './project/Navbar';
//import Hero from './project/Hero/Hero';
//import About from './project/About/About';
//import Services from './project/Services/Services';
//import Contact from './project/Contact/Contact';
//import Contact from './project/Contact/Contact';
//import Portfolio from './project/Protofolio/Portfolio';
//import NormalForm from './Form-validation/NormalForm';
//import BasicForm from './form/BasicForm';
//import LoginPage from './Design/Loginpage';
//import RealWorld from './React-keys/RealWorld';
//import Navbar from '../Work-1/Navbar';
//import Home from '../Work-1/Home';
//import About from '../Work-1/About';
//import Contact from '../Work-1/Contact';

//import Navbar from './nested-routing/Navbar';
//import ProductPage from './example/ProductPage';
//import ProductDetails from './example/ProductDetails';
//import Products from './dynamic-routing/Products'
//import ProductDetails from './dynamic-routing/ProductDetails'
//import Home from './React-Router-dom/Home'
//import About from './React-Router-dom/About'
//import Footer from './React-Router-dom/Footer'
//import Profile from './Functional-components/hooks/user-List/Profile'
//import { UserProvider } from './Functional-components/hooks/user-List/UserContext'
//import ProfileForm from './Functional-components/hooks/ObjectState'
//import ToggleButton from './Functional-components/hooks/use-state/ToggleState'
//import UseEff from './Functional-components/hooks/use-state/Use-effects/UseEff'
//import Home from './Functional-components/hooks/use-state/use-context/Teme-setting/Home'
//import { ThemeProvider } from './Functional-components/hooks/use-state/use-context/Teme-setting/ThemeContext'
//import UserList from './Functional-components/hooks/use-state/Use-effects/UserList'
//import Counter from './Functional-components/hooks/use-state/Counter'
//import Decrement from './Functional-components/Decrement'
//import Props_Fc from './Functional-components/Props_Fc'
//import State from './Functional-components/State'
//import BasicFc from './Functional-components/BasicFc'
//   import Fruits from './embedding-expression/Fruits';
//  //import CallingFunction from './embedding-expression/callingFunction'
//  //import Basic from './embedding-expression/basic'
// //import Conditional from './embedding-expression/Conditional'
// //import Sum from './embedding-expression/Sum'
//  //import Conditional from './embedding-expression/Conditional'
//import Navbar from './nested-routing/Navbar';
//import About from './nested-routing/pages/About';
//import Services from './nested-routing/pages/Services';
//import Home from './nested-routing/pages/Home';
//import WebDev from './nested-routing/pages/services/WebDev';
//import AppDev from './nested-routing/pages/services/AppDev';
//import Design from './nested-routing/pages/services/Design';


function App() {
  return (
    <>

      {/* <Fruits/> */}
      {/* ---embedding - expression */}
      {/* <Basic /> */}
      {/* <Sum/> */}
      {/* <Conditional/> */}
      {/* <CallingFunction/> */}

      {/* ------functional ----components  */}

      {/* <BasicFc/> */}
      {/* <State/>  */}
      {/* <Props_Fc/> */}
      {/* <Decrement/>  */}
      {/* <Counter/> */}
      {/* <UseEff/> */}
      {/* <UserList/> */}
      {/* <TextInput/> */}
      {/* <ToggleButton/> */}
      {/* <ProfileForm/>  */}

      {/* usecontents */}
      {/* 1. theme  setting  */}
      {/* <ThemeProvider> */}
      {/* <Home/> */}
      {/* </ThemeProvider> */}

      {/* 2.profile name change */}
      {/* <UserProvider> */}
      {/* <Profile /> */}
      {/* </UserProvider> */}

      {/* 
    {/* ----react- router-dom------------ */}
      {/* <div> */}
      {/* <nav> */}
      {/* <Link to='/'> home</Link> | */}
      {/* <Link to='/about'>About</Link> */}

      {/* <Routes> */}
      {/* <Route path='/'element={<Home/>}/>  */}
      {/* <Route path='/about' elements={<About/>}/> */}
      {/* <Route path='/footer' elements={<Footer/>}/> */}
      {/* </Routes> */}
      {/* </nav> */}

      {/* </div>  */}

      {/* dynamic --- routing */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Products />} /> */}
      {/* <Route path="/products" element={<Products />} /> */}
      {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
      {/* </Routes> */}
      {/* dynamic routing example */}
      {/* <Routes> */}
      {/* <Route path='/' element={<ProductPage/>}/> */}
      {/* <Route path='/products/:id' element={<ProductDetails/>}/> */}
      {/* </Routes> */}

      {/* nested */}
      {/* <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        {/* nested route starts here */}
        {/* <Route path='/service' element={<Services />}>
        <Route path='web-dev' element={<WebDev/>}/>
        <Route path='app-dev' element={<AppDev/>} />
        <Route path='design' element={<Design/>}/>
        </Route>
      </Routes> */} 


      {/* <Navbar/> */}
      {/* <Routes> */}
      {/* <Route path='/' element={<Home/>}/> */}
      {/* <Route path='/about' element={<About/>}/> */}

      {/* <Route path='/contact' element={<Contact/>}> */}

      {/* </Route> */}
      {/* </Routes> */}

      {/* --ract keys */}
      {/* <RealWorld/> */}
      {/* <LoginPage/> */}

      {/* form validation */}
       {/* <BasicForm/>  */}
        
        {/* <NormalForm/> */}


     {/* project */}
     {/* <Navbar/> */}
     {/* <Hero/> */}
     {/* <About/> */}
     {/* <Services/> */}
     {/* <Contact/>  */}
      {/* <Billing/>  */}

     {/*  local--- storage */}
     <Crud/>


    </>
  );
}

export default App



//---class- components----
//   import React, { Component } from 'react'
// import UnMount from './class-components/life-cycle-methods/UnMount'
// //import Updating from './class-components/life-cycle-methods/Updating'
// //  //import State from './class-components/State'
// //  import Props from './class-components/Props'
// //  //import Mount from './class-components/life-cycle-methods/Mount'
// //  //import BasicClass from './class-components/BasicClass'

// export default class App extends Component {

//     render() {
//      return (
//         <>
//         {/* <Updating/> */}
//            {/* <Mount/> */}
//          {/* <State/>  */}
//           {/* <BasicClass/> */}
// {/* <Props name="adithya." passion="painting" /> */}
// {/*            <Props name="Anandu" passion="reading" /> */}
//            <UnMount/>
//        </>
//       )
//     }
//   }




