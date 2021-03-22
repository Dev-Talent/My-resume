import React from 'react';
//import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./carousel.css";
import taleName from "./data"

export default function Carool() {

const {heading,contact,para} = taleName;
  
  


    return(
       <div>
       
  
    <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" alt="Snow" className="imge" />

  <h1 className="heading">{heading}</h1>
  <p className="subheading">{para}</p>
  <Link to="/contact">
  <button className="btn">{contact}</button>
  </Link>
  
  
  
</div>
 



      
    )
}