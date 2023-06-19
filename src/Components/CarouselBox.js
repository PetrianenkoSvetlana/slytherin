import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import Carousel0 from "../Assets/Carousel0.jpg";
import Carousel1 from "../Assets/Carousel1.jpg";
import Carousel2 from "../Assets/Carousel2.jpg";
import Carousel3 from "../Assets/Carousel3.jpg";
import Carousel4 from "../Assets/Carousel4.jpg";


class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carousel0}
                        alt="Forbidden Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forbidden Forest</h3>
                        <p>So Harry set off into the heart of the Forest with Malfoy and Fang. They walked for nearly half an hour, deeper and deeper into the Forest, until the path became almost impossible to follow because the trees were so thick.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carousel1}
                        alt="Forbidden Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forbidden Forest</h3>
                        <p>So they followed the darting shadows of the spiders into the trees. They couldn't move very quickly now; there were tree roots and stumps in their way, barely visible in the near blackness.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carousel2}
                        alt="Slytherin"
                    />
                    <Carousel.Caption>
                        <h3>Slytherin</h3>
                        <p>Or perhaps in Slytherin,
                            You'll make your real friends,
                            Those cunning folk use any means,
                            To achieve their ends.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carousel3}
                        alt="Slytherin"
                    />
                    <Carousel.Caption>
                        <h3>Slytherin</h3>
                        <p>I always knew Salazar Slytherin was a twisted old loony, but I never knew he started all this pure-blood stuff. I wouldn't be in his house if you paid me. Honestly, if the Sorting Hat had tried to put me in Slytherin, I'd've got the train straight back home...</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carousel4}
                        alt="Forbidden Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forbidden Forest</h3>
                        <p>I shall wait for one hour in the Forbidden Forest. If, at the end of that hour, you have not come to me, have not given yourself up, then battle recommences.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;