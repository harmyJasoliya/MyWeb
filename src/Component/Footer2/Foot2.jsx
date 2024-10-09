import React from "react";
import Footer2 from "./Footer2";
import Container from 'react-bootstrap/Container';
import { TiThumbsUp } from "react-icons/ti";
import { FaAlignLeft ,FaRegHeart } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import { LuTruck } from "react-icons/lu";

const Foot2 = () => {
    return(
        <Container>
        <Container fluid>
          <div className="foot2 d-flex text-center pt-5 pb-5">
            <div className="col-3">
              <Footer2 img={<TiThumbsUp 
                      style={
                        {
                          marginRight:'20px',
                          fontSize:'35px',
                          marginTop:'5px'
                        }
                      }/>}  head={'THE Premier Choice'} pera={'For nail lovers & professionals.'}/>
            </div>
            <div className="col-3">
              <Footer2 img={<FaRegHeart 
                style={
                  {
                    marginRight:'20px',
                    fontSize:'35px',
                    marginTop:'5px'
                  }
                }/>} head={'Largest Selections'} pera={'Your best nails start here.'}/>
            </div>
            <div className="col-3">
              <Footer2 img={<TbMessage 
                  style={
                    {
                      marginRight:'20px',
                      fontSize:'35px',
                      marginTop:'5px'
                    }
                  }/>} head={'7 Day Support'} pera={'Our nail experts are here for you.'}/>
            </div>
          <div className="col-3">
          
            <Footer2 img={<LuTruck 
              style={
                {
                  marginRight:'20px',
                  fontSize:'35px',
                  marginTop:'5px'
                }
              }/>} head={'Fast Shipping'} pera={'Your new nails delivered, fast.'}/>
            </div>
          </div>
      </Container>
      </Container>
    );
}
export default Foot2;