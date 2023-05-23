import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import rhettImage from './images/rhett-beardemphl.jpg'
import jacobImage from './images/jacob-bassett.jpg'

class Profile extends Component {
  render() {
    /* TODO: render information about the developers */
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src={rhettImage}
            alt={"rhett's profile pic"}
          />
          <Carousel.Caption>
            <h3>Rhett Beardemphl</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src={jacobImage}
            alt={"jacob's profile pic"}
          />
          <Carousel.Caption>
            <h3>Jacob Bassett</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Profile;
