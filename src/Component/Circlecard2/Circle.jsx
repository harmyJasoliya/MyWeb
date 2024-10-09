import React from "react";
const Circle = (props) =>{
    return(
    <div className="w-100">
        {/* <div className="w-25"> */}
            <div className="image2 w-75">
                <img src={props.img} alt="" />
            </div>
        {/* </div> */}
        <div className="title">
            <h6>{props.head}</h6>
        </div>
    </div>
   
    )
}
export default Circle;