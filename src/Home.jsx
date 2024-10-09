
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

// slider

import React, { Component } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Header

import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { IoHeartOutline , IoBagOutline,IoPersonOutline,IoSearch } from "react-icons/io5";
import { FaAlignLeft ,FaRegHeart } from "react-icons/fa";

// Component
import Header from './Component/Header/Header';
import Bigimg from './Component/Header/Bigimg';
import Opispring from './Component/Header/Card/Opispring';
import Ourslider from "./Component/slider1/Ourslider";
import Ourslider1 from "./Component/Ourslider1/Ourslider1";
import Circlecard1 from './Component/shop by category/Circlecard1';
import Dealsteal from './Component/Dealsteal/Dealsteal';
import Circlecard2 from './Component/Circlecard2/Circlecard2';
import Colorclub from './Component/Colorclub/Colorclub';
import Trending from './Component/Trending/Trending';
import Beyondbotl from './Component/Beyondbottle/Beyondbotl';
import Foot1 from './Component/Footer1/Foot1';
import Foot2 from './Component/Footer2/Foot2';
import Black from './Component/Lastblack/Black';
import { Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';


// dropdowns
import Brand from './Pages/Brand';
import New from './Pages/New/New';
import Gel from './Pages/Gel/Gel';
import Lacquer from './Pages/Lacquer'
import Enhance from './Pages/Enhance';
import Tools from './Pages/Tools';
import Pressons from './Pages/Pressons';
import Beauty from './Pages/Beauty';
import Sale from './Pages/Sale';
import Collection from './Pages/Collection';
import Blog from './Pages/Blog';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const Home = () =>{
    return(
        <>
        
         
         
         <Bigimg />
         <Opispring/>
         <Ourslider/>
         <Circlecard1/>
         <Dealsteal/>
         <Circlecard2/>
         <Ourslider1/>
        <Colorclub/>
        <Trending/>
        <Beyondbotl/>
        <Foot1/>
        <Foot2/>
        
        


        
      </>
    );
}
export default Home;