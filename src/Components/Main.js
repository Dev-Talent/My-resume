import React from 'react'
//import img from "../img/image.jpg";
import Footer from "./Footer";
import Carool from "./Carool";
import About from "./About";
import './Main.css';
import Whatsapp from './Whatsapp';
import Projects from "./Projects";


export default function main() {
    return (
        <div className="main">
        <div className="carool">
             <Carool /> 
        </div>
        
       <About />
      <Projects />
       <Whatsapp />
      
           <div className="footer">
           <Footer />
           
        </div>
        </div>
    )
}
