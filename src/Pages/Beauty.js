import 'bootstrap/dist/css/bootstrap.min.css';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Select from './Select'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Featured from '../Component/Featured/Featured';
import Headslide from '../headslide/Headslide';



const Beauty = () => {

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
  var setting = {
    infinite: false,
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
              <div className=" d-flex justify-content-center"><h1>All Beauty</h1></div>
            </Container>
          </Container>
        </div>
      </div>
      <div className="slider-container">
        <Headslide/>
        <Container fluid>
          <Container>
            <div className="heading">
              <h1>Picks For You</h1>
            </div>
            <Slider {...set}>
              
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Monika-Kolinsky-Nail-Art-Brush-777F-16-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714863634'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Monika-Kolinsky-Nail-Art-Brush-777F-16-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714863634'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Startool-Inc-Taper-Pro-XL-Medium-Manicure-Pedicure-Tools-at-Beyond-Polish_1d24ffaa-b002-4c25-843a-c11afdf14059_300x.jpg?v=1724275784'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Startool-Inc-Taper-Pro-XL-Medium-Manicure-Pedicure-Tools-at-Beyond-Polish_1d24ffaa-b002-4c25-843a-c11afdf14059_300x.jpg?v=1724275784'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/CND-LED-Lamp-Version-2-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714861272'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/CND-LED-Lamp-Version-2-Manicure-Pedicure-Tools-at-Beyond-Polish-2_300x.jpg?v=1714861278'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/The-GelBottle-Inc-Gel-Polish-Allure-_67oz-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1723669380'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/The-GelBottle-Inc-Gel-Polish-Allure-_67oz-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1723669380'} star={'*****'} pera={'OPI GelColor - Material Gworl 0.5 oz - #GCS024'} price={'$19.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Deflying-Gravity-0_5-oz-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1727213632'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Deflying-Gravity-0_5-oz-Gel-Polish-at-Beyond-Polish-2_06155e5e-a6ad-420f-ad90-6eeb3f6575e1_300x.jpg?v=1727905736'} star={'*****'} pera={'OPI Nail Lacquer - Apricot AF 0.5 oz - #NLS018'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Medicool-Pro-Power-35k-Portable-2020-Model-Rechargeable-File-Pearl-White-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714992535'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Medicool-Pro-Power-35k-Portable-2020-Model-Rechargeable-File-Pearl-White-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714992535'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Medicool-Pro-Power-35k-Portable-2020-Model-Rechargeable-File-Pearl-White-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714992535'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Medicool-Pro-Power-35k-Portable-2020-Model-Rechargeable-File-Pearl-White-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714992535'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Deflying-Gravity-0_5-oz-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1727213632'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Fiyeros-My-Mani-0_5-oz-Gel-Polish-at-Beyond-Polish-2_3f04f385-f9b5-4a4f-ba05-33b81feae80f_300x.jpg?v=1727991142'} star={'*****'} pera={'OPI Nail Lacquer - Suga Cookie 0.5 oz - #NLS018'} price={'$8.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Fiyeros-My-Mani-0_5-oz-Gel-Polish-at-Beyond-Polish_79c4ef93-e99c-4409-be84-fd83b1897a6c_300x.jpg?v=1727991137'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Fiyeros-My-Mani-0_5-oz-Gel-Polish-at-Beyond-Polish-2_3f04f385-f9b5-4a4f-ba05-33b81feae80f_300x.jpg?v=1727991142'} star={'*****'} pera={'OPI GelColor - Suga Cookie 0.5 oz - #GCS018'} price={'$19.99'} />
              </div>


            </Slider>
          </Container>
        </Container>
        <Featured/>
      </div>



    </>
  );
}
export default Beauty;