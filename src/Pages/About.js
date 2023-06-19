import React, {Component} from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import Aesthetics from "../Assets/Aesthetics.jpg";
import BestStudents from "../Assets/BestStudents.png";
import SalazarSlytherin from "../Assets/SalazarSlytherin.jpg";

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm="3">
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Aesthetics of the Slytherin Faculty</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second">Best students</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="third">Our creator</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm="9">
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src={Aesthetics} alt="" className="rounded mx-auto d-block"/>
                                    <h3 className="mt-3">Dark Greens and Blacks</h3>
                                    <p>An outfit isn’t up to code for the Slytherin aesthetic if it doesn’t sport the right house colors. The Slytherin house’s aesthetic calls for green and silver, its official house colors. But the aesthetic is fairly flexible and allows for greens, silvers, blacks, and grays. Not neon shades of green, though, that’s definitely not very Slytherin. So, what colors could fit the Slytherin aesthetic?</p>
                                    <p>Acceptable shades of green include basil green, pine, juniper, Sacramento, emerald, and fern. Yes, all leaning towards the darker end of the color spectrum. Black and silver are self-explanatory but grays, surprisingly enough, actually come in different shades, some of which fit the aesthetic better than others. A good shade of gray, that borders on green, is artichoke as well as laurel. Pewter, lava, and charcoal gray would look amazing as a vest under an unbuttoned black pea coat combined with an emerald green scarf.</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <img src={BestStudents} alt="" className="rounded mx-auto d-block"/>
                                    <h3 className="mt-3">Members</h3>
                                    <p>While Slytherin has a bad reputation in the Harry Potter series, the students who came out of Slytherin are not evil. The idea of Slytherin as the main evil in the house is quite problematic, but there are many Slytherin traits that are admirable. Given that Slytherins are known for their cunning and ambition, it is not surprising that many of the students were good students and highly qualified. Even some of the worst people who came out of the Slytherin house were extremely smart.</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img src={SalazarSlytherin} alt="" className="rounded mx-auto d-block"/>
                                    <h3 className="mt-3">Salazar Slytherin</h3>
                                    <p>Salazar Slytherin is the greatest sorcerer, one of the four founders of the Hogwarts School of Witchcraft and Wizardry. He was fond of Dark Magic and was known as an ardent fighter for the purity of the blood of the Magical Community. One of the faculties of the School is named in his honor. The Slytherin symbol is a silver snake on a green background. He could speak the language of snakes. A skillful legilement. He appreciated purposefulness, ambition, cunning and pure blood in people. Guided by these criteria, I selected my students. From the song of the Distributing Hat, you can learn that Slytherin was born (or lived) somewhere in the swamps. Salazar had been Godric Gryffindor's best friend all his life, falling out with him at the end of the road.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;