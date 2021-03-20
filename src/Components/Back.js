import React from 'react';
import { Link } from 'react-router-dom';
import "./Back.css";

export default function Back() {
   
    return (
        <div className="backs">
        <Link to="/">
        <button class="back" >Home</button>
        </Link>
        
        </div>
    )
}
