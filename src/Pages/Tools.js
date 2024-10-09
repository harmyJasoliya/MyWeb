import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Select from './Select';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headslide from '../headslide/Headslide';
import Featured from '../Component/Featured/Featured';

const Tools = () => {

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
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
  }
  return (
    <>
      <div className="w-100 ">
        <div className="newhead text-center">
          <h1>Tools</h1>
        </div>
      </div>
      <div className="slider-container1">
      <Headslide/>
      <Container fluid>
          <Container >
           
            <div className="heading">
              <h1>Pick Up For You</h1>
            </div>
            <Slider {...set}>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Startool-Inc-3-in-1-STF-Special-Silver-Manicure-Pedicure-Tools-at-Beyond-Polish_a2647515-6d5d-41bd-921d-1cb6d153287b_300x.jpg?v=1724189303'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Startool-Inc-3-in-1-STF-Special-Silver-Manicure-Pedicure-Tools-at-Beyond-Polish_a2647515-6d5d-41bd-921d-1cb6d153287b_300x.jpg?v=1724189303'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Harmony-Gelish-6-Oval-Gel-Brush-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714941946'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Harmony-Gelish-6-Oval-Gel-Brush-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714941946'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Startool-Inc-Cuticle-Cleaner-Football-Silver-Manicure-Pedicure-Tools-at-Beyond-Polish_5a336e25-9449-4bd7-bb70-dcd871ab7d63_300x.jpg?v=1724189428'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Startool-Inc-Cuticle-Cleaner-Football-Silver-Manicure-Pedicure-Tools-at-Beyond-Polish_5a336e25-9449-4bd7-bb70-dcd871ab7d63_300x.jpg?v=1724189428'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Kiara-Sky-Tools-Typhoon-Medium-Bit-Rose-Gold-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714959786'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Kiara-Sky-Tools-Typhoon-Medium-Bit-Rose-Gold-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714959786'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Harmony-Gelish-Gel-Striper-Brush-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714941941'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Harmony-Gelish-Gel-Striper-Brush-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714941941'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Monika-Kolinsky-Nail-Art-Brush-777F-16-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714863634'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Monika-Kolinsky-Nail-Art-Brush-777F-16-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714863634'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Medicool-Pro-Power-35k-Portable-2020-Model-Rechargeable-File-Pearl-White-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714992535'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Medicool-Pro-Power-35k-Portable-2020-Model-Rechargeable-File-Pearl-White-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714992535'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Medicool-Pro-Power-35k-Portable-2020-Model-Rechargeable-File-Pearl-White-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714992535'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Medicool-Pro-Power-35k-Portable-2020-Model-Rechargeable-File-Pearl-White-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714992535'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Startool-Inc-Taper-Pro-XL-Medium-Manicure-Pedicure-Tools-at-Beyond-Polish_1d24ffaa-b002-4c25-843a-c11afdf14059_300x.jpg?v=1724275784'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Startool-Inc-Taper-Pro-XL-Medium-Manicure-Pedicure-Tools-at-Beyond-Polish_1d24ffaa-b002-4c25-843a-c11afdf14059_300x.jpg?v=1724275784'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/CND-LED-Lamp-Version-2-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714861272'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/CND-LED-Lamp-Version-2-Manicure-Pedicure-Tools-at-Beyond-Polish-2_300x.jpg?v=1714861278'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Startool-Inc-Shark-Medium-Manicure-Pedicure-Tools-at-Beyond-Polish_0182ed40-07c6-46ac-aec3-19856122bf52_300x.jpg?v=1724275752'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Startool-Inc-Shark-Medium-Manicure-Pedicure-Tools-at-Beyond-Polish_0182ed40-07c6-46ac-aec3-19856122bf52_300x.jpg?v=1724275752'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/The-Creme-Shop-x-Disney-Minnie-Mouse-Crystal-Nail-File-Duo-with-Travel-Case-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1715034370'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/The-Creme-Shop-x-Disney-Minnie-Mouse-Crystal-Nail-File-Duo-with-Travel-Case-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1715034370'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
              <div>
                <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Harmony-Gelish-240240-Thin-Wooden-File-10-pc-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714965687'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Harmony-Gelish-240240-Thin-Wooden-File-10-pc-Manicure-Pedicure-Tools-at-Beyond-Polish_300x.jpg?v=1714965687'} star={'*****'} pera={'CND - Shellac Hazy Games (0.25 oz)'} price={'$15.99'} />
              </div>
            </Slider>

          </Container>
        </Container>
        <Featured/>
      </div>
    </>
  );
}
      
  export default Tools;