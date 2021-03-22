import React from 'react';
import "./About.css";
import Slider from "./Slider"
export default function About() {
    return (
        
        <div className="home">
        <div className="home_container">
        <div>
        <h1 className="our">Our services</h1>
        </div>
         
            <div className="home_row">
                <Slider title="Front end Development" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNz6cftEUBaUTdvwtDFBgTOGVmq-S_DaFghQ&usqp=CAU" rating={5} />

                <Slider title="Back End Development" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNz6cftEUBaUTdvwtDFBgTOGVmq-S_DaFghQ&usqp=CAU" rating={4} />
             

                <Slider title="Mobile Development" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeKLAdxWfPDJgaielcr2PoDWOlMw8YiusHQ&usqp=CAU" rating={4} />
               
            </div>
            <div className="home_row">
            <Slider title="Online Tutoring" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJYTayiBArPcWHxAaQQscvfnp-yRe23wWEA&usqp=CAU" rating={4} />
            <Slider title="Game Development" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn1uzeA8VMNX-df-E6j1nRsBYcOtCdVTZspA&usqp=CAU" rating={4} />
            <Slider title="Game Development" img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn1uzeA8VMNX-df-E6j1nRsBYcOtCdVTZspA&usqp=CAU' rating={4} />
            </div>
            <div className="home_row">
            <Slider title="Graphic Designing" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8fmSsiTe2Wa8ls2VNgGWg4AZSnBqmMZplg&usqp=CAU" rating={4} />
            <Slider title="Graphic Designing" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8UiSsM6bAYf7UamwKoII9Z3omQjq5IBN_sQ&usqp=CAU" rating={4} />
            <Slider title="Graphic Designing" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8UiSsM6bAYf7UamwKoII9Z3omQjq5IBN_sQ&usqp=CAU" rating={4} />
               
            </div>
        </div>
    </div>

        
        
          
    )
}
