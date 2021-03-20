import React from 'react';
import Back from './Back';
import ContactList from './ContactList';
import Whatsapp from './Whatsapp';



export default function ContactUs() {
    return (
        <div>
        <ContactList />
           <Whatsapp />
           <Back />
        </div>
    )
}
