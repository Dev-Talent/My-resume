import React from 'react';
import "./Slide.css"
//import {Link} from "react-router-dom";

export default function Slider({title, img, rating}) {
    return (
        <div className="produc">

        <div className="product_info">
            <p className="title">{title}</p>
            <div className="product_rating">
          
            </div>
        </div>
           <img src={img} alt=""></img> 
           
        </div>
       
    )
}