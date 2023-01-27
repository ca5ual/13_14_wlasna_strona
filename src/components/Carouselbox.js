import React, { Component } from 'react'

import Carousel from 'react-bootstrap/Carousel';
import png11 from '../assets/png11.jpg';
import png22 from '../assets/png22.jpg';
export default class Carouselbox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
        <img 
        className="d-block w-20"
        src = {png11}
        alt = "balony1" />
        <Carousel.Caption>
            <h3>Loty Balonem</h3>
            <p>Spełnij swoje marzenia</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img 
        className="d-block w-20"
        src = {png22}
        alt = "balony2" />
        <Carousel.Caption>
            <h3>Przepowiednia</h3>
            <p>„Dzisiejszy dzień jest wart ryzyka”</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
