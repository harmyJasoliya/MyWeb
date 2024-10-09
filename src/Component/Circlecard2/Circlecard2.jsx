import React from "react";
import Container from 'react-bootstrap/Container';
import Circle from './Circle';
const Circlecard2 = () => {
    return (

        <Container>
            <Container fluid>
                <div className="w-100">
                    <div className="heading"><h2>Shop By Category</h2></div>
                    <div className="circard flex">
                        <Circle img="https://www.beyondpolish.com/cdn/shop/files/CND_Logo.png?v=1698183774" />
                        <Circle img="https://www.beyondpolish.com/cdn/shop/files/gelish_logo_1.png?v=1698183848" />
                        <Circle img="https://www.beyondpolish.com/cdn/shop/files/OPI_Logo_472x.png?v=1698183861" />
                        <Circle img="https://www.beyondpolish.com/cdn/shop/files/madam_glam_logo.jpg?v=1698183882" />
                        <Circle img="https://www.beyondpolish.com/cdn/shop/files/dnd_logo.jpg?v=1698183930" />
                        <Circle img="https://www.beyondpolish.com/cdn/shop/files/apres.png?v=1698184113" />
                        <Circle img="https://www.beyondpolish.com/cdn/shop/files/Piggy-Paint-Logo-black.png?v=1698183944" />

                    </div>
                </div>
            </Container>
        </Container>

    );
}
export default Circlecard2;