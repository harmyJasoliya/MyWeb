import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Select from "../Ourslider1/Select";
import { Container } from "react-bootstrap";

const Ourslider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
    };
    return (
        <div className="slider-container1">

            <Container >
                <Container  fluid>
                    <div className="heading ">
                        <h1>Pick Up Where You Left Off</h1>
                    </div>
                    <Slider {...settings}>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Material-Gworl-0_5-oz-GCS024-Gel-Polish-at-Beyond-Polish.jpg?v=1715036026'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Material-Gworl-0_5-oz-GCS024-Gel-Polish-at-Beyond-Polish-2.jpg?v=1715036031'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Skate-to-the-Party-0_5-oz-NLP007-Nail-Lacquer-at-Beyond-Polish.jpg?v=1715011841'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Skate-to-the-Party-0_5-oz-NLP007-Nail-Lacquer-at-Beyond-Polish-2.jpg?v=1715011846'} star={'*****'} pera={'OPI GelColor - I Quit My Day Job 0.5 oz - #GCP001'} price={'$19.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-I-Quit-My-Day-Job-0_5-oz-GCP001-Gel-Polish-at-Beyond-Polish.jpg?v=1715011489'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-I-Quit-My-Day-Job-0_5-oz-GCP001-Gel-Polish-at-Beyond-Polish-2.jpg?v=1715011494'} star={'*****'} pera={'OPI GelColor - Makeout-side 0.5 oz - #GCP002'} price={'$19.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Suga-Cookie-0_5-oz-NLS018-Nail-Lacquer-at-Beyond-Polish.jpg?v=1715036126'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Suga-Cookie-0_5-oz-NLS018-Nail-Lacquer-at-Beyond-Polish-2.jpg?v=1715036132'} star={'*****'} pera={'OPI GelColor - Material Gworl 0.5 oz - #GCS024'} price={'$19.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Suga-Cookie-0_5-oz-GCS018-Gel-Polish-at-Beyond-Polish.jpg?v=1715035937'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Suga-Cookie-0_5-oz-GCS018-Gel-Polish-at-Beyond-Polish-2.jpg?v=1715035942'} star={'*****'} pera={'OPI Nail Lacquer - Apricot AF 0.5 oz - #NLS018'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/eGift-Card-Gift-Cards-at-Beyond-Polish.jpg?v=1714802960'} img2={''} star={'*****'} pera={'OPI Nail Lacquer - Suga Cookie 0.5 oz - #NLS018'} price={'$8.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Apricot-AF-0_5-oz-NLS014-Nail-Lacquer-at-Beyond-Polish.jpg?v=1715036068'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Apricot-AF-0_5-oz-NLS014-Nail-Lacquer-at-Beyond-Polish-2.jpg?v=1715036073'} star={'*****'} pera={'OPI GelColor - Suga Cookie 0.5 oz - #GCS018'} price={'$19.99'} />
                        </div>
                       

                    </Slider>
                </Container>
            </Container>

        </div>
    );
}
export default Ourslider;