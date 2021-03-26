import React from 'react';
import Header from './Components/Header.jsx';
//import Footer from './Components/Footer';
import {Switch, Route } from 'react-router-dom';
import Home from "./Components/Home.js";
import Services from "./Components/Services.js";
import ContactUs from "./Components/ContactUs.js";
import Abou from "./Components/Abou";

//import Carousel from "./Carousel";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
 
    <React.Fragment>


<Header />

    <Switch>
    
      <Route exact path='/' component={Home} />
      <Route  path='/contact' component={ContactUs} />
      <Route  path='/services' component={Services} />    
      <Route  path='/about' component={Abou} />    
    </Switch>
   
    </React.Fragment>
  
  )
}

export default App;
