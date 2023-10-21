import React, { useState } from 'react'

export const UseStateDemo = () => {
    //useState is a hook that allows you to have state variables in functional components
    //virtual dom --> exact copy of real dom
    //var count = 0;
    //[count] --> state variable
    //setcount --> function to change the value of state variable
    //useState(0) --> 0 is the initial value of state variable
    //[]
    //{}
    //false,true
    var [count, setcount] = useState(0)
    const increseCount = () => {
        count++;
        setcount(count);
        console.log(count);
    }
  return (
    <div>
        <h1>UseStateDemo</h1>
        <h1>COUNT = {count}</h1>
        {/* <button onClick={()=>{increseCount()}}>+</button> */}
        <button onClick={()=>{setcount(count+1)}}>+</button>
    </div>
  )
}
