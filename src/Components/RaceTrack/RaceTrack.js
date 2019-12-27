import React from "react";
import "./RaceTrack.css";

export default function RaceTrack(props) {
    const {percentComplete} = props
    let dynamicPosition = 'calc(' + percentComplete + '% - 27px)'
  return (
    <div className="track-container">
        <img
          className="racer"
          src="http://pixelartmaker.com/art/0450984eb0e24b5.png"
          alt="sprite"
          height="50px"
          width="50px"
        style={{left: dynamicPosition, borderRadius: '50%'}}
        />
      <div className="track">
        <div className="start"></div>
        <div className="finish"></div>
      </div>
    </div>
  );
}
