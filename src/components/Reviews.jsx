import React from "react";
import {Card, CardBody, CardText, CardFooter, CardTitle} from 'react-bootstrap';
import './Reviews.css';
import Person1 from '../utils/img/person1.png';
import Person2 from '../utils/img/person2.jpg';
import Person3 from '../utils/img/person3.jpg';
import Person4 from '../utils/img/person4.jpg';

export function Reviews () {
    return (
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                There is a feeling that we have made a film directed by our guide. The main roles belonged to us! 
                    The story of each day will become the book of my life. 
                    I appreciate every hour of travel and fills it with maximum beauty and knowledge of the world.
                                </CardText>

                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt=""/>
                            <CardTitle className="text-success">Askar Ilyasov</CardTitle>
                        </CardFooter>
                    </Card>

                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                I recommend as an option of a "reset" vacation, to change the office household to a sea of emotions and positive impressions! 
                    I advise you!
                                </CardText>

                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt=""/>
                            <CardTitle className="text-success">Tauekel Muslim</CardTitle>
                        </CardFooter>
                    </Card>

                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                I had a very cool weekend in Burabai! I had a full rest in 2 days! I looked at the mountains, the sea.
                     I liked the most intense and thoughtful route - we managed a lot and did not get tired. It was interesting, fun, dynamic and very tasty. 
                    I recommend as an option of a "reset" vacation, to change the office household to a sea of emotions and positive impressions! 
                    I advise you!
                                </CardText>

                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt=""/>
                            <CardTitle className="text-success">Nurlan Saburov</CardTitle>
                        </CardFooter>
                    </Card>

                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                I traveled through the mountains of Almaty. 
                    The most positive impressions remained - every day is not like one another, incredible emotions and impressions, chilling and active recreation.
                     The key to success is to approach every trip with a soul! 
                    Travel and your hair will be soft and silky!
                                </CardText>

                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt=""/>
                            <CardTitle className="text-success">Artur Tolepov</CardTitle>
                        </CardFooter>
                    </Card>

                </div>
            </div>
        </div>
    )
}
