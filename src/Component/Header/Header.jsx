import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { IoHeartOutline , IoBagOutline,IoPersonOutline,IoSearch } from "react-icons/io5";
import { FaAlignLeft ,FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Header = () =>{
    return(
        <>
        <Navbar className="bg-body-tertiary head1">
            <Container>
            
              <Navbar.Brand href="#home">
              <FaAlignLeft 
              style={
                {
                  marginRight:'10px',
                  marginTop:'12px',
                  fontSize:'40px'
                }
              }/>
              {/* <IoMdList 
              style={
                {
                  marginRight:'20px',
                  fontSize:'35px',
                  marginTop:'5px'
                }
              }
            /> */}
              
                <Link to = "/">
                  <img
                  src="https://www.beyondpolish.com/cdn/shop/files/bp_logo_20231003.jpg?v=1696357720&width=880"
                  width="500px"
                  height="auto"
                  
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                  
                /></Link>
              
              </Navbar.Brand>
              <Form inline>
              <InputGroup>
                <Form.Control
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  
                  style={
                    {
                      width:'380px'
                    }
                  }
                  
                />
                <Button variant="secondary">{/* <IoSearch />*/} </Button> 
              </InputGroup>
              
            </Form>
            <div className="icon">
            <IoHeartOutline 
              style={
                {
                  fontSize: 'x-large',
                  fontWeight: 'bolder',
                  marginRight:'8px'
                }
              }
              />
              <IoBagOutline 
              style={
                {
                  fontSize: 'x-large',
                  fontWeight: 'bolder',
                  marginRight:'8px'
                }
              }/>
              <IoPersonOutline 
              style={
                {
                  fontSize: 'x-large',
                  fontWeight: 'bolder',
                  marginRight:'8px'
                }
              }/>
            </div>
            </Container>
          </Navbar>
          {/* drop down */}
        <div className = "head2">
            <div className="w-1140">
              <ul class="flex">
                {/* drop down head */}
                <Link to="/Brand"><li class="brand"><a href="">Brand</a>
                
                <div class="menu" align="center">
                                  <div class="flex row-gap">
                                      
                                      <div class="w-25">
                                          <h5>American Crew</h5>
                                          <h5>Apres</h5>
                                          <ul>
                                              <li><a href="">All Apres</a></li>
                                              <li><a href="">Gel Couleur</a></li>
                                              <li><a href="">Gel-X Tips</a></li>
                                              <li><a href="">Gel-X Nail Extension System</a></li>
                                              <li><a href="">Gel-X Nail Extension System French Manicure</a></li>
                                              <li><a href="">How To</a></li>
                                          </ul>
                                          <h5>Blossom</h5>
                                          <h5>Butter LONDON</h5>
                                          <h5>china Glaze</h5>
                                          <h5>cirque colors</h5>
                                      </div>
                                          <div class="w-25">
                                              <h5>CND</h5>
                                              <ul>
                                                  <li><a href="">All CND</a></li>
                                                  <li><a href="">Shellac Gel POlish</a></li>
                                                  <li><a href="">Vinylux Lacquer</a></li>
                                                  <li><a href="">Plexigel</a></li>
                                                  <li><a href="">Essentials</a></li>
                                              </ul>
                                              <h5>Color Club</h5>
                                              <h5>Cote</h5>
                                              <h5>The Creme Shop</h5>
                                              <h5>Cuccio</h5>
                                              <h5>Daily Charme</h5>
                                              <h5>Deco Beauty</h5>
                                              <h5>Deborah Lippman</h5>
                                          </div>
                                          <div class="w-25">
                                              <h5>DND-Daisy Nail Design</h5>
                                              <h5>Ella+Mila</h5>
                                              <h5>Essie</h5>
                                              <h5>Eva</h5>
                                              <h5>Flowery</h5>
                                              <h5>GENTLE PINK</h5>
                                              <h5>Gelish</h5>
                                              <ul>
                                                  <li><a href="">All Gelish</a></li>
                                                  <li><a href="">Gel Poslish</a></li>
                                                  <li><a href="">XPress Dip Power</a></li>
                                                  <li><a href="">Soft Gel Tips</a></li>
                                                  <li><a href="">PolyGel</a></li>
                                              </ul>
                                              <h5>IBD</h5>
                                          </div>
                                          <div className="w-25">
                                            <h5>I Scream Nails</h5>
                                            <h5>JINsoon</h5>
                                            <h5>KBShimmer</h5>
                                            <h5>Kenzico</h5>
                                            <h5>Kiara Sky</h5>
                                            <h5>Kupa</h5>
                                            <h5>Lily And Fox</h5>
                                            <h5>Londontown</h5>
                                            <h5>Loud Lacquer</h5>
                                            <h5>Modem Glam</h5>
                                            <h5>Makartt</h5>
                                            <h5>Maniology</h5>
                                            <h5>Medicool</h5>
                                          </div>
                                          <div class="w-25">
                                              <h5>Melody Susie</h5>
                                              <h5>Mischo Beauty</h5>
                                              <h5>Monika</h5>
                                              <h5>Morgan Taylor</h5>
                                              <h5>Mr.Pumice</h5>
                                              <h5>Nailboo</h5>
                                              <h5>Nail Tek</h5>
                                              <h5>Nails Mailed</h5>
                                              <h5>NCLA Beauty</h5>
                                              <h5>Nioxin</h5>
                                          </div>
                                          <div className="w-25">
                                            <h5>OPI</h5>
                                            <ul>
                                              <li>All OPI</li>
                                              <li>Gel Color</li>
                                              <li>Nail Lacquer</li>
                                              <li>Powder Perfection</li>
                                              <li>Infinite Shine</li>
                                              <li>Nature Strong</li>
                                              <li>Essentials</li>
                                              <li>Combo Sets</li>
                                            </ul>
                                            <h5>Orosa Beauty</h5>
                                            <h5>ORLY</h5>
                                            <h5>People Of Color</h5>
                                            <h5>Piggy Paint</h5>
                                            <h5>Revel Nail</h5>
                                          </div>
                                  </div>  
                              </div>
                          </li></Link>
                <Link to ='/New'><li class="new"><a href="">New</a>
                    <div class="menu" align="center">
                        <div class="flex row-gap">
                                      
                          <div class="w-25">
                              <h5>NEW ARRIVALS</h5>
                              <h5>BEST SELLERS</h5>
                              <h5>SELLING FAST</h5>
                              <h5>eGIFT CARD</h5>
                          </div>
                          <div class="w-25">
                            <h5>New Collection</h5>
                                <ul>
                                    <li><a href="">New Collection1</a></li>
                                    <li><a href="">New Collection2</a></li>
                                    <li><a href="">New Collection3</a></li>
                                    <li><a href="">New Collection4</a></li>
                                    <li><a href="">New Collection5</a></li>
                                    <li><a href="">New Collection6</a></li>
                                    <li><a href="">New Collection7</a></li>
                                    <li><a href="">New Collection8</a></li>
                                    <li><a href="">New Collection9</a></li>
                                </ul>
                            </div>
                            <div class="w-25">
                            <h5>Trending This Season</h5>
                                <ul>
                                    <li><a href="">Season1</a></li>
                                    <li><a href="">Season2</a></li>
                                    <li><a href="">Season3</a></li>
                                    <li><a href="">Season4</a></li>
                                    <li><a href="">Season5</a></li>
                                    <li><a href="">Season6</a></li>
                                    <li><a href="">Season7</a></li>
                                </ul>
                            </div>
                            <div class="w-25">
                            <h5>In The News</h5>
                                <ul>
                                    <li><a href="">News1</a></li>
                                    <li><a href="">News2</a></li>
                                    <li><a href="">News3</a></li>
                                    <li><a href="">News4</a></li>
                                    <li><a href="">News5</a></li>
                                    <li><a href="">News6</a></li>
                                    <li><a href="">News7</a></li>
                                    <li><a href="">News8</a></li>
                                    <li><a href="">News9</a></li>
                                </ul>
                            </div>
                          </div>
                        </div>
                </li></Link>
                <Link to ='/Gel'><li class="gel"><a href="">Gel</a>
                    <div class="menu" align="center">
                      <div class="flex row-gap">
                          <div className="w-25">
                            <h5>All Gel Polish</h5>
                            <h5>All Nails</h5>
                            <h5>Gel Top & Base Coats</h5>
                            <ul>
                                <li>All Gel Top & Base Coats</li>
                                <li>Gel Top Coats</li>
                                <li>Gel Base Coats</li>
                            </ul>
                            <h5>Gel Tools</h5>
                            <ul>
                              <li>All Gel Tools</li>
                              <li>Nail Lamps</li>
                            </ul>
                          </div>
                          <div className="w-25">
                            <h5>Removers & Cleansers</h5>
                            <ul>
                              <li>Gel Removal Essential</li>
                              <li>Removers</li>
                              <li>Cleansers</li>
                            </ul>
                            <h5>Gel Art Liners</h5>
                            <h5>Featured Gel Brands</h5>
                            <ul>
                              <li>OPI GelColor</li>
                              <li>CND Shellac</li>
                              <li>DND-Daisy Nail Design</li>
                              <li>Harmony Gelish Gel</li>
                              <li>Madam Glam</li>
                              <li>IBD</li>
                            </ul>
                          </div>
                          <div className="w-25">
                            <h5>Gel Combo Deals</h5>
                            <ul>
                              <li>All Gel Sets</li>
                              <li>Gel Starter Kits</li>
                              <li>Gel Lamp Kits</li>
                              <li>Gel & Lacquer Duo</li>
                              <li>Gel,Base & Top Combo</li>
                              <li>Gel,Lacquer & Dip Combo</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                </li></Link>
                <Link to='/Lacquer'><li class="lacquer"><a href="">Lacquer</a>
                  <div class="menu" align="center">
                      <div class="flex row-gap">
                          <div className="w-50">
                              <h5>All Lacquer</h5>
                              <h5>All Nails </h5>
                              <h5>Lacquer Top & Base Coats</h5>
                              <ul>
                                <li>Lacquer Top Coats</li>
                                <li>Lacquer Base Coats</li>
                              </ul>
                              <h5>Hybrid Gel-Like Nail Lacquer</h5>
                              <ul>
                                <li>Hybrid Gel-Like Top Coats</li>
                                <li>Hybrid Gel-Like Base Coats</li>
                              </ul>
                              <h5>Kids Nail Polish</h5>
                              <h5>Removers & Cleansers</h5>
                              <ul>
                                <li>Removers</li>
                                <li>Cleansers</li>
                              </ul>
                            </div>
                            <div className="w-50">
                              <h5>Indie Brands</h5>
                              <h5>Clean Lacquer Brands</h5>
                              <h5>Featured Lacquer Brands</h5>
                              <ul>
                                <li>OPI Nail Lacquer</li>
                                <li>CND Vinylux</li>
                                <li>Cirque Color</li>
                                <li>I Scream Nails</li>
                              </ul>
                              <h5>Lacquer Nail Combo Deals</h5>
                              <ul>
                                <li>All Lacquer Nail Sets</li>
                                <li>Lacquer Starter KitS</li>
                                <li>Lacquer,Base & Top Combo</li>
                                <li>Gel & Lacquer Duo</li>
                                <li>Gel,Lacquer & Dip Combo</li>

                              </ul>
                            </div>
                          </div>
                        </div>
                  </li> 
                </Link>
                <Link to ='Dip'><li class="dip"><a href="">Dip</a>
                <div class="menu" align="center">
                      <div class="flex row-gap">
                            <div className="w-100">
                              <h5>All Dip Powders</h5>
                              <h5>Dip Powder Color</h5>
                              <h5>Dip Powder Essentials</h5>
                              <h5>Dip Powder Combo Deals</h5>
                              <ul>
                                <li>All Dip Powder Combos</li>
                                <li>Dip Starter Kits</li>
                                <li>Gel,Lacquer & Dip Combo</li>
                                <li>Lacquer & Dip Combo</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                </li></Link>
                <Link to ='Enhance'><li class="enhance"><a href="">Enhancements</a>
                <div class="menu" align="center">
                      <div class="flex row-gap">
                        <div className="w-25">
                          <h5>All Enhancements</h5>
                          <h5>Nail Extension Kits</h5>
                          <h5>press-ons</h5>
                          <h5>Soft Gel</h5>
                          <ul>
                            <li><a href="">Soft Gel</a></li>
                            <li><a href="">Builder Gel</a></li>
                            <li><a href="">Gel Nail Extension Kits</a></li>
                            <li><a href="">Apres Gel-X Nail Extension System</a></li>
                          </ul>
                          <h5>polyGel</h5>
                          <ul>
                            <li><a href="">PolyGel Starter Kits</a></li>
                          </ul>
                        </div>
                        <div className="w-25">
                          <h5>Acrylic</h5>
                          <ul>
                            <li><a href="">Acrylic System</a></li>
                            <li><a href="">Acrylic Powder</a></li>
                            <li><a href="">Acrylic Liquid</a></li> 
                          </ul>
                          <h5>Hard Gel</h5>
                          <h5>Drills & Drill Bits</h5>
                          <ul>
                            <li><a href="">Drills</a></li>
                            <li><a href="">Drill Bits</a></li>
                          </ul>
                        </div>
                    <div className="w-25">
                      <h5>Nail Enhancement Tools</h5>
                      <ul>
                        <li><a href="">Lamps</a></li>
                        <li><a href="">Nail Brushes</a></li>
                        <li><a href="">Nail Glue</a></li>
                        <li><a href="">Nail Tools & Accessories</a></li>
                        <li><a href="">Removers & Cleansers</a></li>
                        <li><a href="">Nail Forms</a></li>
                      </ul>
                      <h5>Nail Tips</h5>
                      <ul>
                        <li><a href="">Nail Tip Box Sets</a></li>
                        <li><a href="">Nail Tip Refill Bags</a></li>
                      </ul>
                    </div> 
                    <div className="w-25">
                      <h5>Shop By Nail Tip Shape</h5>
                      <ul>
                        <li><a href="">Almond</a></li>
                        <li><a href="">Coffin</a></li>
                        <li><a href="">Round</a></li>
                        <li><a href="">Square</a></li>
                        <li><a href="">Stiletto</a></li>
                        <li><a href="">Tapered</a></li>
                      </ul>
                      <h5>Shop by Nail Tip Style</h5>
                      <ul>
                        <li><a href="">French</a></li>
                        <li><a href="">Natural</a></li>
                        <li><a href="">Neutral</a></li>
                        <li><a href="">Sculpted</a></li>
                      </ul>
                    </div>
                    <div className="w-25">
                      <h5>Shop By Nail Tip Size</h5>  
                      <ul>
                        <li><a href="">Extra Short</a></li>
                        <li><a href="">Short</a></li>
                        <li><a href="">Medium</a></li>
                        <li><a href="">Extra Long</a></li>
                        <li><a href="">Extra Extra Long</a></li>
                        <li><a href="">Extra Extra Extra Long</a></li>
                      </ul>
                    </div>   
                    <div className="w-25">
                      <h5>Shop By Nail Tip Brands</h5>  
                      <ul>
                        <li><a href="">Apress Nail Tips</a></li>
                        <li><a href="">CND Nail Tips</a></li>
                        <li><a href="">Gelish Nail Tips</a></li>
                        <li><a href="">IBD Nail Tips</a></li>
                        <li><a href="">Kiara Sky Nail Tips</a></li>
                        <li><a href="">Makartt Nail Tips</a></li>
                        <li><a href="">Nailboo Nail Tips</a></li>
                        <li><a href="">Static Nails Nail Tips</a></li>
                      </ul>
                    </div> 
                  </div>
                </div>                   
                </li></Link>
                <Link to ='Tools'><li class="tool"><a href="">Essentials & Tool</a>
                <div class="menu" align="center">
                      <div class="flex row-gap">
                        <div className="w-25">
                          <h5>Shop All Tools</h5>
                          <h5>Nail Lamps</h5>
                          <h5>Top & Base Coats</h5>
                          <ul>
                            <li><a href="">All Top & Base</a></li>
                            <li><a href="">Top Coats</a></li>
                            <li><a href="">Base Coats</a></li>
                            <li><a href="">Apres Gel-X Nail Extension System</a></li>
                          </ul>
                        </div>
                          <div className="w-25">
                          <h5>Tools</h5>
                          <ul>
                            <li><a href="">All Tools</a></li>
                            <li><a href="">Dust Collectors</a></li>
                            <li><a href="">Drills & Drill Bits</a></li>
                            <li><a href="">Drying Tools</a></li>
                            <li><a href="">Clippers & Nippers</a></li>
                            <li><a href="">Files & Buffers</a></li>
                            <li><a href="">Brushes</a></li>
                            <li><a href="">Nail Glue & Adhesives</a></li>
                            
                          </ul>
                          </div>
                        <div class="w-25">
                          <h5>Removers & Cleansers</h5>
                          <ul>
                            <li><a href="">All Removers & Cleansers</a></li>
                            <li><a href="">Removers</a></li>
                            <li><a href="">Cleansers</a></li> 
                            <li><a href="">Nail Prep</a></li>
                            <li><a href="">Nail Thinners</a></li>
                          </ul>
                          <h5>Manicure & pedicure Tools</h5>
                          <h5>pedicure Tools</h5>
                          <h5>Cosmetics Tools</h5>
                          <h5>Nail Tips</h5>
                        </div>
                    </div> 
                  </div>
                </li></Link>
                <Link to ='Pressons'><li class="press"><a href="">Press-ons & NailArt</a>
                  <div class="menu" align="center">
                      <div class="flex row-gap">
                        <div className="w-50">
                          <h5>Press-Ons</h5>
                          <h5>Nail Art</h5>
                          <ul>
                            <li><a href="">All Nail Art</a></li>
                            <li><a href="">Nail Stickers</a></li>
                            <li><a href="">Glitter & Confetti</a></li>
                            <li><a href="">Nail Charms & Rhinestones</a></li>
                            <li><a href="">Nail Art Brushes & Tools</a></li>
                            <li><a href="">Gel Art Liners</a></li>
                            <li><a href="">Rub On Nail Powders</a></li>
                          </ul>
                        </div>
                        <div className="w-50">
                          <h5>Nail Stamps</h5>
                          <ul>
                            <li><a href="">All Nail Stamps</a></li>
                            <li><a href="">Stamping Tools</a></li>
                            <li><a href="">Stamping Plates</a></li>
                            <li><a href="">Stamping Nail Polish</a></li>
                            <li><a href="">Stamping Starter Kit</a></li>
                          </ul>
                          <h5>Nail Wraps</h5>
                          <ul>
                            <li><a href="">All Nail Wraps</a></li>
                            <li><a href="">Nail Polish Wraps</a></li>
                            <li><a href="">Gel Nail Wraps</a></li>
                            <li><a href="">Nail Mailed Pedicure Wraps</a></li>
                          </ul>
                        </div>
                      </div>
                  </div>
                </li></Link>
                <Link to ='Beauty'><li class="beauty"><a href="">Beauty</a>
                  <div class="menu" align="center">
                      <div class="flex row-gap">
                        <div className="w-50">
                          <h5>All Beauty</h5>
                          <h5>Hair</h5>
                          <ul>
                            <li><a href="">All Hair</a></li>
                            <li><a href="">Shampoo & Conditioner</a></li>
                            <li><a href="">Hair Styling & Treatments</a></li>
                          </ul>
                          <h5>Body & Skin</h5>
                          <ul>
                            <li><a href="">All Body & Skin</a></li>
                            <li><a href="">Lotions</a></li>
                            <li><a href="">Body Scrub</a></li>
                            <li><a href="">Hand Sanitizer</a></li>
                            <li><a href="">Hand Soap</a></li>
                          </ul>
                        </div>
                        <div className="w-50">
                          <h5>Face</h5>
                          <ul>
                            <li><a href="">All Face</a></li>
                            <li><a href="">Make Up</a></li>
                            <li><a href="">Lip Care</a></li>
                            <li><a href="">Cosmetics</a></li>
                          </ul>
                          <h5>Jewelry</h5>
                          <ul>
                            <li><a href="">All Jewelry</a></li>
                            <li><a href="">Rings</a></li>
                            <li><a href="">Earrings</a></li>
                            <li><a href="">Necklaces</a></li>
                            <li><a href="">Bracelets</a></li>
                          </ul>
                          <h5>Apparel</h5>
                        </div>
                      </div>
                    </div>
                </li></Link>
                <Link to ='Sale'><li class="sale"><a href="">Sale</a>
                  <div class="menu" align="center">
                      <div class="flex row-gap">
                        <div className="w-100">
                          <h5>All Sale</h5>
                          <h5>40% OFF Clearance</h5>
                          <h5>Combos Deals</h5>
                          <h5>Mystery Boxes</h5>
                        </div>
                      </div>
                  </div>
                </li></Link>
                <Link to ='Collection'><li class="collec"><a href="">Collection</a>
                    <div class="menu" align="center">
                      <div class="flex row-gap">
                        <div className="w-25">
                          <h5>All New Collections</h5>
                          <h5>Clean Beauty</h5>
                          <h5>Indie Brand</h5>
                          <h5>K-Beauty</h5>
                          <ul>
                            <li><a href="">Korean Gels</a></li>
                          </ul>
                          <h5>Apres</h5>
                          <ul>
                            <li><a href="">All Apres</a></li>
                            <li><a href="">Gel Couleur</a></li>
                            <li><a href="">Neutrals Gel-X Tips 2.0</a></li>
                            <li><a href="">Neutrals Gel-X Tips</a></li>
                            <li><a href="">Gel-X Tips V2</a></li>
                            <li><a href="">Gel-X Tips</a></li>
                          </ul>
                        </div>
                        <div className="w-25">
                          <h5>Chin Glaze</h5>
                          <ul>
                            <li><a href="">Meadow Dreams</a></li>
                            <li><a href="">Love & Kisses</a></li>
                            <li><a href="">Wonka</a></li>
                          </ul>
                          <h5>Cirque Colors</h5>
                          <ul>
                            <li><a href="">Glazed 2024</a></li>
                            <li><a href="">Encore</a></li>
                            <li><a href="">Atelier</a></li>
                            <li><a href="">Far Far Away</a></li>
                            <li><a href="">Holodaze Shop</a></li>
                          </ul>
                        </div>
                        <div className="w-25">
                          <h5>CND</h5>
                          <ul>
                            <li><a href="">Across The Mani-verse</a></li>
                            <li><a href="">Megical Botany</a></li>
                            <li><a href="">Upcycle Chic</a></li>
                            <li><a href="">Bizarre Beauty</a></li>
                            <li><a href="">Shade Sense</a></li>
                            <li><a href="">Colorworld</a></li>
                          </ul>
                          <h5>Deborah Lippmann</h5>
                          <ul><li><a href="">Glam</a></li></ul>
                        </div>
                        <div className="w-25">
                          <h5>DND</h5>
                          <ul>
                            <li><a href="">DC Free Spirit</a></li>
                            <li><a href="">Overly Top Gel</a></li>
                            <li><a href="">Sheer</a></li>
                            <li><a href="">Super Platinum</a></li>
                            <li><a href="">Super Glitter</a></li>
                            <li><a href="">Gel Nail Art Liners</a></li>
                            <li><a href="">Mood Change</a></li>
                            <li><a href="">DC Mermaid</a></li>
                            <li><a href="">DC Platinum</a></li>
                          </ul>
                        </div>
                        <div className="w-25">
                          <h5>Essie</h5>
                          <ul>
                            <li><a href="">Blushin' & Crushin'</a></li>
                            <li><a href="">Odd Squad</a></li>
                            <li><a href="">Step Out Of Line</a></li>
                            <li><a href="">Push Play</a></li>
                            <li><a href="">Gel Couture Regal Rebel</a></li>
                            <li><a href="">Feel The Fizzle</a></li>
                            <li><a href="">Guilty Pleasures</a></li>
                          </ul>
                          <h5>Gelish/Morgan Taylor</h5>
                          <ul>
                            <li><a href="">Lace Is More</a></li>
                            <li><a href="">On My Wish List</a></li>
                            <li><a href="">Change Of pace</a></li>
                            {/* <li><a href="">Splash Of Color</a></li>
                            <li><a href="">Pure Beauty</a></li> */}
                          </ul>
                        </div>
                        <div className="w-25">
                          <h5>I Scream Nails</h5>
                          <ul>
                          <li><a href="">Fast Lane</a></li>
                          <li><a href="">Fortune Tellers</a></li>
                          <li><a href="">The Fantasy Land</a></li>
                          <li><a href="">PLUS Shifting Holos</a></li>
                          <li><a href="">Earth Angels</a></li>
                          <li><a href="">Magnetic</a></li>
                          </ul>
                          <h5>KBShiMMer</h5>
                          <ul>
                            <li><a href="">Sea-ing is Believing</a></li>
                            <li><a href="">Best In Snow</a></li>
                            <li><a href="">It's Fall About You</a></li>
                            <li><a href="">Sugar Rush</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                </li></Link>
                <Link to ='Dip'><li class="blog"><a href="">Blog</a></li></Link>
          </ul>
        </div>
      </div>
      </>
    );
}

export default Header;