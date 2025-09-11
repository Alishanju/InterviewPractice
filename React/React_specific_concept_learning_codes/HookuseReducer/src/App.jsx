
import { useReducer } from 'react'
import './App.css'

function App() {
 
function reducer(state,action){
  switch(action.type){
    case "increment":
      return {count:state.count+1}
    case "decrement":
      return {count:state.count-1}
    case "reset":
      return {count:0}
    default:
      return state;
  }
}


  const [state,dispatch]=useReducer(reducer,{count:0});

 

  return (
    <>
    <h1>Count:{state.count}</h1>
    <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
    <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
    <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
      
    </>
  )
}

export default App
