import React, { useState } from 'react';
import Webcam from "react-webcam";
import './GetVideoData.css';

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    facingMode: "user"
};

export const WebcamCapture = () => {

    const webcamRef = React.useRef(null);

    return (
        <div className="webcam-container">
            <div style = {{width:'100%', borderRadius:'20px'}}>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="video/webp"
                    videoConstraints={videoConstraints}
                />
            </div>
        </div>
    );
};