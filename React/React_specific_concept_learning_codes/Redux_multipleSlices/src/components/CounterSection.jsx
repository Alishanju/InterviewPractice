import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../store/counterSlice';

const CounterSection = () => {
const count=useSelector(state => state.counter.value);
  const dispatch=useDispatch();
  return (
    <div>
        <h1>CounterSlice Implementation:</h1>
              <p>Count: {count}</p>
              <button onClick={() => dispatch(increment())}>Increment</button>
              <button onClick={()=>dispatch(decrement())}>Decrement</button>
              <button onClick={()=>dispatch(reset())}>Reset</button>
      
    </div>
  )
}

export default CounterSection
