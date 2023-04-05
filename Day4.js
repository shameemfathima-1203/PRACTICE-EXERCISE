import React, { useState } from 'react'

export default function Day4() {

    const[input,setInput]=useState("");
    const[output,setOutput]=useState("");

    function handleChange(event)
    {
        setInput(event.target.value);
    }
    function handleClick()
    {
        setOutput(input);
        setInput("");
}


  return (
    <div className='day4'>
    <br></br><p>ENTER THE NAME OF FAVORITE FRUIT:</p>
    <form>
    <br></br>
    <p>NAME:</p>
    <input type="text" placeholder='ENTER THE NAME' onChange={handleChange} value={input} ></input>
    <p>CHOOSE THE CATEGORY : </p>
       <select name="fruit"  >
       <input  type='text' placeholder='fruits' ></input>
       <option value="fruits">ORANGE</option>
       <option value="fruits">WATER MELON</option>
       <option value="fruits">BANANA</option>
       <option value="fruits">MUSKMELON</option>
       <option value="fruits">STRAWBERRY</option>
       <option value="fruits">APPLE</option>
       
       </select>
    
    </form>
    <br></br>
    <button id='button' onClick={handleClick} >SUBMIT</button>
    <h1>EAT FRUITS...STAY HEALTHY!!! {output}</h1>  
    </div>
  )
}