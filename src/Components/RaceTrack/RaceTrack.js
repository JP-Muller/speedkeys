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
          // src='https://media.discordapp.net/attachments/409463862098919424/657054163720601600/unknown.png'
          alt="sprite"
          height="50px"
          width="50px"
        //   style={{left: (calc(percentComplete - 55)) + '%'}}
        style={{left: dynamicPosition, borderRadius: '50%'}}
        />
      <div className="track">
        <div className="start"></div>
        <div className="finish"></div>
      </div>
    </div>
  );
}
