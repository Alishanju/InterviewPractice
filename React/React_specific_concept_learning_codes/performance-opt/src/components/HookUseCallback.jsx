import React,{memo,useState} from 'react'
import { useCallback } from 'react';
//Prevents unnecessary re-renders of child components when functions are passed as props.
  const Child=memo(({handleClick})=>{
    console.log("child rendered");
    return <>
    <button onClick={handleClick}>Click me to increment count!</button>
    </>
})

const HookUseCallback = () => {
  
 const [count,setCount]=useState(0);
   const [toggle,setToggle]=useState(false);
   const increment=useCallback(()=>{  //without useCallback.this function is created everytime even tpoggle button clicked / parent component rerender
    setCount(prev => prev+1);
   },[]) //// Empty dependency array means this function is only created once.
  return (
    <div>
        <p>{count}</p>
        <Child handleClick={increment} /> 
        <button onClick={()=>setToggle(prev=>!prev)}>Toggle button</button>
        

      
    </div>
  )
}

export default HookUseCallback
