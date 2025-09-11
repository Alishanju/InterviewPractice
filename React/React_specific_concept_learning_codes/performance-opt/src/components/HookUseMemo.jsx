import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const HookUseMemo = () => {
    const [count,setCount]=useState(0);
    const [dark,setDark]=useState(false);
    const theme={
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black"
    }

    const expensiveCalculation=(num)=>{
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num+=1; //slows down the app as its heavy , also runs on toggle theme button(however doesnt increment) 
    } // heavy loop
    return num;

    }

    const result= useMemo(()=>expensiveCalculation(count),[count]); //expensive function caches result and so called only when count changes
    //empty dependency array mounts /calls function only at intial render not ven when count changes
  return (
    <div style={theme}>
        <h2>Expensive Calculation Result:{result}</h2>
        <h3>Count:{count}</h3>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment Count</button>
        <button onClick={()=>setDark(prev=>!prev)}>Toggle Theme</button>
      
    </div>
  )
}

export default HookUseMemo
