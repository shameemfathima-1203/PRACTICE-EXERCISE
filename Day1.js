import React from "react";

const alertBox=()=>{
    alert('Message from Javascript Developer');
}
const console_ =()=>{
    console.log("Message to Developer");
}
const myarray=['a','e','i','o','u'];
const check=()=>{
    alert("Check console");
    myarray.push('u');
    console.log(myarray);
}
export default function Day1() {
  return (
    <div id="button">
    <br></br><br></br>
    <button onClick={alertBox}>Click Me</button><br></br>
    <button onClick={console_}>Click Me</button><br></br>
    <button onClick={check}>Click Me</button>
    </div>
  )
}