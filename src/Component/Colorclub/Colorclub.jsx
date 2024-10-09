import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Club from './Club'
import Container from 'react-bootstrap/Container';
const Colorclub = () => {
  return (

    <Container>
      <Container fluid>
        <div className="d-flex club mb-5">
          <div className="col-5 clubimg">
            <img src="//www.beyondpolish.com/cdn/shop/files/Featured_Collection_2.png?v=1711994599" alt="" />
          </div>

          <div className="col-6 mb-5">
            <div className="clubheading">
              <h1>Color Club</h1>
            </div>
            <div>
              <div className="d-flex">
                <div>
                  <Club img1={'//www.beyondpolish.com/cdn/shop/files/gel_bottle_large_da59ba49-64e3-4d06-ad1f-79c4a056a0dd.jpg?v=1709069014'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/444001_CND_2023_SPRING24ACROSSTHEMANIVERSE_ECOMM_LIQUIDSWATCH_HIPPIEOCRACY_COBRANDED_RGB_3000x3000_TRANSPARENT_32039f3a-a66f-4a36-9b76-e38a08487fa2_300x.jpg?v=1707866432'} star={'*****'} pera={'CND - Shellac Hippie-Ocracy (0.25 oz)'} price={'$15.99'} />

                </div>
                <div>
                  <Club img1={'//www.beyondpolish.com/cdn/shop/files/1221-GirlGangcopy_large_a30784dc-3e3d-40a8-a68d-bf2c29b911e1.jpg?v=1709069118'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/chill-_em-with-kindness_swatch_300x.jpg?v=1707868447'} star={'*****'} pera={'OPI GelColor - Chill Em With Kindness 0.5 oz - #GCHPQ07'} price={'$19.99'} />
                </div>
                <div>
                  <Club img1={'//www.beyondpolish.com/cdn/shop/files/1222-CanYouNot-size_large_4c41c8c5-b084-48d6-a0e1-ffffcb256668.jpg?v=1709069122'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/443935_CND_2023_HOLIDAY23MAGICALBOTANY_HANDBOTTLE_COBRANDED_FOREVERGREEN_RGB_3000x4000_e7b7c38b-7631-4ad1-b33f-9b5688e34754_300x.jpg?v=1696165394'} star={'*****'} pera={'CND - Shellac Forevergreen (0.25 oz)'} price={'$15.99'} />
                </div>
                <div>
                  <Club img1={'//www.beyondpolish.com/cdn/shop/files/1223-TakeAChillPill-COLOR_002_la.jpg?v=1709069127'} img2={'https://cdn.shopify.com/s/files/1/0870/2574/files/cndstrengthenerrxxlifestyle_300x.jpg?v=1707865363'} star={'*****'} pera={'CND - Strengthener Rxx 0.5 oz'} price={'$14.99'} />
                </div>
              </div>
            </div>
            <div className="wbtn"><button className='ms-6'>VIEW ALL</button> </div>

          </div>
        </div>
      </Container>
    </Container>

  );
}
export default Colorclub;