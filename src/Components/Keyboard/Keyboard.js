import React from "react";
import "./Keyboard.css";

export default function Keyboard(props) {
  const { currentKeyCode } = props;

  return (
    <div className="center">
      <div className="keyboard-wrapper">
        <div className={"key" + (currentKeyCode === 192 ? " activated" : " ")}>`</div>
        <div className={"key" + (currentKeyCode === 49 ? " activated" : " ")}>1</div>
        <div className={"key" + (currentKeyCode === 50 ? " activated" : " ")}>2</div>
        <div className={"key" + (currentKeyCode === 51 ? " activated" : " ")}>3</div>
        <div className={"key" + (currentKeyCode === 52 ? " activated" : " ")}>4</div>
        <div className={"key" + (currentKeyCode === 53 ? " activated" : " ")}>5</div>
        <div className={"key" + (currentKeyCode === 54 ? " activated" : " ")}>6</div>
        <div className={"key" + (currentKeyCode === 55 ? " activated" : " ")}>7</div>
        <div className={"key" + (currentKeyCode === 56 ? " activated" : " ")}>8</div>
        <div className={"key" + (currentKeyCode === 57 ? " activated" : " ")}>9</div>
        <div className={"key" + (currentKeyCode === 48 ? " activated" : " ")}>0</div>
        <div className={"key" + (currentKeyCode === 189 ? " activated" : " ")}>-</div>
        <div className={"key" + (currentKeyCode === 187 ? " activated" : " ")}>=</div>
        <div className={"key backspace" + (currentKeyCode === 8 ? " activated" : " ")}>Backspace</div>
        <div className={"key tab" + (currentKeyCode === 9 ? " activated" : " ")}>Tab</div>
        <div className={"key" + (currentKeyCode === 81 ? " activated" : " ")}>Q</div>
        <div className={"key" + (currentKeyCode === 87 ? " activated" : " ")}>W</div>
        <div className={"key" + (currentKeyCode === 69 ? " activated" : " ")}>E</div>
        <div className={"key" + (currentKeyCode === 82 ? " activated" : " ")}>R</div>
        <div className={"key" + (currentKeyCode === 84 ? " activated" : " ")}>T</div>
        <div className={"key" + (currentKeyCode === 89 ? " activated" : " ")}>Y</div>
        <div className={"key" + (currentKeyCode === 85 ? " activated" : " ")}>U</div>
        <div className={"key" + (currentKeyCode === 73 ? " activated" : " ")}>I</div>
        <div className={"key" + (currentKeyCode === 79 ? " activated" : " ")}>O</div>
        <div className={"key" + (currentKeyCode === 80 ? " activated" : " ")}>P</div>
        <div className={"key" + (currentKeyCode === 219 ? " activated" : " ")}>[</div>
        <div className={"key" + (currentKeyCode === 221 ? " activated" : " ")}>]</div>
        <div className={"key backslash" + (currentKeyCode === 220 ? " activated" : " ")}>\</div>
        <div className={"key capslock" + (currentKeyCode === 20 ? " activated" : " ")}>Caps Lock</div>
        <div className={"key" + (currentKeyCode === 65 ? " activated" : " ")}>A</div>
        <div className={"key" + (currentKeyCode === 83 ? " activated" : " ")}>S</div>
        <div className={"key" + (currentKeyCode === 68 ? " activated" : " ")}>D</div>
        <div className={"key" + (currentKeyCode === 70 ? " activated" : " ")}>F</div>
        <div className={"key" + (currentKeyCode === 71 ? " activated" : " ")}>G</div>
        <div className={"key" + (currentKeyCode === 72 ? " activated" : " ")}>H</div>
        <div className={"key" + (currentKeyCode === 74 ? " activated" : " ")}>J</div>
        <div className={"key" + (currentKeyCode === 75 ? " activated" : " ")}>K</div>
        <div className={"key" + (currentKeyCode === 76 ? " activated" : " ")}>L</div>
        <div className={"key" + (currentKeyCode === 186 ? " activated" : " ")}>;</div>
        <div className={"key" + (currentKeyCode === 222 ? " activated" : " ")}>'</div>
        <div className={"key enter" + (currentKeyCode === 13 ? " activated" : " ")}>
          Enter
        </div>
        <div className={"key leftshift" + (currentKeyCode === 16 ? " activated" : " ")}>Shift</div>
        <div className={"key" + (currentKeyCode === 90 ? " activated" : " ")}>Z</div>
        <div className={"key" + (currentKeyCode === 88 ? " activated" : " ")}>X</div>
        <div className={"key" + (currentKeyCode === 67 ? " activated" : " ")}>C</div>
        <div className={"key" + (currentKeyCode === 86 ? " activated" : " ")}>V</div>
        <div className={"key" + (currentKeyCode === 66 ? " activated" : " ")}>B</div>
        <div className={"key" + (currentKeyCode === 78 ? " activated" : " ")}>N</div>
        <div className={"key" + (currentKeyCode === 77 ? " activated" : " ")}>M</div>
        <div className={"key" + (currentKeyCode === 188 ? " activated" : " ")}>,</div>
        <div className={"key" + (currentKeyCode === 190 ? " activated" : " ")}>.</div>
        <div className={"key" + (currentKeyCode === 191 ? " activated" : " ")}>/</div>
        <div className={"key rightshift"}>Shift</div>
        <div className={"key ctrl" + (currentKeyCode === 17 ? " activated" : " ")}>Ctrl</div>
        <div className="key windows">Windows</div>
        <div className={"key" + (currentKeyCode === 18 ? " activated" : " ")}>Alt</div>
        <div className={"key space" + (currentKeyCode === 32 ? " activated" : " ")}>Space</div>
        <div className={"key"}>Alt</div>
        <div className="key windows">Windows</div>
        <div className={"key ctrl"}>Ctrl</div>
      </div>
    </div>
  );
}
