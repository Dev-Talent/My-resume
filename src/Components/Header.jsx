import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


export default function Header() {
    
    return (
        <div className="header">
        <div className='logo'>
            <h1>DevTalent</h1>
        </div>
           <ul className='link'>

<Link to="/">
<li className='links'><a href='#'></a>Home</li>
</Link>

<Link to="/services">
<li className='links'><a href='#'></a>Services</li>
</Link>

<Link to="/contact">
<li className='links'><a href='#'></a>ContactUs</li>
</Link>
    
           </ul>
        </div>
    )
}
