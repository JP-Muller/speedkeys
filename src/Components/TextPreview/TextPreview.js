import React from "react";

export default function Preview(props) {
  const text = props.text.split("");
  const userInput = props.userInput.split("");

  return (
    <div className="border rounded p-3 mb-4" style={{minWidth: '60vw', maxWidth: '60vw', fontSize: '22px'}}>
      {text.map((symbol, i) => {
          let color;
          if(i < userInput.length){
              color = symbol === userInput[i] ? '#dfffa0' : '#fcbea4'
          }
        return <span key={i} style={{backgroundColor: color}}>{symbol}</span>;
      })}
    </div>
  );
}
