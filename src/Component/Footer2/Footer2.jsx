import React from "react";
const Footer2 = (props) =>{
    return(
            <div className="foot2card ">
                <div className="foot2img">{props.img}</div>
                <h6>{props.head}</h6>
                <p>{props.pera}</p>
            </div>
           
        
    );
}
export default Footer2;