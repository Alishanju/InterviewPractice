import React from 'react'
import { memo } from 'react';
import { useState } from 'react'
//Prevents re-rendering of a component if its props haven’t changed.
//without memo around child component,child is rendered for clicking both buttons above
//Child re-renders only if count changes, not when other changes.

const Child=memo(({count})=>{
    console.log("child rendered");
    return <h1>Count in child is {count}</h1>
})
const Memo = () => {
   const [count,setCount]=useState(0);
   const [toggle,setToggle]=useState(false);
  return (
    <div>
        <Child count={count} />
        <button onClick={()=>setCount(count+1)}>Increment count</button>
        <button onClick={()=>setToggle(prev=>!prev)}>Toggle button</button>
        

      
    </div>
  )
}

export default Memo
