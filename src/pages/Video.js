import React, { Component } from 'react'
import ReactPlayer from 'react-player/youtube'
import "./Video.css";

export default class Video extends Component {
  render() {
    const videoPlay = () => console.log ("VideoPlay")
    const pause = () => console.log ("VideoPause")
    const volume = () => console.log ("VolumeIsChanged")
    return (
       <div className="video"
       >
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
      onPlay={videoPlay}
      onPause = {pause}
      onVolumeChange = {volume}
      
      
      />
      <p className="textVideo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    )
  }
}

