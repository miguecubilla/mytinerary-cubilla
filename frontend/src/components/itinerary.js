import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import itinerariosActions from '../redux/actions/itineraryActions';
import Accordion from "react-bootstrap/Accordion";
import Comments from "./comments";
import Heart from '../components/assets/img/heart.png';
import HeartRed from '../components/assets/img/heartRed.png';
import Activity from '../components/activity';





const Swal = require('sweetalert2')


const Itinerary = (props) => {
  const [like, setLike] = useState(true)
  const [itinerariesLikes, setItinerariesLikes] = useState(props.Itineraries.likes)
  const [collapse, setCollapse] = useState(true);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    props.getActivitiesByItinerary(props.Itineraries._id).then((res) => {
      setActivities(res);
    });
  }, []);
  const toggleInfo = () => {
    setCollapse(!collapse)
  }
  const likeItinerary = async () => {
    setLike(false)
    if (!props.token) {
      Swal.fire({
        icon: 'error',
        title: 'You must be logged to like this post!'
      })
    } else {
      let response = await props.likeDislike(props.Itineraries._id, props.token)
      setItinerariesLikes(response.data.response)
    }
    setLike(true)
  }
  let heart = itinerariesLikes.includes(props.userId) ? HeartRed : Heart
 
  return (
    <div className="itinerarioContenedor">
      <div className="headerItinerario">
        <img className="iconoItinerarios" src={props.Itineraries.personImage} />
        <div className="media-body">
          <div className="nombreGuia" >
            {props.Itineraries.name} {props.Itineraries.lastName}
          </div>

          <div>
            <div className="dato2">
              <p className="pricio">Price: {"💵".repeat(props.Itineraries.price)}</p>
              <p className="duration">Duration: {props.Itineraries.duration}</p>
            </div>

            <div className="datos3">
              <div className="hastag">
                {props.Itineraries.hashtags.map((e) => {
                  return (
                    <div className="hastags">
                      <p>{e}</p>
                    </div>
                  )
                })}
              </div>
              Likes:
              <img src={heart} onClick={likeItinerary} />
              {itinerariesLikes.length}
            </div>
          </div>
        </div>
        <div>
          <Accordion defaultActiveKey={props.Itineraries.id}>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="view" onClick={toggleInfo}><p>{collapse ? "View More":"View Less"}</p></Accordion.Header>
              <Accordion.Body>
                <div className="activity">
                  <h2>Activities:</h2>
                  {activities.map((activities) => (
                    <div className="activitiesCards">
                      <Activity
                        Activities={activities}
                        key={activities._id}
                      />
                    </div>
                  ))}
                </div>
                <Comments itineraryId={props.Itineraries._id} comments={props.Itineraries.comments} />

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userId: state.authReducer._id,
    token: state.authReducer.token,
  }
}

const mapDispatchToProps = {
  getActivitiesByItinerary: itinerariosActions.getActivitiesByItinerary,
  likeDislike: itinerariosActions.likeDislike
}
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)
