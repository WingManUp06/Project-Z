import React, {useRef } from 'react'
import { WebcamCapture } from './GetVideoData';

function VideoPlayer(props){
    const video = useRef();
    function update(e) {
        video.src = e.data.url;
    }
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(function (stream) {
            console.log(stream)
          })
          .catch(function (err) {
            console.log("Something went wrong!");
          });
      }
    return(
        <>
            <WebcamCapture/>
        </>
    )
}

export default VideoPlayer;