import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import Deal from './Deal'
const Trending = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "30px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <div className="background">
            <Container>
                <Container fluid>
                    <div className="mar">
                    <Row>

                        <div className="d-flex   mt5 ">
                            <div className="col-3 mt-5 sidehead">
                                <h2> Trending Now</h2>
                                <p>Keep your nails looking' fresh with the latest trends that everyone is talking about.</p>
                                <div className="wbtn"><button>SHOP NEW</button></div>

                            </div>

                            <div className="col-9">
                                <Slider {...settings}>
                                    <div>
                                        <Deal img={'//www.beyondpolish.com/cdn/shop/files/Trending_Now.png?v=1710513139'} head={'Cirque Colors Glazed'} pera={'A collection of bold jelly nail colors'} sym={''} />
                                    </div>
                                    <div>
                                        <Deal img={'//www.beyondpolish.com/cdn/shop/files/Spring_Nail_Colors.png?v=1706824585'} head={'Spring Colors'} pera={'Fresh Picks For The Season'} />
                                    </div>
                                    <div>
                                        <Deal img={'//www.beyondpolish.com/cdn/shop/files/Essie_Blushin_and_Crushin.png?v=1710967845'} head={'Essie'} pera={'Blushin And Crushin Spring 2024 Collection'} />
                                    </div>
                                    <div>
                                        <Deal img={'//www.beyondpolish.com/cdn/shop/files/Orly_Aqua_Aura.png?v=1710255930'} head={'Orly'} pera={'Aqua Aura Spring Collection'} />
                                    </div>
                                </Slider>
                            </div>
                        </div>

                    </Row>
                    </div>
                </Container>
            </Container>
        </div>
    );
}
export default Trending;