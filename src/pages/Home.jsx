import React from 'react';
import { PaskagesBtn } from '../components/PaskagesBtn';
import './Home.css';
import AboutImg from '../utils/img/about.jpg';
import {Link} from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../utils/img/bg-hero.jpg';
import Ia from '../utils/img/Ia.png';
import Wa from '../utils/img/Wa.png';
import Fa from '../utils/img/Fa.png';

function Home() {
        return (
            <div className='home-page'>
                <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                                    <h2 className='mb-0 text-black fw-bolid '>Welcome To</h2>
                                    <h1 className='mb-5 text-black fw-bolid '> DI Tur</h1>
                                    <PaskagesBtn/>
                            </div>
                        </div>
                    </div>
                </header>  

                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                            <img src={AboutImg} className='img-fluid w-50' alt="about img"/>
                        </div>

                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
                        <p>We organize tours from Almaty to any place in Kazakhstan. We offer all the most popular types of recreation: beach, sightseeing, skiing, medical, etc. 
                The quality of our services meets the highest requirements, as our partners are reliable airlines and the best travel companies in Kazakhstan. 
                On our website you will find a large selection of vouchers and burning tours!
            
                If you have not yet decided on the choice of a vacation destination, we will definitely help you and give you valuable advice. 
                The experienced staff of our travel agency in Almaty will select the best offer for you in terms of price and quality. 
                We have a license for tourism activities, so you can have no doubt about the reliability of our travel company.
                 We guarantee that you will get exactly what you paid your money for.</p>
                        <p className='mb-5'> You can purchase a ticket in our office, or remotely (online). 
                Instagram Facebook and Instagram pages, where messages about the best deals regularly appear, to save on travel, 
                subscribe to the newsletter of burning tours by email, or to our pages on Facebook and Instagram.</p>
                        <Link to="/about">
                            <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='paskages-section py-5 text-light shadow'>
                    <div className='container d-flex flex-column align-items-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Guides</h2>
                      <div className='row mb-5 w-100'>
                         <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>City</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Almaty</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>$1500</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Astana</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>$1600</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Shymkent</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>$1700</p>
                                </li>
                            </ul>

                         </div>

                         <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Nature</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Mountains</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>$500</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Water</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>$600</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Plase</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>$700</p>
                                </li>
                            </ul>

                         </div>
                      </div>
                        <PaskagesBtn/>
                    </div>
                </div>



            <ImageGallery/>

            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                       

                    <div className="sb__footer-links-div">
                        <h4>For Business</h4>
                        <a href="/home">
                            <p>Home</p>
                        </a>
                        <a href="/paskages">
                            <p>Paskages</p>
                        </a>
                        <a href="/about">
                            <p>About</p>
                        </a>

                    </div>

                    <div className="sb__fotter-links_div">
                    <h4>Resources</h4>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                        <a href="/shop">
                            <p>Shop</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>

                    <div className="sb__fotter-links_div">
                    <h4>Company</h4>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                        </div>

                        <div className="sb__fotter-links_div">
                    <h4>Company</h4>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                        </div>
                        <div className="sb__footer-links_div">
                            <h4>Coming soon on</h4>
                            <div className="socialmedia">
                                <p> <img src={Ia} alt=""/></p>
                                <p> <img src={Wa} alt=""/></p>
                                <p> <img src={Fa} alt=""/></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            </div>
        )

}

export default Home;