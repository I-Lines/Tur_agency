import React from 'react';
import './About.css';
import AboutWe from '../utils/img/We.jpg';
import AboutHe from '../utils/img/He.jpg';
import R from '../utils/img/R.jpg';
import Z from '../utils/img/Z.jpg';

import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';


function About() {
        return (
            <div className='about-page'>
                <header className='mt-5'>
                    <div className='container h-100 d-flex align-items-center justify-content-center'>
                        <h1 className='text-light'>About</h1>
                    </div>
                </header>   

                <div className='container my-5'>
                   
                    <p>We only travel around the city. We also have a direction to nature.  For example, the Balls canyon and Burabai borovoe. 
In general, we have many directions. This is a deliberate policy of our company. So people will be more focused on the place where they will go. Maybe some people can't spend a lot of time traveling. It's a part of people who will choose one place to stay.</p>
                
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={R} className='img-fluid my-4' alt=""/>

                    </div>

                    <div className='col-lg-6'>
                        <img src={Z} className='img-fluid my-4' alt=""/>

                    </div>

                </div>

                

                </div>

                <div className='bg-dark text-light'>
                    <ImageGallery/>

                </div>

                <div className='my-5'>
                    <Reviews/>

                </div>

            </div>
        )

}

export default About;