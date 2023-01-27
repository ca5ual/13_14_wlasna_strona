import React, {Component} from "react";
import { Container, Form, Button } from "react-bootstrap";



export default class Contacts extends Component {
    render () {    
        return (
                
                <div>

                    <Container style = {{ width: '500px'}}>
                        <h1 className ="text-center mt-3" >Napisz do nas</h1>
                        <Form>
                            <Form.Group contrlId = "formBasicEmail">
                                <Form.Label className="mt-3">Email Address</Form.Label>
                                <Form.Control type = "email" placeholder = "Enter email" />
                                <Form.Text >
                                    
                                Nigdy nie udostępnimy Twojego adresu e-mail
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId = "formBasicPassword" className="mt-3">
                                <Form.Label>Tutaj napisz</Form.Label>
                                <Form.Control as = "textarea" rows = "3" />
                            </Form.Group>

                            <Form.Group controlId = "formBasicCheckBox">
                                <Form.Label></Form.Label>
                                <Form.Check type = "checkvox" label = "Check me out" />
                            </Form.Group>

                            <Button variant = "primary" type = "submit" className="mt-1">Submit</Button>
                        </Form>
                    </Container>
                </div>
            )
        }
    }
      
            

     

