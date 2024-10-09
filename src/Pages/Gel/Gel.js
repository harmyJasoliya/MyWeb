

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Select from './Select'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headslide from '../../headslide/Headslide';
import Featured from '../../Component/Featured/Featured';



const Gel = () => {

  var set = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
   
  }
  
  return (
    <>
      <div className="w-100 ">
        <div className="newhead text-center">
          <h1>Gel Polish</h1>
        </div>
      </div>
      <div className="slider-container">
        <Headslide/>
        <Container fluid >
          <Container>
            <div className="heading">
              <h1>Pick Up For You</h1>
            </div>
            <Slider {...set}>
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
          </Container>
        </Container>
        <Featured/>
      </div>
    

      </>
  );
}
export default Gel;
