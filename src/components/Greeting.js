import React from 'react'
import { useState } from 'react';
const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
      setChangedText(true);
    };
  return (
    <div>
     <h1>hello world</h1> 
     <h2>my name</h2>
     {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  )
}

export default Greeting
