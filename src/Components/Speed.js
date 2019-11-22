import React from 'react'

export default function Speed(props){

    if (props.correctSymbols !== 0 && props.seconds !== 0){
        const wpm = (props.correctSymbols/5) / (props.seconds/60)
    return(
        <div>
            {Math.round(wpm)} wpm
        </div>
    )
}
return null;
}