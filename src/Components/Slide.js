import React from 'react';
import "./Slider.css";
import {Link} from "react-router-dom";

export default function Slider({title, img, rating}) {
    return (
        <div className="product">
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
           <img src={img} alt=""></img> 
           <Link to="/services">
           
           </Link>
           
        </div>
    )
}