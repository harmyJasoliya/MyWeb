import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';
import FeatureOpi from '../img/feature-opi2.webp' 
const Opispring = () =>{
    return(
        <div className="w-1140">
        <div className="midimg flex">
          <Cards img="//www.beyondpolish.com/cdn/shop/files/feature-opi2.jpg?v=1706607912" head="OPI Spring" pera="Your Way Collection" btn="SHOP NOW" />
          <Cards img="//www.beyondpolish.com/cdn/shop/files/Shellac_eefc2370-155e-4f8f-bd14-985c67691b75.png?v=1710786455" head="Live Event Replay" pera="Get DIY Salon Nails With CND Experts" btn="JOIN US"/>
        </div>
        <div className="smlimg flex">
          <Cards img="https://www.beyondpolish.com/cdn/shop/files/mhs---cnd-spring.jpg?v=1710793046" head="CND" pera="Across Mani Verse"/>
          <Cards img="https://www.beyondpolish.com/cdn/shop/files/Gelish_Spring.png?v=1709324590" head="Gelish Spring" pera="Lace is More"/>
          <Cards img="https://www.beyondpolish.com/cdn/shop/files/I_Scream_Nails_Fast_Lane.png?v=1710967459" head="I Scream Nail" pera="Fast Lane"/>
           
        </div>
      </div> 
    );
}
export default Opispring;
