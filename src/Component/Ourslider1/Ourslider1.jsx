import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Select from "../Ourslider1/Select";
import { Container } from "react-bootstrap";

const Ourslider1 = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
    };
    return (
        <div className="slider-container2">

            <Container>
                <Container fluid>
                    <div className="heading ">
                        <h1>Personalized Picks for You</h1>
                    </div>
                    <Slider {...settings}>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Metallic-Mega-Mix-Fall-2024-Collection-0_5-oz-Gel-Polish-at-Beyond-Polish_bb958720-995c-4574-914d-ef7a955d3ac3_300x.jpg?v=1721856962'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Metallic-Mega-Mix-Fall-2024-Collection-0_5-oz-Gel-Polish-at-Beyond-Polish_bb958720-995c-4574-914d-ef7a955d3ac3_300x.jpg?v=1721856962'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Glamnetic-Press-On-Nail-Remover-Manicure-Pedicure-Tools-at-Beyond-Polish-2_300x.jpg?v=1724967283'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Glamnetic-Press-On-Nail-Remover-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1724796497'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Love-Is-In-The-Bare-0_5-oz-GCT69-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1724792117'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Love-Is-In-The-Bare-0_5-oz-GCT69-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1724792123'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Deborah-Lippmann-Gel-Lab-Pro-Nail-Polish-Bejeweled-Fall-2024-Collection-Nail-Lacquer-at-Beyond-Polish_300x.jpg?v=1722457809'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Deborah-Lippmann-Gel-Lab-Pro-Nail-Polish-Bejeweled-Fall-2024-Collection-Nail-Lacquer-at-Beyond-Polish-2_300x.webp?v=1722998496'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Startool-Inc-3-in-1-STF-Special-Silver-Manicure-Pedicure-Tools-at-Beyond-Polish_a2647515-6d5d-41bd-921d-1cb6d153287b_300x.jpg?v=1724189303'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Startool-Inc-3-in-1-STF-Special-Silver-Manicure-Pedicure-Tools-at-Beyond-Polish_a2647515-6d5d-41bd-921d-1cb6d153287b_300x.jpg?v=1724189303'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/I-Scream-Nails-Monstrous-Nail-Lacquer-at-Beyond-Polish_300x.jpg?v=1725996998'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/I-Scream-Nails-Monstrous-Nail-Lacquer-at-Beyond-Polish-2_300x.jpg?v=1726170670'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Im-the-Wonderfullest-0_5-oz-HRR10-Nail-Lacquer-at-Beyond-Polish_ee0f179d-6838-4e49-8bd5-aeeb77a3a61c_300x.jpg?v=1728078055'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Im-the-Wonderfullest-0_5-oz-HRR10-Nail-Lacquer-at-Beyond-Polish-2_ea169f43-983f-4d59-80e5-dc2079d81f5d_300x.jpg?v=1727991403'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Cajun-Shrimp-0_5-oz-GCL64-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1724792014'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Cajun-Shrimp-0_5-oz-GCL64-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1724792020'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Alpine-Snow-0_5-oz-GCL00-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1724791993'}img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Alpine-Snow-0_5-oz-GCL00-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1724791999'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Startool-Inc-3-in-1-STX-Special-Silver-Manicure-Pedicure-Tools-at-Beyond-Polish_5937a9db-0568-48d1-a65e-02409aa2aaf8_300x.jpg?v=1724189316'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Startool-Inc-3-in-1-STX-Special-Silver-Manicure-Pedicure-Tools-at-Beyond-Polish_5937a9db-0568-48d1-a65e-02409aa2aaf8_300x.jpg?v=1724189316'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Barefoot-in-Barcelona-0_5-oz-GCE41-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1724797565'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Barefoot-in-Barcelona-0_5-oz-GCE41-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1724797570'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Optical-Nailusion-0_5-oz-GCE01-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1724791927'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Optical-Nailusion-0_5-oz-GCE01-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1724791933'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Infinite-Shine-Head-Shizstress-HRR14-Nail-Lacquer-at-Beyond-Polish_5c31d2dd-0655-49a7-90f8-3ac70d3aee9f_300x.jpg?v=1727991241'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Infinite-Shine-Head-Shizstress-HRR14-Nail-Lacquer-at-Beyond-Polish-2_0cf4243c-130a-4c0c-887e-ee0506babbc3_300x.jpg?v=1727991246'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Millennium-Mocha-0_5-oz-GCF021-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1721856505'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Endless-Sun-ner-0_5-oz-GCN79-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1724798515'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/I-Scream-Nails-Monstrous-Nail-Lacquer-at-Beyond-Polish_300x.jpg?v=1725996998'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/KBShimmer-Nail-Polish-Gummy-A-Break-Nail-Lacquer-at-Beyond-Polish-2_300x.jpg?v=1726086015'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/KBShimmer-Nail-Polish-Flash-Forward-Nail-Lacquer-at-Beyond-Polish-2_300x.jpg?v=1726085964'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/KBShimmer-Nail-Polish-Flash-Forward-Nail-Lacquer-at-Beyond-Polish-2_300x.jpg?v=1726085964'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Duomo-Days-Isola-Nights-0_5-oz-GCMI06-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1724798298'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Duomo-Days-Isola-Nights-0_5-oz-GCMI06-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1724798304'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                    </Slider>
                    <>
                        <div className="heading ">
                            <h1>New Arrivals</h1>
                        </div>
                        <Slider {...settings}>
                        <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Buttafly-0_5-oz-GCS022-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1715035996'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Buttafly-0_5-oz-GCS022-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1715036001'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Spice-Up-Your-Life-0_5-oz-GCS023-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1715036011'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Spice-Up-Your-Life-0_5-oz-GCS023-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1715036017'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Snatchd-Silver-0_5-oz-GCS017-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1715035923'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Snatchd-Silver-0_5-oz-GCS017-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1715035928'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Glazed-N-Amused-0_5-oz-GCS013-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1715035865'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Glazed-N-Amused-0_5-oz-GCS013-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1715035870'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Gliterally-Shimmer-0_5-oz-GCS021-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1715035982'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Gliterally-Shimmer-0_5-oz-GCS021-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1715035987'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Without-a-Pout-0_5-oz-GCS016-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1715035909'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Without-a-Pout-0_5-oz-GCS016-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1715035913'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Supernova-Pearl-0_5-oz-GCF013-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1721856395'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Supernova-Pearl-0_5-oz-GCF013-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1722029159'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Drama-at-La-Scala-0_5-oz-GCMI04-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1724798271'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Drama-at-La-Scala-0_5-oz-GCMI04-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1724798277'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-I-Am-What-I-Amethyst-0_5-oz-GCT76-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1714805092'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-I-Am-What-I-Amethyst-0_5-oz-GCT76-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1714805098'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Lisbon-Wants-Moor-OPI-0_5-oz-GCL16-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1714829351'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Lisbon-Wants-Moor-OPI-0_5-oz-GCL16-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1714829356'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Im-Yacht-Leaving-0_5-oz-GCP011-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1715012004'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Im-Yacht-Leaving-0_5-oz-GCP011-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1715012009'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Suzi-Takes-A-Sound-Bath-GCF008-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1714980573'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Suzi-Takes-A-Sound-Bath-GCF008-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1714980578'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              
                       

                    </Slider>
                    </>
                </Container>
            </Container>

        </div>
    );
}
export default Ourslider1;