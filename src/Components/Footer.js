import React from 'react';
import "./Footer.css";

export default function Footer() {
    const year = new Date();
    const time = year.getFullYear();
    return (
        <div className="foo">
          
           <div class="footer">
    <h3 className="made">Made with 💖😘 by Dev Talent</h3>
    <p className="all"> © All rights reserved {time}</p>
  </div>
  <div className="terms">
<p>Terms of use</p>
<p>Privacy and Policy</p>
  </div>
  <div className="social">
 
      <p>facebook</p>
      <p>twitter</p>
      <p>instagram</p>
  </div>
        </div>
    )
}
