import React, { Component } from 'react'
import "./movie.mp4";
import "./Video.css"
export default class Video extends Component {
  render() {
    return (
       
      <div id = "video_container">
        <video width="320" height="240" controls> 
        <source src="./movie.mp4" type="video/mp4" /> 
        </video>
        
      </div>
    )
  }
}

