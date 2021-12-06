import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Card, Button, Alert } from 'bootstrap-4-react/lib/components';
import { connect } from 'react-redux'
import citiesActions from "../redux/actions/citiesAction.js";
import itineraryActions from '../redux/actions/itineraryActions';
import Accordion from 'react-bootstrap/Accordion'



const City = (props) => {
    let { id } = useParams();


    useEffect(() => {
        props.getOneCity(id)
        props.getItinerary(id)

    }, [])

    console.log(props)



    return (
        <div className="container-fluid" align="center">
            <div className="cardCity">
                <img className="imgCity" src={props.oneCity.image} />
                <Alert warning><h2>Enjoy {props.oneCity.name}</h2></Alert>
            </div>
            {props.itinerary.length === 0
                ? <Alert warning><h2>This City has no itinerary yet, Try other City please..</h2></Alert>

                : props.itinerary.map((item) => {
                    return (
                        <div>
                            <Card bg='info' className="text-center">
                                <Card.Header><h1>{item.name} {item.lastName}</h1></Card.Header>
                                <Card.Body>
                                    <img className="imgCity2" src={item.personImage} width="20%" />
                                    <Card.Text>
                                        <p className="price"><h3>Price: {"💵".repeat(item.price)}</h3></p>
                                        <p className="price"><h5>Hashtags: {item.hashtags}</h5></p>
                                        <p className="price"><h5>Likes: {item.likes}</h5></p>
                                    </Card.Text>
                                    <p className="price"><h2>Duration: {item.duration}</h2></p>

                                </Card.Body>
                                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                                <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><h1>View More</h1></Accordion.Header>
                                    <Accordion.Body>
                                    <Alert warning><h2>Under Construction</h2></Alert>

                                    </Accordion.Body>
                                </Accordion.Item>
                                </Accordion>
                            </Card>
                            <div>
                            </div>
                        </div>
                    );
                })}
            <Link to="/cities" ><Button secondary lg className="backCities">Back to cities</Button></Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        oneCity: state.cityReducer.city,
        itinerary: state.itineraryReducer.itinerary,
    }
}

const mapDispatchToProps = {
    getOneCity: citiesActions.GetCity,
    getItinerary: itineraryActions.getItineraryByCity,
}
export default connect(mapStateToProps, mapDispatchToProps)(City)
