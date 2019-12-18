import React from "react";

export default function Speed(props) {
  if (props.correctSymbols !== 0 && props.seconds !== 0) {
    const wpm = props.correctSymbols / 5 / (props.seconds / 60);
    return (
      <div>
        <h5>{Math.round(wpm)} wpm</h5>
      </div>
    );
  }
  return (
    <div>
    <h5>0 wpm</h5>
  </div>
  );
}
