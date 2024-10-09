import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Footer1 from './Footer1'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const Foot1 = () => {
    return(
        <div className="foot1">
        <Footer1 head={'Join OUR New Seltter'} pera={'Sign up it only takes a second to be in the news.'}/>
       
          <forms> 
            <Row className="align-items-center justify-content-center">               
              <Col xs="auto">
              
                  <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                    email address
                  </Form.Label>
                  <InputGroup className="mb-2">
                 
                    <Form.Control id="inlineFormInputGroup" placeholder="EMAIL ADDRESS" />
                      <div className="wbtn"><button>SUBSCRIBE</button></div>
                  
                  </InputGroup>
              
              </Col>  
            </Row>
          </forms>                  
      </div>
    );
}
export default Foot1;