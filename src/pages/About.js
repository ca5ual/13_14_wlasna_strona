import React, {Component} from "react";
import { Container, Nav, Tab, Row, Col } from "react-bootstrap";


export default class About extends Component {
    render () {
        return (
            <Container sticky="top">
                <Tab.Container id = "ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm = {3}>
                            <Nav variant = "pills" className = "flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Właściciele</Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Cena</Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item>
                                    <Nav.Link eventKey="third">Historia</Nav.Link>
                                    </Nav.Item>
                             

                            </Nav>
                        </Col>
                        <Col sm = {6}>
                            <Tab.Content className = "mt-3">
                                <Tab.Pane eventKey = "first">
                                    <h2>Lorem 2021</h2>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                         
                                         <h3>Lorem 2021 (2)</h3>
                                         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <img src = "https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                             
                                </Tab.Pane>

                                <Tab.Pane eventKey = "second">
                                <h2>Lorem 2022</h2>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <img src = "https://images.pexels.com/photos/2119314/pexels-photo-2119314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                                 
                                </Tab.Pane>

                                <Tab.Pane eventKey = "third">
                                <h3>Lorem 2023</h3>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <img src = "https://images.pexels.com/photos/12891139/pexels-photo-12891139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                                    
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}