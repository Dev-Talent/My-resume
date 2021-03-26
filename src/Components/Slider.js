import React from 'react';
import "./Slider.css";
import { Link } from 'react-router-dom';
export default function Slider({title, img, rating}) {
    return (

        <div className="product">
        <Link style={{ textDecoration: 'none' }} to="/services">
        <div className="product_info">
       
            <p className="title">{title}</p>
            <div className="product_rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
                <p>⭐</p>
            ))}
                
            </div>
            </div>
            <div>
           
        <img src={img} alt=""></img> 
        
        </div>
          <div>
          
         {/*  <button className="btn2">Projects</button>*/}
           
          </div>
          </Link>
        </div>
        
    )
}
