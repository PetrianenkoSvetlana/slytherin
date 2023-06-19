import React, {Component} from 'react';
import {Button, Container, Form} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h1 className="text-center">Contact us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text>
                            Yes, we are now on the world Wide web. And no, the Acromantulas didn't take over the world. We just become open to the world. But we won't reveal your secrets.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckBox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Contacts;