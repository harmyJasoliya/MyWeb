import React from "react";
const Select = (props) =>{
    return(
      <>
        <div className=" polishcard">
          <div className="img1"><img src={props.img1} className='w-100' alt="" />
                <div className="img2"><img src={props.img2} className='w-100' alt="" /></div>
          </div>
            
       
            <div className='polishdata'>          
            <div className="w-100" >
                <div className="data">
                <span>{props.star}</span>
                <p>{props.pera}</p>
                <p>{props.price}</p>
                </div>
            </div>
            </div>
        </div>
      </>  
     );
}

export default Select;