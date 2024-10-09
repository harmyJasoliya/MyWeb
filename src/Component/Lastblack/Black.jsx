import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { ImPinterest2 } from "react-icons/im";
import { FiYoutube } from "react-icons/fi";



const Black = () => {
  var set = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (


    < >   
    <div className="bg-black text-white">
      <div className="black1">
        <div className="pt-5 pb-5">
          <Container>
            <Container fluid>
              <div className="lh-lg">
                <div className="d-flex">
                  <div className="col-4 me-5">
                    <h5>Join Our Newsletter for access to New Arrivals & Promos.</h5>
                    <forms>
                      <Row className="align-items-center">
                        <Col xs="auto">

                          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                            email address
                          </Form.Label>
                          <InputGroup className="mb-2">

                            <Form.Control id="inlineFormInputGroup" placeholder="EMAIL ADDRESS" />
                            <div className="bbtn"><button>SUBSCRIBE</button></div>

                          </InputGroup>

                        </Col>
                      </Row>
                    </forms>
                    <div className="d-flex footsym gap-3">
                      <CiFacebook
                        style={
                          {
                            fontSize: 'x-large',
                            fontWeight: 'x-bolder',
                          }
                        } />
                      <AiFillTwitterCircle
                        style={
                          {
                            fontSize: 'x-large',
                            fontWeight: 'bolder',
                          }
                        } />
                      <GrInstagram
                        style={
                          {
                            fontSize: 'x-large',
                            fontWeight: 'bolder',
                          }
                        } />
                      <ImPinterest2
                        style={
                          {
                            fontSize: 'x-large',
                            fontWeight: 'bolder',
                          }
                        } />
                      <FiYoutube
                        style={
                          {
                            fontSize: 'x-large',
                            fontWeight: 'bolder',
                          }
                        } />
                    </div>

                  </div>
                  <div className="col-2">
                    <h4>Company</h4>
                    <h6>About Us</h6>
                    <h6>Reviews</h6>
                    <h6>Gift Cards</h6>
                    <h6>Blog</h6>
                    <h6>privacy Police</h6>
                    <h6>Beware Of Scams</h6>
                  </div>
                  <div className="col-2">
                    <h4>My BP </h4>
                    <h6>My Account</h6>
                    <h6>Order status</h6>
                    <h6>Rewards Programs</h6>
                    <h6>Student & Grade Discount</h6>
                    <h6>Healthcare, Military & Teachers</h6>
                  </div>
                  <div className="col-2">
                    <h4>Help And FAQ'S</h4>
                    <h6>Shipping</h6>
                    <h6>Returns</h6>
                    <h6>Ordering & Billing</h6>
                    <h6>Contect Us</h6>
                    <h6>Buy Now & Pay Later</h6>
                    <h6>Deals</h6>
                  </div>
                  <div className="col-2">
                    <h4>Partners</h4>
                    <h6>ETOI</h6>
                    <h6>Franchise Opportunity</h6>
                    <h6>Wholesale Info</h6>
                    <h6>Affiliate Signup</h6>
                    <h6>Brand Ambassador</h6>
                  </div>
                </div>
              </div>
            </Container>
          </Container>
        </div>
      </div>
      <div className="black2 d-flex text-center p-4">
        <Container>
          <Container fluid>
            <hr className=' text-white' />
            <h6>Copyright © 2024 Beyond Polish</h6>
          </Container>
        </Container>
      </div>
    </div>
    </>

    );
}
    export default Black;