import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Select from './Select'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Featured = () => {
  var set = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
  }
  return (
   <>


      
        <div className="slider-container">
          <Container fluid>
            <Container>
              <div className="heading">
                <h1>Featured Brands</h1>
              </div>
              <Slider {...set}>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Duomo-Days-Isola-Nights-0_5-oz-GCMI06-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1724798298'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Duomo-Days-Isola-Nights-0_5-oz-GCMI06-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1724798304'} star={'*****'} pera={'CND - Shellac Hippie-Ocracy (0.25 oz)'} price={'$15.99'} />

                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Bubble-Bath-0_5-oz-GCS86-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1714773347'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Bubble-Bath-0_5-oz-GCS86-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1714773352'} star={'*****'} pera={'OPI GelColor - Chill Em With Kindness 0.5 oz - #GCHPQ07'} price={'$19.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Verified-0_5-oz-NLS019-Nail-Lacquer-at-Beyond-Polish_300x.jpg?v=1715036141'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Verified-0_5-oz-NLS019-Nail-Lacquer-at-Beyond-Polish-2_300x.jpg?v=1715036146'} star={'*****'} pera={'CND - Shellac Forevergreen (0.25 oz)'} price={'$15.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Spice-Up-Your-Life-0_5-oz-GCS023-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1715036011'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Spice-Up-Your-Life-0_5-oz-GCS023-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1715036017'} star={'*****'} pera={'CND - Strengthener Rxx 0.5 oz'} price={'$14.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-elf-Made-0_5-oz-NLS020-Nail-Lacquer-at-Beyond-Polish_300x.jpg?v=1715036156'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-elf-Made-0_5-oz-NLS020-Nail-Lacquer-at-Beyond-Polish-2_300x.jpg?v=1715036162'} star={'*****'} pera={'CND - Shellac Teal Textile (0.25 oz)'} price={'$15.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-elf-Made-0_5-oz-GCS020-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1715035967'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-elf-Made-0_5-oz-GCS020-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1715035972'} star={'*****'} pera={'CND - Shellac Silky Sienna (0.25 oz)'} price={'$15.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Drama-at-La-Scala-0_5-oz-GCMI04-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1724798271'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Drama-at-La-Scala-0_5-oz-GCMI04-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1724798277'} star={'*****'} pera={'OPI Infinite Shine - Feelin Capricorn-y - #ISLH016'} price={'$9.25'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Apricot-AF-0_5-oz-GCS014-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1715035880'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Apricot-AF-0_5-oz-GCS014-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1715035885'} star={'*****'} pera={'OPI GelColor - Scorpio Seduction 0.5 oz - #GCH019'} price={'$19.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Snatchd-Silver-0_5-oz-GCS017-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1715035923'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Snatchd-Silver-0_5-oz-GCS017-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1715035928'} star={'*****'} pera={'OPI Infinite Shine - Feelin Capricorn-y - #ISLH016'} price={'$9.25'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Buttafly-0_5-oz-GCS022-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1715035996'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Buttafly-0_5-oz-GCS022-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1715036001'} star={'*****'} pera={'OPI GelColor - Scorpio Seduction 0.5 oz - #GCH019'} price={'$19.99'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Funny-Bunny-0_5-oz-GCH22-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1714773717'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Funny-Bunny-0_5-oz-GCH22-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1714773722'} star={'*****'} pera={'OPI Infinite Shine - Feelin Capricorn-y - #ISLH016'} price={'$9.25'} />
                </div>
                <div>
                  <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Verified-0_5-oz-GCS019-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1715035953'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Verified-0_5-oz-GCS019-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1715035958'} star={'*****'} pera={'OPI GelColor - Scorpio Seduction 0.5 oz - #GCH019'} price={'$19.99'} />
                </div>


              </Slider>

            </Container>
          </Container>
        </div>
      </>
   
  );
}

export default Featured;

