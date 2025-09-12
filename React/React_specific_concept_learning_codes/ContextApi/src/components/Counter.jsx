import React, { useContext } from 'react'
import { AppContext } from '../store/store'

const Counter = () => {
    const {count,setCount}=useContext(AppContext);
  return (
    <div>
      <h3>Counter Component:</h3>
      <p>Count:{count}</p>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
          <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
