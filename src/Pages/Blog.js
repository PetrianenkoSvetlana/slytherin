import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, ListGroup} from "react-bootstrap";
import Art from "../Assets/Art.jpg";
import cuteSnake from "../Assets/Cute_Snake.jpg";
import girl from "../Assets/Girl_from_Slytherin.jpg";
import sortingHat from "../Assets/Sorting_Hat.jpg";
import slytherin from "../Assets/It's_Slytherin.jpg";
import snake from "../Assets/Snake.jpg";
import cuteStranger from "../Assets/Cute_Stranger.jpg";
import stone from "../Assets/Stone.jpg";

class Blog extends Component {
    render() {
        return (
            <Container className="my-4">
                <CardGroup>
                    <Row className="row-cols-2">
                        <Col md="9">
                            <Card className="mt-2">
                                <Row>
                                    <Col className="m-2">
                                        <Card.Img
                                            variant="left"
                                            src={Art}
                                            height="250"
                                        />
                                    </Col>
                                    <Col md="8">
                                        <Card.Body>
                                            <Card.Text>The approximate popularity of faculties in Hogwarts Legacy was estimated by statistics on achievements associated with visiting the cartography hall. For completing this mission, the game provides four achievements — one for each school. Thus, these statistics of the popularity of faculties are only approximate, since they do not take into account players who have not yet completed the task.</Card.Text>
                                            <Card.Text>Slytherin has become the most popular faculty in Hogwarts Legacy — based on Achievement statistics.</Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                            <Card className="mt-2">
                                <Row>
                                    <Col className="m-2">
                                        <Card.Img
                                            variant="left"
                                            src={cuteSnake}
                                            height="250"
                                        />
                                    </Col>
                                    <Col md="8">
                                        <Card.Body>
                                            <Card.Text>Hermione Granger: "Sir — what exactly do you mean by the ‘horror within’ the Chamber?"</Card.Text>
                                            <Card.Text>Professor Binns: "That is believed to be some sort of monster, which the Heir of Slytherin alone can control."</Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                            <Card className="mt-2">
                                <Row>
                                    <Col className="m-2">
                                        <Card.Img
                                            variant="left"
                                            src={girl}
                                            height="250"
                                        />
                                    </Col>
                                    <Col md="8">
                                        <Card.Body>
                                            <Card.Text>Who is she?</Card.Text>
                                            <Card.Text>Just a new student?</Card.Text>
                                            <Card.Text>Perhaps.</Card.Text>
                                            <Card.Text>She's frighteningly strange. She came here for a reason.</Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                            <Card className="mt-2">
                                <Row>
                                    <Col className="m-2">
                                        <Card.Img
                                            variant="left"
                                            src={sortingHat}
                                            height="250"
                                        />
                                    </Col>
                                    <Col md="8">
                                        <Card.Body>
                                            <Card.Text>Are you afraid of what you'll hear?</Card.Text>
                                            <Card.Text>Afraid I'll speak the name you fear?</Card.Text>
                                            <Card.Text>Not Slytherin! Not Gryffindor!</Card.Text>
                                            <Card.Text>Not Hufflepuff! Not Ravenclaw!</Card.Text>
                                            <Card.Text>Don't worry, child, I know my job,</Card.Text>
                                            <Card.Text>You'll learn to laugh, if first you sob.</Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                            <Card className="mt-2">
                                <Row>
                                    <Col className="m-2">
                                        <Card.Img
                                            variant="left"
                                            src={slytherin}
                                            height="250"
                                        />
                                    </Col>
                                    <Col md="8">
                                        <Card.Body>
                                            <Card.Text>This Hogwarts House was founded by Salazar Slytherin and exemplifies ambition, cunning and resourcefulness. Its colour is green and silver, its animal is the serpent, its ghost is the Bloody Baron, its Head of House is Horace Slughorn (replaced by Severus Snape between his retirement and return) and it is associated with the element of water. Slytherins have a — not always fair — reputation for being underhanded bigots, and their house has the reputation of producing more dark wizards than any other house.</Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                            <Card className="mt-2">
                                <Row>
                                    <Col className="m-2">
                                        <Card.Img
                                            variant="left"
                                            src={snake}
                                            height="250"
                                        />
                                    </Col>
                                    <Col md="8">
                                        <Card.Body>
                                            <Card.Text>Ron Weasley: "You're a Parselmouth. Why didn't you tell us?"</Card.Text>
                                            <Card.Text>Harry Potter: "I'm a what?"</Card.Text>
                                            <Card.Text>Ron Weasley: "A Parselmouth! You can talk to snakes!"</Card.Text>
                                            <Card.Text>Harry Potter: "I know. I mean, that's only the second time I've ever done it. I accidentally set a boa constrictor on my cousin Dudley at the zoo once — long story — but it was telling me it had never seen Brazil and I sort of set it free without meaning to — that was before I knew I was a wizard —"</Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                            <Card className="mt-2">
                                <Row>
                                    <Col className="m-2">
                                        <Card.Img
                                            variant="left"
                                            src={cuteStranger}
                                            height="250"
                                        />
                                    </Col>
                                    <Col md="8">
                                        <Card.Body>
                                            <Card.Text>Nifflers were rodent-like creatures with a long snout similar to that of a platypus and a coat of black, fluffy fur Native to Britain, they lived in burrows as deep as twenty feet below ground, and females produced six to eight young in a single litter.</Card.Text>
                                            <Card.Text>Nifflers were gentle by nature and could even be affectionate towards their owners However, they could destroy belongings looking for sparkly objects, and for that reason it was inadvisable to keep them as a house pet It was also implied that they could turn vicious if provoked, as the second Niffler released into Dolores Umbridge's office apparently tried to take a chunk out of her leg.</Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                            <Card className="mt-2">
                                <Row>
                                    <Col className="m-2">
                                        <Card.Img
                                            variant="left"
                                            src={stone}
                                            height="250"
                                        />
                                    </Col>
                                    <Col md="8">
                                        <Card.Body>
                                            <Card.Text>The Slytherin common room was in the dungeons of Hogwarts Castle and underneath the Black Lake. Because of this, the light in the common room was green. Harry Potter along with Ron Weasley entered the common room in his second year to find out if Draco Malfoy was the one opening the Chamber of Secrets. To enter the Slytherin common room one must merely speak aloud the current password in front of a stretch of a damp stone wall; once the word was uttered a concealed stone door would slide aside leaving a rectangular hole in the wall leading to the Slytherin common room. The only known Slytherin password was "pureblood", used in 1992.</Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                        <Col md="3">
                            <h5 className="text-center">Categories</h5>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>History</ListGroup.Item>
                                    <ListGroup.Item>Readers' Stories</ListGroup.Item>
                                    <ListGroup.Item>Creatures</ListGroup.Item>
                                    <ListGroup.Item>Quotes from books</ListGroup.Item>
                                    <ListGroup.Item>Additionally</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </CardGroup>


            </Container>
        );
    }
}

export default Blog;