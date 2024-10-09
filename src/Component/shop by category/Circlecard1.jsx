import React from "react";
import Container from 'react-bootstrap/Container';
import Circle from "./Circle";
const Circlecard1 = () => {
    return (
       
            <Container>


                <div className="w-100">
                    <div className="heading"><h2>Shop By Category</h2></div>
                    <div className="circard flex">
                        <Circle img="https://www.beyondpolish.com/cdn/shop/files/CND-Shellac-Combo-Base-Top-Drama-Queen-Gel-Polish-at-Beyond-Polish-4_540x.jpg?v=1714906083" head="Gel Polish" />
                        <Circle img="https://www.beyondpolish.com/cdn/shop/files/Londontown-Lakur-Enhanced-Colour-Ski-Bunny-0_4-oz-Nail-Lacquer-at-Beyond-Polish-3.jpg?v=1715033216" head="Nail Lacquer" />
                        <Circle img="https://www.beyondpolish.com/cdn/shop/files/revel-nail-dip-powder-d481-imagi.png?v=1715019621" head="Dipping Powder" />
                        <Circle img="https://www.beyondpolish.com/cdn/shop/files/minimalist_1_540x.jpg?v=1697847951" head="Nail Enhancement" />
                        <Circle img="https://i.etsystatic.com/28067508/r/il/e111e3/3080037813/il_fullxfull.3080037813_8djq.jpg" head="Nail Tools" />
                        <Circle img="https://www.beyondpolish.com/cdn/shop/files/lamp_1_540x.jpg?v=1714951504" head="Lamps" />
                        <Circle img="https://www.beyondpolish.com/cdn/shop/files/CND-Solar-Oil-0_5-oz-Nail-Treatment-at-Beyond-Polish-4_447x.webp?v=1714768079" head="Nail Care" />
                        <Circle img="https://www.beyondpolish.com/cdn/shop/files/Maniology-Stamping-Plate-Fireworks-Frenzy-M445-Nail-Art-at-Beyond-Polish-3_450x.jpg?v=1715035318" head="Nail Art" />
                    </div>
                </div>
            </Container>
    );
}
export default Circlecard1;