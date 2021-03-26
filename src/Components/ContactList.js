import React from 'react';
import "./ContactList.css";
import "./plus.css";
//import {useState} from "react";


export default function ContactList() {

  /*const handleSubmit= (e) => {
    e.preventDefault();
    // ???
    console.log(e.target.firstname.value)
   console.log(e.target.lastname.value)
   console.log(e.target.email.value)
    console.log(e.target.subject.value)
    console.log(e.target.country.value)
    e.target.reset();
  */
    const handleSubmit = (e) => {
      e.preventDefault();
      const bookingData = {
        name: e.target.lastname.value,
        email: e.target.email.value,
       subject: e.target.subject.value,
        country: e.target.country.value,
      };
      console.log(bookingData);
    }
  



  return (
    <div>
   
  
    <div className="divide">
     
    <div className="container">
  <form onSubmit={handleSubmit} action="">
    <div className="row">
      <div className="col-25">
        <label for="fname">First Name</label>
      </div>
      <div className="col-75">
        <input type="text" name="firstname" placeholder="Your name.." />
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

    <div class="row">
      <div class="col-25">
        <label for="lname">Email</label>
      </div>
      <div class="col-75">
        <input type="text"  name="email" placeholder="Your email .." />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="country">Country</label>
      </div>
      <div className="col-75">
        <select  name="country">
          <option value="south Africa">South Africa</option>
          <option value="Zimbabwe">Zimbabwe</option>
          <option value="Australia">Australia</option>
          <option value="Canada">Canada</option>
          <option value="Usa">USA</option>
          <option value="United Kingdom">United Kindgom</option>
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
<img className="mage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc2vJc1XFW5Pt0BQazZAl0hmA9-ak7MCjZ8A&usqp=CAU" alt="img" />
</div>
 </div>

</div>

  )
}
