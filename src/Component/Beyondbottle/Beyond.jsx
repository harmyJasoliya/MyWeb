import React from "react";
const Beyond = (props) =>{
    return(
      <>
        <div className=" beyondcard">
          <div className="img4 m-1"><img src={props.img} className='w-100' alt="" /></div>
            
       
            <div className='beyond-data'>          
            <div className="w-100" >
                <div className="beyonddetail">
                    <h4>{props.head}</h4>
                    <p>{props.pera}</p>
                    <div className="wbtn"><button>{props.btn}</button></div>
                    
               
                </div>
            </div>
            </div>
        </div>
      </>  
     );
}

export default Beyond;