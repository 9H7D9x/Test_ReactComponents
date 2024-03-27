import React, { useState } from 'react'
import Output from "./Output"

const Greeting = () => {
    const[textChanged, setTextChanged]=useState(false);

    function handleText(){
        setTextChanged(true);
    }
  return (
    <div>
        <div>Hello World!</div>
        {/* {textChanged ? <div>text Changed</div>: <div>didnt Change</div>} */}
        {!textChanged && <Output>it's goood to see you</Output>}
        {textChanged && <Output>text changed</Output>}
        <button onClick={handleText}>Changed!</button>
    </div>
  )
}

export default Greeting