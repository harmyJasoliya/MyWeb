

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Select from './Select'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Dip = () => {

  var set = {
    infinite: true,
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
  var setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
  }
  return (
    <>
      <div className="Brandhead">
        <div className="w-100">
          <Container flude>
            <Container>
              <div className=" d-flex justify-content-center"><h1>Dipping Powder</h1></div>
            </Container>
          </Container>
        </div>
      </div>
      <div className="slider-container1">

        <Container fluid>
          <Container>
            <div className="heading">
              <h1>Picks For You</h1>
            </div>
            <Slider {...set}>
            <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Vdara10-Duo-Dip-Combo-Airy-Delight-Gel-Lacquer-Dip-at-Beyond-Polish_300x.jpg?v=1715081259'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Vdara10-Duo-Dip-Combo-Airy-Delight-Gel-Lacquer-Dip-at-Beyond-Polish_300x.jpg?v=1715081259'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Makeout-side-1_5-oz-DPP002-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1715011622'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Makeout-side-1_5-oz-DPP002-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1715011622'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Dipping-Powder-Perfection-Party-Like-its-Y2k-1_5-oz-DPF018-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1721856805'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Dipping-Powder-Perfection-Party-Like-its-Y2k-1_5-oz-DPF018-Dipping-Powder-at-Beyond-Polish-2_300x.jpg?v=1721706701'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Bubble-Bath-1_5-oz-DPS86-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714843853'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Bubble-Bath-1_5-oz-DPS86-Dipping-Powder-at-Beyond-Polish-2_300x.jpg?v=1714843858'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Vdara10-Dip-Powder-Breathless-Desire-2oz-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1715047844'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Vdara10-Dip-Powder-Breathless-Desire-2oz-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1715047844'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Lisbon-Wants-Moor-OPI-1_5-oz-DPL16-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714843397'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Lisbon-Wants-Moor-OPI-1_5-oz-DPL16-Dipping-Powder-at-Beyond-Polish-2_300x.jpg?v=1714843402'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Vdara10-Dip-Powder-Provocative-allure-2oz-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1715047533'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Vdara10-Dip-Powder-Provocative-allure-2oz-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1715047533'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Lisbon-Wants-Moor-OPI-1_5-oz-DPL16-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714843397'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Lisbon-Wants-Moor-OPI-1_5-oz-DPL16-Dipping-Powder-at-Beyond-Polish-2_300x.jpg?v=1714843402'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Dipping-Powder-Perfection-Suga-Cookie-1_5-oz-DPS018-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1715036406'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Dipping-Powder-Perfection-Suga-Cookie-1_5-oz-DPS018-Dipping-Powder-at-Beyond-Polish-2_300x.jpg?v=1715036411'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Harmony-Gelish-Xpress-Dip-Be-My-Sugarplum-1_5-oz-1620409-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714908636'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Harmony-Gelish-Xpress-Dip-Be-My-Sugarplum-1_5-oz-1620409-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714908636'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Vdara10-Dip-Powder-Royal-Prestige-2oz-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1715047302'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Vdara10-Dip-Powder-Royal-Prestige-2oz-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1715047302'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Silicon-Valley-Girl-1_5-oz-DPS004-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1715001146'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Silicon-Valley-Girl-1_5-oz-DPS004-Dipping-Powder-at-Beyond-Polish-2_300x.jpg?v=1715001151'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              

            </Slider>
          </Container>
        </Container>
      </div>
        <div className="slider-container">

          <Container fluid>
            <Container>
              <div className="heading">
                <h1>Other Customers Are Buying</h1>
              </div>
              <Slider {...setting}>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Put-it-in-Neutral-1_5-oz-DPT65-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714843560'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Put-it-in-Neutral-1_5-oz-DPT65-Dipping-Powder-at-Beyond-Polish-2_300x.jpg?v=1714843565'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Dip-Powder-Combo-Liquid-Set-Bubble-Bath-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714849478'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Dip-Powder-Combo-Liquid-Set-Bubble-Bath-Dipping-Powder-at-Beyond-Polish-2_300x.jpg?v=1714849483'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Clear-Setting-Powder-1_5-oz-DP003-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714843096'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Clear-Setting-Powder-1_5-oz-DP003-Dipping-Powder-at-Beyond-Polish-2_300x.jpg?v=1714843101'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Clear-Setting-Powder-1_5-oz-DP003-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714843096'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Alpine-Snow-1_5-oz-DPL00-Dipping-Powder-at-Beyond-Polish-2_300x.jpg?v=1714843844'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Dip-Powder-Combo-Liquid-Set-Bubble-Bath-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714849478'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Dip-Powder-Combo-Liquid-Set-Love-is-in-the-Bare-Dipping-Powder-at-Beyond-Polish-2_300x.jpg?v=1714849529'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Clear-Setting-Powder-1_5-oz-DP003-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714843096'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-I-Am-What-I-Amethyst-1_5-oz-DPT76-Dipping-Powder-at-Beyond-Polish-2_300x.jpg?v=1714843636'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Love-is-in-the-Bare-1_5-oz-DPT69-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714843574'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Dip-Powder-Combo-Liquid-Set-Funny-Bunny-Dipping-Powder-at-Beyond-Polish-2_300x.jpg?v=1714853353'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Dip-Powder-Combo-Liquid-Set-Funny-Bunny-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714853348'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Dip-Powder-Combo-Liquid-Set-Funny-Bunny-Dipping-Powder-at-Beyond-Polish-2_300x.jpg?v=1714853353'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Lets-Be-Friends-1_5-oz-DPH82-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714916851'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Powder-Perfection-Lets-Be-Friends-1_5-oz-DPH82-Dipping-Powder-at-Beyond-Polish-2_300x.jpg?v=1714916856'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Harmony-Gelish-Dip-Brush-Restorer-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714880447'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Harmony-Gelish-Dip-Brush-Restorer-Dipping-Powder-at-Beyond-Polish_300x.jpg?v=1714880447'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
                </div>
              </Slider>

            </Container>
          </Container>
        </div>

      </>
  );
}
export default Dip;
