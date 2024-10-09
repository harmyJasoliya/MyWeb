import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Select from './Select';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headslide from '../headslide/Headslide';
import Featured from '../Component/Featured/Featured';




const Sale = () => {
  var set = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
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
  var setting = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
  }
  return (
    <>
      <div className="Brandhead">
        <div className="w-100">
          
          <Container flude>
            <Container>
              <div className=" d-flex justify-content-center"><h1>All Sales</h1></div>
            </Container>
          </Container>
        </div>
      </div>
      <div className="slider-container">
      <Headslide/>
        <Container fluid>
          <Container>
          
            <Slider {...set}>
             
              
            <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Youve-Got-Nail-0_5-oz-GCF017-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1721856420'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Youve-Got-Nail-0_5-oz-GCF017-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1722029177'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/CND-Shellac-Purplexity-0_25-oz-Gel-Polish-at-Beyond-Polish_b58cf295-357f-4e68-87d4-1ccc9dfaf178_300x.jpg?v=1722455357'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/CND-Shellac-Purplexity-0_25-oz-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1721344183'} star={'*****'} pera={'OPI GelColor - I Quit My Day Job 0.5 oz - #GCP001'} price={'$19.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Ozitively-Elphaba-0_5-oz-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1727213837'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Ozitively-Elphaba-0_5-oz-Gel-Polish-at-Beyond-Polish-2_b92be696-458a-41b6-9cc4-9eee780d8aa1_300x.jpg?v=1727991185'} star={'*****'} pera={'OPI GelColor - Makeout-side 0.5 oz - #GCP002'} price={'$19.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/The-GelBottle-Inc-Gel-Polish-Allure-_67oz-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1723669380'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/The-GelBottle-Inc-Gel-Polish-Allure-_67oz-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1723669380'} star={'*****'} pera={'OPI GelColor - Material Gworl 0.5 oz - #GCS024'} price={'$19.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Deflying-Gravity-0_5-oz-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1727213632'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Deflying-Gravity-0_5-oz-Gel-Polish-at-Beyond-Polish-2_06155e5e-a6ad-420f-ad90-6eeb3f6575e1_300x.jpg?v=1727905736'} star={'*****'} pera={'OPI Nail Lacquer - Apricot AF 0.5 oz - #NLS018'} price={'$15.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Deflying-Gravity-0_5-oz-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1727213632'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Fiyeros-My-Mani-0_5-oz-Gel-Polish-at-Beyond-Polish-2_3f04f385-f9b5-4a4f-ba05-33b81feae80f_300x.jpg?v=1727991142'} star={'*****'} pera={'OPI Nail Lacquer - Suga Cookie 0.5 oz - #NLS018'} price={'$8.99'} />
                        </div>
                        <div>
                            <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Fiyeros-My-Mani-0_5-oz-Gel-Polish-at-Beyond-Polish_79c4ef93-e99c-4409-be84-fd83b1897a6c_300x.jpg?v=1727991137'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Fiyeros-My-Mani-0_5-oz-Gel-Polish-at-Beyond-Polish-2_3f04f385-f9b5-4a4f-ba05-33b81feae80f_300x.jpg?v=1727991142'} star={'*****'} pera={'OPI GelColor - Suga Cookie 0.5 oz - #GCS018'} price={'$19.99'} />
                        </div>
                        <div>
                          <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Stop-At-Nothin-0_5-oz-GCS036-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1715044228'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Stop-At-Nothin-0_5-oz-GCS036-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1715044233'} star={'*****'} pera={'OPI GelColor - Suga Cookie 0.5 oz - #GCS018'} price={'$19.99'} />
                       </div>
                       <div>
                          <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Midnight-Snacc-0_5-oz-NLS035-Nail-Lacquer-at-Beyond-Polish_6e631d3a-f0e3-4186-85fc-45f53f4e9348_300x.jpg?v=1719348642'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Midnight-Snacc-0_5-oz-NLS035-Nail-Lacquer-at-Beyond-Polish-2_356fac33-81e4-4728-9009-62d59be6255c_300x.jpg?v=1719348647'} star={'*****'} pera={'OPI GelColor - Suga Cookie 0.5 oz - #GCS018'} price={'$19.99'} />
                       </div>
                       <div>
                          <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Youve-Been-Red-0_5-oz-NLS025-Nail-Lacquer-at-Beyond-Polish_437c74ae-2a15-49b3-b7be-8a7aac775b3e_300x.jpg?v=1715455708'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Youve-Been-Red-0_5-oz-NLS025-Nail-Lacquer-at-Beyond-Polish-2_300x.jpg?v=1715374028'} star={'*****'} pera={'OPI GelColor - Suga Cookie 0.5 oz - #GCS018'} price={'$19.99'} />
                       </div>
            </Slider>
          </Container>
        </Container>
      </div>
      <>

        <div className="slider-container">

          <Container fluid>
            <Container>
              <div className="heading">
                <h1>Other Customers Are Buying</h1>
              </div>
              <Slider {...setting}>
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
          <Featured/>
        </div>

      </>

    </>
  );
}
export default Sale;