import React from "react";
const Select = (props) =>{
    return(
      <>
        <div className=" clubcard">
          <img src={props.img1} className='w-100' alt="" />
            <div className='clubdata'>          
                <div className="w-100" >
                    <p>{props.pera}</p>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
      </>  
     );
}

export default Select;