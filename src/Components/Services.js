import React from 'react';
import Back from './Back';
import Render from "./Render";
import Whatsapp from './Whatsapp';


export default function Services() {
    return (
        <div className="services">
        <Render />
        <Whatsapp/>
        <Back />
        </div>
    )
}
