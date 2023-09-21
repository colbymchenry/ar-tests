import React, { useRef } from 'react';
import { ARCanvas, AFrameRenderer, Marker, Entity } from 'react-web-ar';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 3840,
  height: 2160,
  aspectRatio: 1.777777778,
  frameRate: 60,
};

const WebAR = () => {
  const webcamRef = useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );

  return (
    <div>
      <ARCanvas>
      <AFrameRenderer
        arToolKit={{
          trackingMethod: "best",
          sourceType: "image",
          sourceUrl: "./images/hiro_marker.png"
        }}
        inherent={true}
      >
        <Marker parameters={{ "hit-testing-enabled": true, preset: "hiro" }}>
          <Entity
            geometry={{ primitive: "box" }}
            material={{ color: "red" }}
            position={{ x: 0, y: 0.03, z: 0 }}
          />
        </Marker>
      </AFrameRenderer>
      </ARCanvas>
      <Webcam 
        audio={false} 
        ref={webcamRef} 
        screenshotFormat="image/jpeg" 
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </div>
  );
};

export default WebAR;
