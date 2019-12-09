import React, { useEffect } from "react";
import Preview from "./Preview";
import getText from "./getText";
import Speed from "./Speed";
import Keyboard from "./Keyboard/Keyboard";

function Practice() {
  const [text, setText] = React.useState(getText());
  const [userInput, setUserInput] = React.useState("");
  const [correctSymbols, setCorrectSymbols] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [started, setStart] = React.useState(false);
  const [finished, setFinish] = React.useState(false);
  const [currentKeyCode, setKeyCode] = React.useState(null);
  const [showKeyboard, toggleKeyboard] = React.useState(true);

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
  }

  function onUserInputChange(e) {
    setTimer();
    setUserInput(e);
    stopTimer(e);
    setCorrectSymbols(correctSymbolCount(e));
  }

  function correctSymbolCount(userInput) {
    const previewText = text.replace(" ", "");
    return userInput
      .replace(" ", "")
      .split("")
      .filter((symbol, i) => symbol === previewText[i]).length;
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
    console.log(e);
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Preview text={text} userInput={userInput} />
          <textarea
            className="form-control mb-3"
            placeholder="Start Typing..."
            value={userInput}
            readOnly={finished}
            onKeyDown={e => keyHandler(e)}
            onChange={e => onUserInputChange(e.target.value)}
          ></textarea>
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
          {showKeyboard ? <Keyboard currentKeyCode={currentKeyCode} /> : null}
        </div>
      </div>
    </div>
  );
}

export default Practice;
