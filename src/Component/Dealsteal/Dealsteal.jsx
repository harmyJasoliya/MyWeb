// import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import Deal from '../Trending/Deal'
const Dealsteal = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500
    };
    return (

        <Container>
            <Container fluid>
                <Row>
                    <div className="d-flex">
                        <div className="col-3 mt-5 pt-5 sidehead">
                            <h2> Deal & Steals</h2>
                            <p>New Mark Down Up To 50% Off Added Weekly</p>
                            <div className="wbtn"><button >SHOP SEAL</button></div>
                        </div>

                        <div className="col-9">

                            <Slider {...settings}>
                                <div>
                                    <Deal img={'https://www.beyondpolish.com/cdn/shop/files/Plexigel_Promo.png?v=1709826856'} head={'On Your Radar'} pera={'Shop Now While Suplies Last'} sym={''} />
                                </div>
                                <div>
                                    <Deal img={'https://www.beyondpolish.com/cdn/shop/files/Markdowns_a359a244-6cfe-441c-8236-a71bcefd8dad.png?v=1710453663'} head={'Mark Downs'} pera={'No Code Needed'} />
                                </div>
                                <div>
                                    <Deal img={'https://www.beyondpolish.com/cdn/shop/files/10_OFF_NAIL_SETS_1.png?v=1709328901'} head={'10% OFF Nail Sets'} pera={'Buy In Bulk Save!No Code Needed'} />
                                </div>
                                <div>
                                    <Deal img={'https://www.beyondpolish.com/cdn/shop/files/SALE_20_OFF_1.png?v=1712175397'} head={'On Your Radar'} pera={'Shop Now While Suplies Last'} />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </Row>

            </Container>
        </Container>
    );
}
export default Dealsteal;