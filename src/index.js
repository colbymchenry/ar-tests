import React, { Component } from "react";
import { render } from "react-dom";
import { VRButton, ARButton, XR, Controllers, Hands, XREvent, XRButton } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'

class ReactArApp extends Component {
  render() {
    return (
      <>
      <Canvas>

      <XR
        /**
         * Enables foveated rendering. Default is `0`
         * 0 = no foveation, full resolution
         * 1 = maximum foveation, the edges render at lower resolution
         */
        foveation={0}
        /**
         * The target framerate for the XRSystem. Smaller rates give more CPU headroom at the cost of responsiveness.
         * Recommended range is `72`-`120`. Default is unset and left to the device.
         * @note If your experience cannot effectively reach the target framerate, it will be subject to frame reprojection
         * which will halve the effective framerate. Choose a conservative estimate that balances responsiveness and
         * headroom based on your experience.
         * @see https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Rendering#refresh_rate_and_frame_rate
        */
        frameRate={72 | 90 | 120}
        /** Type of WebXR reference space to use. Default is `local-floor` */
        referenceSpace="local-floor"
        /** Called as an XRSession is requested */
        onSessionStart={(event) =>  console.log("onSessionStart")}
        /** Called after an XRSession is terminated */
        onSessionEnd={(event) =>  console.log("onSessionEnd")}
        /** Called when an XRSession is hidden or unfocused. */
        onVisibilityChange={(event) =>  console.log("onVisibilityChange")}
        /** Called when available inputsources change */
        onInputSourcesChange={(event) => console.log("onInputSourcesChange")}
      >
              <XRButton
  /* The type of `XRSession` to create */
  mode={'AR'}
  /**
   * `XRSession` configuration options
   * @see https://immersive-web.github.io/webxr/#feature-dependencies
   */
  sessionInit={{ optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking', 'layers'] }}
  /** Whether this button should only enter an `XRSession`. Default is `false` */
  enterOnly={false}
  /** Whether this button should only exit an `XRSession`. Default is `false` */
  exitOnly={false}
  /** This callback gets fired if XR initialization fails. */
  onError={(error) => console.error(error)}
>
  {/* Can accept regular DOM children and has an optional callback with the XR button status (unsupported, exited, entered) */}
  {(status) => `WebXR ${status}`}
</XRButton>
          <Controllers />
          <Hands />
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="blue" />
          </mesh>
        </XR>
      </Canvas>
    </>
    );
  }
}



// render(<ReactArApp />, document.getElementById("root"));