import React, { useEffect } from "react";
import Preview from "../TextPreview/TextPreview";
import RaceTrack from "../RaceTrack/RaceTrack";
import getText from "../getText";
import Speed from "../Speed";
import Keyboard from "../Keyboard/Keyboard";
import "./Practice.css";

function Practice() {
  const [text, setText] = React.useState(getText());
  const [userInput, setUserInput] = React.useState("");
  const [correctSymbols, setCorrectSymbols] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [started, setStart] = React.useState(false);
  const [finished, setFinish] = React.useState(false);
  const [currentKeyCode, setKeyCode] = React.useState(null);
  const [showKeyboard, toggleKeyboard] = React.useState(true);
  const [percentComplete, setPercentage] = React.useState(0);
  // const [currentWord, setCurrent] = React.useState("");

  useEffect(() => {
    if (started && !finished) {
      const interval = setInterval(() => {
        return setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => {
        console.log("Cleared");
        clearInterval(interval);
      };
    }
  }, [started, finished]);

  function onRestart() {
    setUserInput("");
    setCorrectSymbols(0);
    setSeconds(0);
    setStart(false);
    setFinish(false);
    setKeyCode(null);
    setPercentage(0);
  }

  function onUserInputChange(e) {
    setTimer();
    setUserInput(e);
    stopTimer(e);
    setCorrectSymbols(correctSymbolCount(e));
  }

  // function setCurrentWord(userInput, text) {
  //   let currentInput = userInput.split(" ");
  //   let currentPreview = text.split(" ");
  //   for (let i = 0; i < currentInput.length; i++) {
  //     if (currentInput[i] === currentPreview[i]) {
  //       currentInput.shift();
  //       setCurrent(currentInput[currentInput.length - 1]);
  //       console.log(currentWord);
  //       console.log(userInput);
  //     }
  //   }
  // }

  function correctSymbolCount(userInput) {
    const previewText = text.replace(" ", "");
    percentCorrectCount(userInput, text);
    return userInput
      .replace(" ", "")
      .split("")
      .filter((symbol, i) => symbol === previewText[i]).length;
  }

  function percentCorrectCount(userInput, text) {
    let equivalency = 0;
    const minLength =
      userInput.length > text.length ? text.length : userInput.length;
    const maxLength =
      userInput.length < text.length ? text.length : userInput.length;
    for (var i = 0; i < minLength; i++) {
      if (userInput[i] === text[i]) {
        equivalency++;
      }
    }
    const weight = equivalency / maxLength;
    setPercentage(weight * 100);
  }

  function setTimer() {
    if (!started) {
      setStart(true);
    }
  }

  function stopTimer(userInput) {
    if (userInput === text) {
      setFinish(true);
    }
  }

  function keyHandler(e) {
    setKeyCode(e.keyCode);
    //Prevent delete if text preview has a match with user input.
    if (e.keyCode === 8) {
      let currentInput = userInput.split(" ");
      let currentPreview = text.split(" ");
      for (let i = 0; i < currentPreview.length; i++) {
        if (currentPreview[i] === currentInput[currentInput.length - 1]) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    }
  }

  return (
    <div className="game-container mt-3">
      {/* <RaceTrack percentComplete={percentComplete} />
      <RaceTrack percentComplete={percentComplete} />
      <RaceTrack percentComplete={percentComplete} /> */}
      <RaceTrack percentComplete={percentComplete} />
      <Preview text={text} userInput={userInput} />
      <textarea
        className="form-control mb-3"
        style={{ minHeight: "60px", maxWidth: "60vw" }}
        placeholder="Start Typing..."
        value={userInput}
        readOnly={finished}
        onKeyDown={e => keyHandler(e)}
        onChange={e => onUserInputChange(e.target.value)}
      ></textarea>
      <div className="info-button-container">
        <Speed correctSymbols={correctSymbols} seconds={seconds} />
        <div className="text-right">
          <button
            className="btn btn-light mr-2"
            onClick={() => toggleKeyboard(!showKeyboard)}
          >
            Toggle Keyboard
          </button>
          <button
            className="btn btn-light mr-2"
            onClick={() => setText(getText())}
          >
            New Text
          </button>
          <button className="btn btn-light" onClick={() => onRestart()}>
            Restart
          </button>
        </div>
      </div>
      {showKeyboard ? <Keyboard currentKeyCode={currentKeyCode} /> : null}
    </div>
  );
}

export default Practice;
