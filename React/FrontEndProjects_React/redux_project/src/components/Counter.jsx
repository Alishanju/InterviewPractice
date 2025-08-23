import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { decrement, fetchRecipes, increment, incrementAsync, incrementByAmount } from '../store/counter/counter';


const Counter = () => {
  const count=useSelector(state=> state.counter.value);
  const loading=useSelector(state =>state.counter.loading);
  const recipes=useSelector(state=>state.counter.recipes);
  const recipeLoader=useSelector(state=> state.counter.recipeLoader);
  const dispatch=useDispatch();
  return (
    <div>
        {loading ? <div className='spinner'></div> :
        <h2>{count}</h2>}
        <button onClick={()=>dispatch(increment())}> Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(10))}>IncrementByAmount</button>
        <button onClick={()=>dispatch(incrementAsync(100))}>IncrementByASync</button>
        <button onClick={()=>dispatch(fetchRecipes())}>FetchRecipes</button>
        {recipeLoader && <div className='spinner'></div> }
        {!recipeLoader && recipes && <div>{recipes.map(rec=> <p>{rec.name}</p>)}</div>}




      
      
    </div>
  )
}

export default Counter
