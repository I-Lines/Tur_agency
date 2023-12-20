import React from 'react';
import './Paskages.css';
import {Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import WeImg from '../utils/img/We.jpg';
import HeImg from '../utils/img/He.jpg';
import AeImg from '../utils/img/Ae.jpg';
import TeImg from '../utils/img/Te.jpg';

const guid = [
{
    id:1,
    name: 'Mountains',
    description: 'Tien-Shan Range,Altai Mountains,Altyn Shoki,Bayanaul Mountains,Karkaraly Mountains,Tegelen.',
    price: '$1000'
}


];


const lunch = [
    {
        id:1,
        name: 'City in Kazakhstan',
        description: 'Almaty,Astana,Shymkent,Atrau,Ust-Kamengrosk',
        price: '$1000'
    }
];


const dinner = [
    
    {
        id:3,
        name: 'Attractions',
        description: 'Aral and Caspian Seas, a number of picturesque lakes (Balkhash, Issyk-Kul, Kok-kol, Markakol, Big Almaty), Aksu-Zhabagly Nature Reserve and Altyn-Emel national park with the famous Singing Sand Dune.',
        price: '$1000'
    }
];

const dessert = [
    
    {
        id:3,
        name: 'Monuments',
        description: 'Dombaul Mausoleum, Alashakhan, Babaji Khatun, Karakhan, Khoja Akhmet Yasavi, Beket Ata.',
        price: '$1000'
    }
];









function Paskages() {
        return (
            <div className='paskages-page'>
                <header className='mt-5'>
                    <div className='container h-100 d-flex align-items-center justify-content-center'>
                        <h1 className='text-light'>Paskages</h1>
                    </div>
                </header>
                
            <div className='guid my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Abdirov Murat</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={WeImg} className='img-fluid w-75 mt-4 mt-lg-0' alt=""/>
                        </div>

                    <div className='col-lg-6 d-flex flex-column justify-content-around'>
                        {guid.map((guid) => ( 
                            <div key={guid.id}>
                                <Card className='border-0'>
                                    <CardBody>
                                        <CardTitle className='text-center fs-3'> {guid.name}</CardTitle>
                                        <CardText className='text-center fs-5'> {guid.description}</CardText>
                                        <CardText className='text-center fs-3 fw-bold text-success'> {guid.price}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='lunch bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Smagulov Balat 

</h2>
                    <div className='row '>
                    <div className='col-lg-6 d-flex flex-column justify-content-around'>
                        {lunch.map((lunch) => ( 
                            <div key={lunch.id}>
                                <Card className='border-0 bg-dark text-light '>
                                    <CardBody>
                                        <CardTitle className='text-center fs-3'> {lunch.name}</CardTitle>
                                        <CardText className='text-center fs-5'> {lunch.description}</CardText>
                                        <CardText className='text-center fs-3 fw-bold text-success'> {lunch.price}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            
                            <img src={HeImg} className='img-fluid w-75 mt-4 mt-lg-0' alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Karimov Ospan</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={AeImg} className='img-fluid w-75 mt-4 mt-lg-0' alt=""/>
                        </div>

                    <div className='col-lg-6 d-flex flex-column justify-content-around'>
                        {dinner.map((dinner) => ( 
                            <div key={dinner.id}>
                                <Card className='border-0'>
                                    <CardBody>
                                        <CardTitle className='text-center fs-3'> {dinner.name}</CardTitle>
                                        <CardText className='text-center fs-5'> {dinner.description}</CardText>
                                        <CardText className='text-center fs-3 fw-bold text-success'> {dinner.price}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='dessert bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Gabdullin Serik</h2>
                    <div className='row '>
                    <div className='col-lg-6 d-flex flex-column justify-content-around'>
                        {dessert.map((dessert) => ( 
                            <div key={dessert.id}>
                                <Card className='border-0 bg-dark text-light '>
                                    <CardBody>
                                        <CardTitle className='text-center fs-3'> {dessert.name}</CardTitle>
                                        <CardText className='text-center fs-5'> {dessert.description}</CardText>
                                        <CardText className='text-center fs-3 fw-bold text-success'> {dessert.price}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            
                            <img src={TeImg} className='img-fluid w-75 mt-4 mt-lg-0' alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        
        
        )

}

export default Paskages;