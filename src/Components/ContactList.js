import React from 'react';
import "./ContactList.css";
import "./plus.css";
//import {useState} from "react";


export default function ContactList() {
  return (
    <div>
   
  
    <div className="divide">
     
    <div className="container">
  <form action="">
    <div className="row">
      <div className="col-25">
        <label for="fname">First Name</label>
      </div>
      <div className="col-75">
        <input type="text" yname="firstname" placeholder="Your name.." />
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text"  name="lastname" placeholder="Your last name.." />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="country">Country</label>
      </div>
      <div className="col-75">
        <select  name="country">
          <option value="australia">South Africa</option>
          <option value="australia">Zimbabwe</option>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="usa">United Kindgom</option>
        </select>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="subject">Subject</label>
      </div>
      <div className="col-75">
        <textarea className="textarea" name="subject" placeholder="Write something.." />
      </div>
    </div>
    <div className="rower">
    <button className="submited" type='submit'>submit</button>
      
    </div>
  </form>
 
 

</div>
<div className="bner">
<img className="mage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc2vJc1XFW5Pt0BQazZAl0hmA9-ak7MCjZ8A&usqp=CAU"/>
</div>
 </div>

</div>

  )
}
