import React from 'react';
import "./Abou.css";
import Whatsapp from "./Whatsapp";
import Back from "./Back";
import logo from '../img/image.jpg';

export default function Abou() {
    return (
        <div className="cont">
            <div className="container">
<div>
    <img className="img" src={logo} />
</div>
           </div>
            <div className="text">
            
            <h1>About Talent</h1>
            <br></br>
<br></br>
           
<h3>I am a of passionate developer who specialize</h3>
<br></br>
<h3> in building and developing Web Applications and </h3>
<br></br>
<h3> Mobile Applications according to client's business needs </h3>
<br></br>
<h3> I build custom software based on user requirements </h3>
<br></br>
<h3> and  I am is also experienced in new Technology, </h3>
<br></br>
<h3>  blogging and tutoring. I also offer online services </h3>
<br></br>
<h3> Contact me on any of my platforms and i will assit you</h3>
<br></br>

<h3>Below is a list of development technologies skills I offer</h3>
<br></br>

<ul className="none">
<li>Front end Web Development( HTML CSS JavaScript, Wordpress )</li>
<br></br>
<li>Backend Web Development( Node, Express,Mangoose )</li>
<br></br>
<li>Mobile Development( Android, IOS)</li>
<br></br>

<li>Frameworks (Angular , ReactNative , React.js )</li>
<br></br>

<li>Database ( MongoDB )</li>
<br></br>

    </ul>        
            </div>
            <Whatsapp/>
        <Back />
        </div>
    )
}
