import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Beyond from './Beyond';
const Beyondbotl = () => {
    return (

        <Container>
            <Container fluid>
                <div className="heading">
                    <h1>Beyond The Bottle</h1>
                </div>
                <div className="d-flex">
                    <div className="col-4 m-1"><Beyond img={'//www.beyondpolish.com/cdn/shop/articles/blog_-_madam_glam_nail_polish_640x.png?v=1712782402'} head={'NEW Madam Glam Nail Polish'} pera={'Hey nail lacquer lovers, Madam Glam has something for you!'} btn={'READ MORE'} /></div>
                    <div className="col-4 m-1"><Beyond img={'//www.beyondpolish.com/cdn/shop/articles/blog_-_i_scream_nails_fast_lane_640x.png?v=1710964689'} head={'I Scream Nails Fast Lane'} pera={'Unleash your inner trendsetter with 8 mesmerizing nail polishes.'} btn={'READ MORE'} /></div>
                    <div className="col-4 m-1"><Beyond img={'//www.beyondpolish.com/cdn/shop/articles/Blog_Covers_2_8_640x.png?v=1710782031'} head={'Easter Nails: Stunning Styles for the Spring Season'} pera={'Curated inspo for your Perfect Easter mani!'} btn={'READ MORE'} /></div>
                </div>
            </Container>
        </Container>
    );
}
export default Beyondbotl;