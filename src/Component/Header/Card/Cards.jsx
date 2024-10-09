import React from "react";
const Cards = (props) =>{
    return(
    <div className="w-50">
        <div className="data">
            <h1>{props.head}</h1>
            <p>{props.pera}</p>
           <div className="bbtn">
            {props.btn ? <button>{props.btn}</button> : ""}
           </div>  
        </div>
        <div className="image1">
            <img src={props.img} alt="" />
        </div>
     </div>
   
    )
}
export default Cards;