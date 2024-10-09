import React from "react";
const Deal = (props) => {
    return(
        <div className=" main position-relative ms-5 ">
          <div className="dealimg"><img src={props.img} className='w-100' alt="" /></div>
            
            <div className='detail position-absolute p-2 bottom-0 mb-3 ms-5 bg-white m-auto d-flex aline-items-center'>
                  <div className="d-flex smcard">
                    <div className="w-100" >
                      <h5>{props.head}</h5>
                      <p>{props.pera}</p>
                    </div>
                    {/* <div className="symb w-30">
                        <span>{props.sym}</span>
                    </div> */}
                  </div>
              </div>
        </div>
    );
}
export default Deal;