import React, {Component} from 'react';
import {Container, Form, FormControl, Nav, Navbar, Button} from "react-bootstrap";
import logo from './logo.png'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

class Header extends Component {
    render() {
        return (
            <> {/*Сокращенная запись объявления фрагмента*/}
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> Slytherin
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Home </Nav.Link>
                                <Nav.Link href="/about"> About us </Nav.Link>
                                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                                <Nav.Link href="/blog"> Blog </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="form-control me-2"
                                />
                                <Button variant="outline-info"> Search </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/about" element={<About/>} />
                        <Route exact path="/contacts" element={<Contacts/>} />
                        <Route exact path="/blog" element={<Blog/>} />
                    </Routes>
                </Router>


            </>
        );
    }
}

export default Header;