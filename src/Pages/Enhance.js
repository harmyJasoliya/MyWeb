import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Select from './Select';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headslide from '../headslide/Headslide';
import Featured from '../Component/Featured/Featured';



const Enhance = () => {


  var set = {
    infinite: false,
    speed: 500,
    slidesToShow: 8,
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
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
  }
  return (
    <>

      <div className="Brandhead">
        <div className="w-100">
          <Container flude>
            <Container>
              <div className=" d-flex justify-content-center"><h1>All Enhancement</h1></div>
            </Container>
          </Container>
        </div>
      </div>
      <div className="slider-container">
        <Headslide/>
        <Container fluid>
          <Container>
            <div className="heading">
              <h1>Pick Up For You</h1>
            </div>
            <Slider {...settings}>
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
                          <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Oz-Mazing-0_5-oz-Gel-Polish-at-Beyond-Polish_2c297fcd-b9b0-4e48-9fc0-b7a4e493b5c1_300x.jpg?v=1727986458'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Intelli-Gel-Oz-Mazing-0_5-oz-Gel-Polish-at-Beyond-Polish-2_f0e92229-7432-4c11-8e08-683ce9c0feab_300x.jpg?v=1727986463'} star={'*****'} pera={'OPI GelColor - Suga Cookie 0.5 oz - #GCS018'} price={'$19.99'} />
                       </div>
                       <div>
                        <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Apres-Hello-Kitty-Omni-Light-Manicure-Pedicure-Tools-at-Beyond-Polish_4326b39f-a0fa-4bb1-a329-d935a8d0bc69_300x.jpg?v=1720039313'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/apres-Hello-Kitty-Omni-Light-Manicure-Pedicure-Tools-at-Beyond-Polish-2_300x.jpg?v=1719352024'}star={'*****'} pera={'OPI GelColor - Suga Cookie 0.5 oz - #GCS018'} price={'$19.99'} />
                       </div>
                       <div>
                        <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/Apres-Caty-Eye-Gel-Couleur-Kuromi-Note-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1720815706'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/Apres-Caty-Eye-Gel-Couleur-Kuromi-Note-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1720820534'}star={'*****'} pera={'OPI GelColor - Suga Cookie 0.5 oz - #GCS018'} price={'$19.99'} />
                       </div>
                       <div>
                        <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Hello-Kitty-Hello-Pretty-0_5-oz-GCHK04-Gel-Polish-at-Beyond-Polish_32397094-f039-4e21-ae59-43a1bc18f3f1_300x.jpg?v=1718918900'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Hello-Kitty-Hello-Pretty-0_5-oz-GCHK04-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1718918907'}star={'*****'} pera={'OPI GelColor - Suga Cookie 0.5 oz - #GCS018'} price={'$19.99'} />
                       </div>
                       <div>
                        <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-x-Hello-Kitty-50-Anniversary-Gel-Trio-Pack-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1724701471'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-x-Hello-Kitty-50-Anniversary-Gel-Trio-Pack-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1724701471'} star={'*****'} pera={'OPI GelColor - Suga Cookie 0.5 oz - #GCS018'} price={'$19.99'} />
                       </div>
                       <div>
                        <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-BeeFfr-0_5-oz-GCS034-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1715044199'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-BeeFfr-0_5-oz-GCS034-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1715044204'} star={'*****'} pera={'OPI GelColor - Suga Cookie 0.5 oz - #GCS018'} price={'$19.99'} />
                       </div>
                       <div>
                          <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-I-Can-Buy-Myself-Violets-0_5-oz-NLS030-Nail-Lacquer-at-Beyond-Polish_8f4a9249-c270-44b4-98b6-e6204ff416af_300x.jpg?v=1715455734'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-I-Can-Buy-Myself-Violets-0_5-oz-NLS030-Nail-Lacquer-at-Beyond-Polish-2_300x.jpg?v=1715374243'} star={'*****'} pera={'OPI GelColor - Suga Cookie 0.5 oz - #GCS018'} price={'$19.99'} />
                       </div>
                       <div>
                          <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Purrrride-0_5-oz-NLS032-Nail-Lacquer-at-Beyond-Polish_e09ed44c-cbc4-426e-a15e-dede44297342_300x.jpg?v=1715455744'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-Nail-Lacquer-Purrrride-0_5-oz-NLS032-Nail-Lacquer-at-Beyond-Polish-2_300x.jpg?v=1715374326'} star={'*****'} pera={'OPI GelColor - Suga Cookie 0.5 oz - #GCS018'} price={'$19.99'} />
                       </div>
                       <div>
                          <Select img1={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Y2Slay-0_5-oz-GCF018-Gel-Polish-at-Beyond-Polish_300x.jpg?v=1721856427'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/OPI-GelColor-Y2Slay-0_5-oz-GCF018-Gel-Polish-at-Beyond-Polish-2_300x.jpg?v=1722029182'} star={'*****'} pera={'OPI GelColor - Suga Cookie 0.5 oz - #GCS018'} price={'$19.99'} />
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

            </Container>
          </Container>
          <Featured/>
        </div>

      </>
    </>
  );
}
export default Enhance;



