import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import Art from "../Assets/Art.jpg";
import cuteSnake from "../Assets/Cute_Snake.jpg";
import girl from "../Assets/Girl_from_Slytherin.jpg";
import sortingHat from "../Assets/Sorting_Hat.jpg";

class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container className="mb-4">
                    <h2 className="text-center m-4">Something interesting</h2>
                    <CardGroup>
                        <Row className="row-cols-md-4">
                            <Col className="mt-4">
                                <Card className="h-100" border="light">
                                    <Card.Img
                                        variant="top"
                                        src={Art}
                                    />
                                    <Card.Body>
                                        <Card.Title>Slytherin Art</Card.Title>
                                        <Card.Text>Slytherin has become the most popular faculty in Hogwarts Legacy — based on Achievement statistics.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="mt-4">
                                <Card className="h-100" border="light">
                                    <Card.Img
                                        variant="top"
                                        src={cuteSnake}
                                    />
                                    <Card.Body>
                                        <Card.Title>Cute Snake</Card.Title>
                                        <Card.Text>Hermione Granger: "Sir — what exactly do you mean by the ‘horror within’ the Chamber?"</Card.Text>
                                        <Card.Text>Professor Binns: "That is believed to be some sort of monster, which the Heir of Slytherin alone can control."</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="mt-4">
                                <Card className="h-100" border="light">
                                    <Card.Img
                                        variant="top"
                                        src={girl}
                                    />
                                    <Card.Body>
                                        <Card.Title>Girl from Slytherin</Card.Title>
                                        <Card.Text>Who is she?</Card.Text>
                                        <Card.Text>Just a new student?</Card.Text>
                                        <Card.Text>Perhaps.</Card.Text>
                                        <Card.Text>She's frighteningly strange. She came here for a reason.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="mt-4">
                                <Card className="h-100" border="light">
                                    <Card.Img
                                        variant="top"
                                        src={sortingHat}
                                    />
                                    <Card.Body>
                                        <Card.Title>Sorting Hat</Card.Title>
                                        Are you afraid of what you'll hear?
                                        Afraid I'll speak the name you fear?
                                        Not Slytherin! Not Gryffindor!
                                        Not Hufflepuff! Not Ravenclaw!
                                        Don't worry, child, I know my job,
                                        You'll learn to laugh, if first you sob.
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </CardGroup>
                </Container>
            </>
        );
    }
}

export default Home;